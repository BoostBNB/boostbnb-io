<script lang="ts">
  interface props {
    prob: string;
    sol: string;
  }

  const { prob, sol }: props = $props();
</script>

<div class="intersect-once card rounded-lg bg-base-200 opacity-0 intersect:motion-preset-slide-right intersect:opacity-100">
  <div class="card-body text-center">
    <p class="text-xl font-semibold italic">"{prob}"</p>
    <p>{sol}</p>
  </div>
</div>
