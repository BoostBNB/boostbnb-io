<script lang="ts">
  interface props {
    prob: string;
    sol: string;
  }

  const { prob, sol }: props = $props();
</script>

<div class="card motion-preset-slide-right mx-auto w-11/12 bg-base-200 shadow-xl md:mx-0 md:w-4/6">
  <div class="card-body text-center">
    <p class="text-xl font-semibold italic">"{prob}"</p>
    <p>{sol}</p>
  </div>
</div>
