<script lang="ts">
  import type { Snippet } from 'svelte';
  interface props {
    delay: number;
    duration: number;
    children: Snippet<[]>;
    className?: string;
    direction?: 'up' | 'down' | 'left' | 'right';
  }

  const { children, delay, duration, className = '', direction = 'up' }: props = $props();
  // This constant needs to be here so that tailwind can
  // load the required classes into the CSS
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const preLoad = 'motion-preset-blur-up-lg motion-preset-blur-down-lg motion-preset-blur-left-lg motion-preset-blur-right-lg';
</script>

<span class={`motion-preset-blur-${direction}-lg ${className}`} style={`--motion-delay: ${delay}ms; --motion-duration: ${duration}ms`}
  >{@render children()}</span
>
