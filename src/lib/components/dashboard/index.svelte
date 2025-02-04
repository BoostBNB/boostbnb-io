<script lang="ts">
  import Header from './Header.svelte';
  import Stats from './Stats.svelte';
  import Shell from './Shell.svelte';
  interface props {
    disp: string;
  }
  const { disp }: props = $props();
</script>

<Shell>
  <div class="grid grid-cols-12 grid-rows-[min-content] gap-y-12 p-4 lg:gap-x-12 lg:p-10">
    <Header {disp} />
    <Stats />
  </div>
</Shell>
