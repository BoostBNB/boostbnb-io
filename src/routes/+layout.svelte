<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/layouts/Navbar.svelte';
  import Footer from '$lib/layouts/Footer.svelte';
  let { children } = $props();
</script>

<Navbar />
{@render children()}
<Footer />
