<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionData, SubmitFunction } from './$types';

  interface props {
    form: ActionData;
  }

  const { form }: props = $props();
  let loading = $state(false);

  let pw = $state('');
  let pwverify = $state('');

  const handleSubmit: SubmitFunction = () => {
    if (pw === pwverify) {
      loading = true;
      return async ({ update }) => {
        update();
        loading = false;
      };
    }
  };
</script>

<svelte:head>
  <title>Sign Up</title>
</svelte:head>

<div class="h-screen w-screen bg-gradient-to-br from-white to-blue-200">
  <div class="size-full bg-nav backdrop-blur-md backdrop-filter">
    <form
      class="absolute left-1/2 top-1/2 flex w-3/4 -translate-x-1/2 -translate-y-1/2 flex-col rounded-md bg-base-200 p-6 text-center md:w-1/3"
      method="POST"
      use:enhance={handleSubmit}
    >
      <h1 class="mb-2 text-2xl font-bold">Sign Up</h1>
      <input type="email" id="email" name="email" class="input input-bordered" placeholder="janedoe@example.com" value={form?.email ?? ''} />
      {#if form?.errors?.email}
        <span class="error mt-2 flex items-center text-sm text-error">
          {form?.errors?.email}
        </span>
      {/if}
      <input type="password" id="password" name="password" class="input input-bordered my-2" placeholder="Password" bind:value={pw} />
      <input
        type="password"
        id="password-verify"
        name="password-verify"
        class="input input-bordered mb-2"
        placeholder="Verify Password"
        bind:value={pwverify}
      />
      {#if pw !== pwverify}
        <div class="error mb-2 text-left text-sm text-error">Passwords do not match</div>
      {/if}
      <button class="btn btn-primary">{loading ? 'Loading' : 'Sign Up'}</button>
      {#if form?.message !== undefined}
        <div class="success mt-2 text-center text-sm text-success {form?.success ? '' : 'fail'}">
          {form?.message}
        </div>
      {/if}
      <p class="mt-21">Already have an account? <a href="/log-in" class="link">Log In</a>.</p>
    </form>
  </div>
</div>
