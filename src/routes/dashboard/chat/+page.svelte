<script>
  import { enhance } from '$app/forms';
</script>

<svelte:head>
  <title>BoostBNB | Cohost AI</title>
</svelte:head>

Cohost AI will be shown here

<form method="POST" action="?/chatResponse" class="mx-auto flex w-2/3 flex-col items-center gap-1" use:enhance>
  <input name="prompt" type="text" placeholder="Type in Prompt" class="input input-bordered w-full md:w-3/4" />
  <button class="btn btn-primary w-full md:w-1/4">Get Response</button>
</form>
