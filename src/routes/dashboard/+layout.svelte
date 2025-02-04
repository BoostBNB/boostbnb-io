<script>
  import Shell from '$lib/components/dashboard/Shell.svelte';
  let { children } = $props();
</script>

<Shell>
  {@render children()}
</Shell>
