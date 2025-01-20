<script lang="ts">
  import type { Snippet } from 'svelte';

  interface props {
    src: string;
    alt: string;
    rtl?: boolean;
    children: Snippet<[]>;
  }

  const { src, alt, rtl = false, children }: props = $props();
  let pointsDivHeight: number = $state(0);

  // This constant needs to be here so that tailwind can
  // load the required classes into the CSS
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const preLoad = 'flex-row-reverse';
</script>

<div class="mx-auto grid w-full justify-center gap-2 md:mx-0 md:grid-cols-2 md:px-4 lg:px-48" style={rtl ? 'direction: rtl;' : ''}>
  <div class="flex h-fit w-full flex-col justify-center gap-2" style="direction: ltr;" bind:clientHeight={pointsDivHeight}>
    {@render children()}
  </div>
  <img class="hidden w-full rounded-lg object-cover md:block" title={alt} style={`height: ${pointsDivHeight}px`} {alt} {src} />
</div>
