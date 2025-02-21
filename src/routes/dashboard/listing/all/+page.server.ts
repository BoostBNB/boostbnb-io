export const load = async ({ locals }) => {
  const { user } = locals.session || {};
  if (!user) {
    return { listings: [] };
  }

  const { data, error } = await locals.supabase.from('listings').select('url, data').eq('user_id', user.id);

  if (error) {
    console.error('Error fetching listings:', error.message);
    return { listings: [] };
  }

  return { listings: data || [] };
};
