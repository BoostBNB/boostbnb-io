<script lang="ts">
  import Header from '$lib/components/dashboard/Header.svelte';
  import Stats from '$lib/components/dashboard/Stats.svelte';
  const { data } = $props();

  let { supabase } = $derived(data);

  const logout = async () => {
    const { error: _ } = await supabase.auth.signOut();
    window.location.href = '/log-in';
  };
</script>

<svelte:head>
  <title>BoostBNB | Dashboard</title>
</svelte:head>

<div class="grid grid-cols-12 grid-rows-[min-content] gap-y-12 p-4 lg:gap-x-12 lg:p-10">
  <Header disp={data.session?.user.email!} {logout} />
  <Stats />
</div>
