import type { Actions } from './$types';
import Stripe from 'stripe';
import { supabase } from '$lib/db';
import {
  PUBLIC_STRIPE_LIVE_PUBLISHABLE_KEY,
  PUBLIC_STRIPE_LIVE_SECRET_KEY,
  PUBLIC_SERVER_URL,
  PUBLIC_STRIPE_PLAN_ONE_PRICE,
  PUBLIC_STRIPE_PLAN_TWO_PRICE,
  PUBLIC_STRIPE_PLAN_THREE_PRICE,
} from '$env/static/public';

export const actions: Actions = {
  createCheckoutSession: async ({ request, locals }) => {
    const { user } = locals.session || {};

    if (!user) {
      console.log('NO USER IN SESSION');
      return { success: false, error: 'User is undefined' };
    }

    console.log('Creating Checkout Session...');

    const data = await request.formData();
    const payment_plan = data.get('plan');
    console.log('Plan: ', payment_plan);

    let planPrice =
      payment_plan == 'plan1'
        ? PUBLIC_STRIPE_PLAN_ONE_PRICE
        : payment_plan == 'plan2'
          ? PUBLIC_STRIPE_PLAN_TWO_PRICE
          : payment_plan == 'plan3'
            ? PUBLIC_STRIPE_PLAN_THREE_PRICE
            : '';

    const stripe = new Stripe(PUBLIC_STRIPE_LIVE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
      success_url: `${PUBLIC_SERVER_URL}/`,
      cancel_url: `${PUBLIC_SERVER_URL}/log-in`,
      line_items: [
        {
          price: planPrice,
          quantity: 1,
        },
      ],
      mode: 'subscription',
    });

    console.log(session);

    // Save Session ID
    const { error: supaError } = await supabase
      .from('stripe_sessions')
      .insert({ user_id: user.id, plan: payment_plan, session_id: session.id, customer_id: null, subscription_id: null, is_verified: false });

    if (supaError) {
      console.log(supaError);
      return { success: false, error: supaError };
    }

    console.log('Saved User Payment Session Data To Database');

    /*

    CREATE TABLE stripe_sessions (
      id SERIAL PRIMARY KEY,
      user_id UUID REFERENCES auth.users(id),
      plan VARCHAR(8), -- (PLAN1, PLAN2, PLAN3)
      session_id VARCHAR(255),
      customer_id VARCHAR(255),
      subscription_id VARCHAR(255),
      is_verified BOOLEAN
    );

    */

    return { success: true, url: session.url };
  },
};
