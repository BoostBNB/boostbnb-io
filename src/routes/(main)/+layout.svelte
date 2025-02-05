<script lang="ts">
  import '../../app.css';
  import Navbar from '$lib/layouts/Navbar.svelte';
  import Footer from '$lib/layouts/Footer.svelte';
  import Observer from '$lib/layouts/Observer.svelte';
  import type { Snippet } from 'svelte';
  import type { LayoutData } from './$types';
  interface props {
    children: Snippet<[]>;
    data: LayoutData;
  }
  const { children, data }: props = $props();
</script>

<Observer>
  <Navbar session={data.session} />
  {@render children()}
  <Footer />
</Observer>
