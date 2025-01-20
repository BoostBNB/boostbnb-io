<script lang="ts">
  interface props {
    prob: string;
    sol: string;
  }

  const { prob, sol }: props = $props();
</script>

<div class="card rounded-lg bg-base-200">
  <div class="card-body text-center">
    <p class="text-xl font-semibold italic">"{prob}"</p>
    <p>{sol}</p>
  </div>
</div>
