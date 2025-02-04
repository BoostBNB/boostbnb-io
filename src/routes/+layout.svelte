<script lang="ts">
  import '../app.css';
  import type { Snippet } from 'svelte';
  interface props {
    children: Snippet<[]>;
  }
  const { children }: props = $props();
</script>

{@render children()}
