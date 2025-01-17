<script>
  let { children } = $props();
</script>

<div class="flex items-center gap-2">
  <img src="/icons/check_fill.svg" alt="mingcute:check_fill" />
  {@render children()}
</div>
