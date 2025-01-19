<script>
    import { enhance } from '$app/forms';
</script>

<div class="w-full text-center my-8">
    <h1 class="text-2xl md:text-3xl">Optimize your listing <span class="text-primary font-bold">For Free</span> today</h1>
    <form method="POST" action="?/scrape" class="flex gap-1 mx-auto w-2/3" use:enhance>
        <input name="bnburl" type="text" placeholder="Your Airbnb URL here" class="input input-bordered w-3/4" />
        <button class="btn btn-primary">Optimize now</button>
    </form>
</div>