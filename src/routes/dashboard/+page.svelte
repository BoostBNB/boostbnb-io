<script lang="ts">
  import Dashboard from '$lib/components/dashboard/index.svelte';
  const { data } = $props();
</script>

<svelte:head>
  <title>BoostBNB | Dashboard</title>
</svelte:head>

<Dashboard disp={data.session?.user.email!} />
