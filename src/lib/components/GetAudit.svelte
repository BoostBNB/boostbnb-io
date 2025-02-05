<script>
  import { superForm } from 'sveltekit-superforms';
  let { data } = $props();
  const { form, errors, constraints, message, enhance } = superForm(data.form);
</script>

<div class="my-8 w-full text-center">
  <h1 class="text-2xl md:text-3xl">Optimize your listing <span class="font-bold text-primary">For Free</span></h1>
  <form method="POST" action="?/audit" class="mx-auto flex w-2/3 flex-col items-center gap-1" use:enhance>
    <input
      name="url"
      placeholder="Your Airbnb URL here"
      class="input input-bordered w-full md:w-3/4"
      bind:value={$form.url}
      aria-invalid={$errors.url ? 'true' : undefined}
      {...$constraints.url}
    />
    {#if $errors.url}<span class="text-error">{$errors.url}</span>{/if}
    <input
      name="email"
      placeholder="Your email URL here"
      class="input input-bordered w-full md:w-3/4"
      bind:value={$form.email}
      aria-invalid={$errors.email ? 'true' : undefined}
      {...$constraints.email}
    />
    {#if $errors.email}<span class="text-error">{$errors.email}</span>{/if}
    {#if $message}<h3>{$message}</h3>{/if}
    <button class="btn btn-primary w-full md:w-1/4">Optimize now</button>
  </form>
</div>
