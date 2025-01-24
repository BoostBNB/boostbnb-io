<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionData, SubmitFunction } from './$types';

  interface props {
    form: ActionData;
  }

  const { form }: props = $props();
  let loading = $state(false);

  const handleSubmit: SubmitFunction = () => {
    loading = true;
    return async ({ update }) => {
      update();
      loading = false;
    };
  };
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<div class="h-screen w-screen">
  <form
    class="absolute left-1/2 top-1/2 flex max-w-md -translate-x-1/2 -translate-y-1/2 flex-col rounded-md bg-base-200 p-6 text-center"
    method="POST"
    use:enhance={handleSubmit}
  >
    <h1 class="text-2xl font-bold">Login</h1>
    <p class="mx-auto mb-6 w-3/4">Log in or Sign Up via magic link with your email below</p>
    <input type="email" id="email" name="email" class="input input-bordered mb-2" placeholder="janedoe@example.com" value={form?.email ?? ''} />
    {#if form?.errors?.email}
      <span class="error flex items-center text-sm">
        {form?.errors?.email}
      </span>
    {/if}
    <button class="btn btn-primary">{loading ? 'Loading' : 'Send magic link'}</button>
    {#if form?.message !== undefined}
      <div class="success {form?.success ? '' : 'fail'}">
        {form?.message}
      </div>
    {/if}
  </form>
</div>
