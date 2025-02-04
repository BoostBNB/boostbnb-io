<script lang="ts">
  import '../../app.css';
  import Navbar from '$lib/layouts/Navbar.svelte';
  import Footer from '$lib/layouts/Footer.svelte';
  import Observer from '$lib/layouts/Observer.svelte';
  import type { Snippet } from 'svelte';
  interface props {
    children: Snippet<[]>;
  }
  const { children }: props = $props();
</script>

<Observer>
  <Navbar />
  {@render children()}
  <Footer />
</Observer>
