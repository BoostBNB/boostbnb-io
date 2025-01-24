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

<div class="h-screen w-screen bg-gradient-to-br from-white to-blue-200">
  <div class="size-full bg-nav backdrop-blur-md backdrop-filter">
    <form
      class="absolute left-1/2 top-1/2 flex w-3/4 -translate-x-1/2 -translate-y-1/2 flex-col rounded-md bg-base-200 p-6 text-center md:w-1/3"
      method="POST"
      use:enhance={handleSubmit}
    >
      <h1 class="mb-2 text-2xl font-bold">Login</h1>
      <input type="email" id="email" name="email" class="input input-bordered mb-2" placeholder="janedoe@example.com" value={form?.email ?? ''} />
      {#if form?.errors?.email}
        <span class="error flex items-center text-sm">
          {form?.errors?.email}
        </span>
      {/if}
      <input type="password" id="password" name="password" class="input input-bordered mb-2" placeholder="Password" />
      <button class="btn btn-primary">{loading ? 'Loading' : 'Log In'}</button>
      {#if form?.message !== undefined}
        <div class="success {form?.success ? '' : 'fail'}">
          {form?.message}
        </div>
      {/if}
      <p class="mt-21">Don't have an account? <a href="/sign-up" class="link">Sign Up</a>.</p>
    </form>
  </div>
</div>
