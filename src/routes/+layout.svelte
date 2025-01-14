<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/layouts/Navbar.svelte';
  let { children } = $props();
</script>

<Navbar />
{@render children()}
