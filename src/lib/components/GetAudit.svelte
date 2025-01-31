<script>
  import { enhance } from '$app/forms';
</script>

<div class="my-8 w-full text-center">
  <h1 class="text-2xl md:text-3xl">Optimize your listing <span class="font-bold text-primary">For Free</span></h1>
  <form method="POST" action="?/scrape" class="mx-auto flex w-2/3 flex-col gap-1 md:flex-row" use:enhance>
    <input name="bnburl" type="url" placeholder="Your Airbnb URL here" class="input input-bordered w-full md:w-3/4" />
    <button class="btn btn-primary md:w-1/4">Optimize now</button>
  </form>
</div>
