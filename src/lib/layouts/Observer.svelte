<script lang="ts">
  import Observer from 'tailwindcss-intersect';
  import { onMount, type Snippet } from 'svelte';
  interface props {
    children: Snippet<[]>;
  }

  onMount(() => {
    console.log('Document mouted: Preparing Observer');
    // Super odd bug in the library that checks intersect
    // you basically have to let it render all the tailwind
    // classes before loading the observer, or else it dosen't work
    setTimeout(() => {
      Observer.start();
      console.log('Observer ready');
    }, 500);
  });

  const { children }: props = $props();
</script>

{@render children()}
