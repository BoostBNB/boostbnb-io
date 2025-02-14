import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
  const { user } = locals.session || {};
  if (!user) {
    return { listings: [] }; // Return an empty array if user is not authenticated
  }

  const { data, error } = await locals.supabase.from('user_data').select('listings').eq('user_id', user.id).single();

  if (error) {
    console.error('Error fetching listings:', error.message);
    return { listings: [] };
  }

  return { listings: data.listings || [] };
};
