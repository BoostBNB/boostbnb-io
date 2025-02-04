import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
export const load: PageServerLoad = async ({ locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession()
  
    if (!session) {
      redirect(303, '/log-in')
    }
  
    return { session }
  }