<script lang="ts">
  import { onMount, type Snippet } from 'svelte';

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
  <div class="relative hidden overflow-hidden rounded-lg md:block" style={`height: ${pointsDivHeight}px`}>
    <img class="absolute z-10 size-full object-cover img-hover-scale" title={alt} {alt} {src} />
    <div class="absolute left-0 top-0 size-full bg-base-300">
      <span class="loading loading-spinner absolute left-1/2 top-1/2 m-auto size-16 -translate-x-1/2 -translate-y-1/2 text-neutral"></span>
    </div>
  </div>
</div>
