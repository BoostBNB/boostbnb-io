<script>
  import { enhance } from '$app/forms';
</script>

<div class="my-8 w-full text-center">
  <h1 class="text-2xl md:text-3xl">Optimize your listing <span class="font-bold text-primary">For Free</span></h1>
  <form method="POST" action="?/audit" class="mx-auto flex w-2/3 flex-col items-center gap-1" use:enhance>
    <input name="bnburl" type="url" placeholder="Your Airbnb URL here" class="input input-bordered w-full md:w-3/4" />
    <input name="email" type="email" placeholder="Your email URL here" class="input input-bordered w-full md:w-3/4" />
    <button class="btn btn-primary w-full md:w-1/4">Optimize now</button>
  </form>
</div>
