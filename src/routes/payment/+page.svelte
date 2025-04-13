<script lang="ts">
  // Payment Testing (delete later)
  import { enhance } from '$app/forms';

  const onCheckout = (res: any) => {
    console.log(res);
    //console.log(res.formData.getAll());
    console.log('Checkout Completed From Frontend');
  };
</script>

<svelte:head>
  <title>BoostBNB</title>
</svelte:head>

<!-- Payment Testing (delete later) -->
<form method="POST" action="?/createCheckoutSession" use:enhance={onCheckout} class="mx-auto flex w-2/3 flex-col items-center gap-1">
  <input name="plan" type="text" placeholder="Enter Plan" class="input input-bordered w-full md:w-3/4" />
  <button class="btn btn-primary w-full md:w-1/4">Test Checkout</button>
</form>
