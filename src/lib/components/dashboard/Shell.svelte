<script lang="ts">
  import Sidebar from './Sidebar.svelte';
  import type { Snippet } from 'svelte';
  interface props {
    children: Snippet<[]>;
  }
  const { children }: props = $props();
</script>

<svelte:head>
  <script src="https://cdn.jsdelivr.net/npm/external-svg-loader@1.6.10/svg-loader.min.js" async></script>
</svelte:head>

<div class="drawer min-h-screen bg-base-200 lg:drawer-open">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <svelte:boundary>
    <main class="drawer-content">
      {@render children()}
    </main>
  </svelte:boundary>
  <Sidebar />
</div>
