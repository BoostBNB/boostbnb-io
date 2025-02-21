<script lang="ts">
  import { enhance } from '$app/forms';
</script>

<svelte:head>
  <title>BoostBNB | Cohost AI</title>
</svelte:head>

<div class="relative size-full">
  <div
    class="absolute left-1/2 top-1/2 flex size-1/2 -translate-x-1/2 -translate-y-1/2 flex-col
    items-center justify-center rounded-md border border-base-300"
  >
    <h1 class="text-center text-2xl md:text-3xl">Add a new Listing</h1>
    <form method="POST" action="?/audit" class="flex w-2/3 flex-col items-center gap-1" use:enhance>
      <input name="bnburl" type="url" placeholder="Your Airbnb URL here" class="input input-bordered w-full md:w-3/4" />
      <input name="email" type="email" placeholder="Your email URL here" class="input input-bordered w-full md:w-3/4" />
      <button class="btn btn-primary w-full md:w-3/4">Analyze listing</button>
    </form>
  </div>
</div>
