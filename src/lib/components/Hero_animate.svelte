<script lang="ts">
  import type { Snippet } from 'svelte';
  interface props {
    delay: number;
    duration: number;
    children: Snippet<[]>;
    className?: string;
  }

  const { children, delay, duration, className = '' }: props = $props();
</script>

<span class={`motion-preset-blur-up-lg ${className}`} style={`--motion-delay: ${delay}ms; --motion-duration: ${duration}ms`}
  >{@render children()}</span
>
