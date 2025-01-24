<script lang="ts">
  interface props {
    prob: string;
    sol: string;
  }

  const { prob, sol }: props = $props();
</script>

<div
  class="intersect-once mx:mx-0 card mx-auto w-11/12 rounded-lg bg-base-200 opacity-0 intersect:motion-preset-slide-right intersect:opacity-100 md:w-full"
>
  <div class="card-body text-center">
    <p class="text-xl font-semibold italic">"{prob}"</p>
    <p>{sol}</p>
  </div>
</div>
