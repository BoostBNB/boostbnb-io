<script lang="ts">
  import { superForm } from 'sveltekit-superforms';

  let { data } = $props();
  const { form, errors, constraints, message, enhance } = superForm(data.form);
</script>

<svelte:head>
  <title>Sign Up</title>
</svelte:head>

<div class="h-screen w-screen bg-gradient-to-br from-white to-blue-200">
  <div class="size-full bg-nav backdrop-blur-md backdrop-filter">
    <form
      class="absolute left-1/2 top-1/2 flex w-3/4 -translate-x-1/2 -translate-y-1/2 flex-col gap-1 rounded-md bg-base-200 p-6 text-center md:w-1/3"
      method="POST"
      use:enhance
    >
      <h1 class="mb-2 text-2xl font-bold">Sign Up</h1>
      <input
        name="email"
        bind:value={$form.email}
        aria-invalid={$errors.email ? 'true' : undefined}
        {...$constraints.email}
        class="input input-bordered"
        placeholder="janedoe@example.com"
      />
      {#if $errors.email}<span class="text-error">{$errors.email}</span>{/if}
      <input
        name="password"
        type="password"
        bind:value={$form.password}
        aria-invalid={$errors.password ? 'true' : undefined}
        {...$constraints.password}
        class="input input-bordered"
        placeholder="Password"
      />
      {#if $errors.password}<span class="text-error">{$errors.password}</span>{/if}
      <input
        name="passwordVerify"
        type="password"
        bind:value={$form.passwordVerify}
        aria-invalid={$errors.passwordVerify ? 'true' : undefined}
        {...$constraints.passwordVerify}
        class="input input-bordered"
        placeholder="Verify Password"
      />
      {#if $errors.passwordVerify}<span class="text-error">{$errors.passwordVerify}</span>{/if}
      {#if $message}<h3 class="text-success">{$message}</h3>{/if}
      <button class="btn btn-primary" type="submit">Sign Up</button>
      <p class="mt-2">Already have an account? <a href="/log-in" class="link">Log In</a>.</p>
    </form>
  </div>
</div>
