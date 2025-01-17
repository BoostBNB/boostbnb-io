<script lang="ts">
  import type { Snippet } from 'svelte';
  interface props {
    delay: number;
    duration: number;
    children: Snippet<[]>;
  }

  const { children, delay, duration }: props = $props();
</script>

<span class="motion-preset-blur-up-lg" style={`--motion-delay: ${delay}ms; --motion-duration: ${duration}ms`}>{@render children()}</span>
