<script>
  import Feature from './Feature.svelte';
</script>

<div class="mt-8 flex w-full flex-col items-center gap-8 bg-base-300 pb-16 pt-8" id="pricing">
  <div class="flex flex-col gap-2 text-center">
    <h1 class="text-3xl font-bold">Pricing</h1>
    <span>Whatever your status, our offers evolve according to your needs</span>
  </div>

  <div class="grid grid-cols-1 items-start gap-8 px-2 md:grid-cols-4">
    <div class="relative flex h-[28rem] flex-col gap-6 rounded-box bg-base-100 p-8 shadow-lg">
      <div class="flex flex-col gap-4">
        <h2 class="text-center text-xl">Basic</h2>
        <h1 class="text-center text-5xl"><span class="w-fit font-bold leading-none">$49</span><span class="text-2xl">/Month</span></h1>
      </div>
      <div class="flex flex-col">
        <Feature>1 AirBNB listing</Feature>
        <Feature>Weekly audit reports</Feature>
        <Feature>Basic optimization tools</Feature>
        <Feature>Email Support</Feature>
        <Feature>Analytics Dashboard</Feature>
      </div>
      <a class="btn btn-neutral absolute bottom-8 left-1/2 z-10 w-56 -translate-x-1/2" href="/#">Get Basic</a>
    </div>

    <div class="relative flex h-[28rem] flex-col gap-6 rounded-box border-2 border-primary bg-base-100 p-8 shadow-lg">
      <div class="flex flex-col gap-4">
        <h2 class="text-center text-xl">Pro</h2>
        <div class="inline">
          <h1 class="text-center text-5xl"><span class="w-fit font-bold leading-none">$79</span><span class="text-2xl">/Month</span></h1>
        </div>
      </div>
      <div class="flex flex-col">
        <Feature>Everything in Basic</Feature>
        <Feature>Up to 3 AirBNB listings</Feature>
        <Feature>Unlimited audit reports</Feature>
        <Feature>Advanced optimization tools</Feature>
        <Feature>Priority Support</Feature>
        <Feature>CoHost AI</Feature>
      </div>
      <a class="btn btn-primary absolute bottom-8 left-1/2 z-10 w-56 -translate-x-1/2" href="/#">Get Pro</a>
      <div class="badge badge-primary badge-lg absolute top-[4.25rem] self-center">Most popular</div>
    </div>

    <div class="relative flex h-[28rem] flex-col gap-6 rounded-box bg-base-100 p-8 shadow-lg">
      <div class="flex flex-col gap-4">
        <h2 class="text-center text-xl">Premium</h2>
        <h1 class="text-center text-5xl"><span class="w-fit font-bold leading-none">$129</span><span class="text-2xl">/Month</span></h1>
      </div>
      <div class="flex flex-col">
        <Feature>Everything in Pro</Feature>
        <Feature>24/7 VIP Support</Feature>
        <Feature>Dedicated manager</Feature>
        <Feature>Full competitor anylisis</Feature>
        <Feature>Unlimited listings</Feature>
      </div>
      <a class="btn btn-neutral absolute bottom-8 left-1/2 z-10 w-56 -translate-x-1/2" href="/#">Get Premium</a>
    </div>

    <div class="relative flex h-[28rem] flex-col gap-6 rounded-box bg-base-100 p-8 shadow-lg">
      <div class="flex flex-col gap-4">
        <h2 class="text-center text-xl">Enterprise</h2>
        <h1 class="text-center text-5xl"><span class="w-fit font-bold leading-none">$249</span><span class="text-2xl">/Month</span></h1>
      </div>
      <div class="flex flex-col">
        <Feature>Everything in Premium</Feature>
        <Feature>Unlimited listings</Feature>
      </div>
      <a class="btn btn-neutral absolute bottom-8 left-1/2 z-10 w-56 -translate-x-1/2" href="/#">Get Enterprise</a>
    </div>
  </div>
</div>
