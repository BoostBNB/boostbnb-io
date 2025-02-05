<script lang="ts"></script>

{#snippet feature(feature: string)}
  <div class="flex items-center gap-2">
    <img src="/icons/check_fill.svg" alt="mingcute:check_fill" />
    {feature}
  </div>
{/snippet}

<div class="mt-8 flex w-full flex-col items-center gap-8 bg-gradient-to-b from-transparent to-base-300 pb-16 pt-8" id="pricing">
  <div class="flex flex-col gap-2 text-center">
    <h1 class="text-3xl font-bold">Pricing</h1>
    <span class="mx-3">Whatever your status, our offers evolve according to your needs</span>
  </div>

  <div class="grid grid-cols-1 items-start gap-8 px-2 md:grid-cols-4">
    <div
      class="intersect-once relative flex h-fit min-h-[28rem] flex-col gap-6 rounded-box bg-base-100 p-8 pb-32 shadow-lg motion-delay-100 md:intersect:motion-preset-blur-up md:opacity-0 md:intersect:opacity-100"
    >
      <div class="flex flex-col gap-4">
        <h2 class="text-center text-xl">Basic</h2>
        <h1 class="text-center text-5xl"><span class="w-fit font-bold leading-none">$49</span><span class="text-2xl">/Month</span></h1>
      </div>
      <div class="flex flex-col">
        {@render feature('1 AirBNB listing')}
        {@render feature('Weekly audit reports')}
        {@render feature('Basic optimization tools')}
        {@render feature('Email Support')}
        {@render feature('Analytics Dashboard')}
      </div>
      <div class="absolute bottom-8 left-0 z-10 flex w-full justify-center">
        <a class="btn btn-neutral w-3/4" href="/#">Get Basic</a>
      </div>
    </div>

    <div
      class="intersect-once relative flex h-fit min-h-[28rem] flex-col gap-6 rounded-box border-2 border-primary bg-base-100 p-8 pb-32 shadow-lg md:intersect:motion-preset-slide-up md:opacity-0 md:intersect:opacity-100"
      style="--motion-delay: 200ms"
    >
      <div class="flex flex-col gap-4">
        <h2 class="text-center text-xl">Pro</h2>
        <div class="inline">
          <h1 class="text-center text-5xl"><span class="w-fit font-bold leading-none">$79</span><span class="text-2xl">/Month</span></h1>
        </div>
      </div>
      <div class="flex flex-col">
        {@render feature('Everything in Basic')}
        {@render feature('Up to 3 AirBNB listings')}
        {@render feature('Unlimited audit reports')}
        {@render feature('Advanced optimization tools')}
        {@render feature('Priority Support')}
        {@render feature('CoHost AI')}
      </div>
      <div class="absolute bottom-8 left-0 z-10 flex w-full justify-center">
        <a class="btn btn-primary w-3/4" href="/#">Get Pro</a>
      </div>
      <div class="badge badge-primary badge-lg absolute top-[4.25rem] self-center">Most popular</div>
    </div>

    <div
      class="intersect-once relative flex h-fit min-h-[28rem] flex-col gap-6 rounded-box bg-base-100 p-8 pb-32 shadow-lg motion-delay-300 md:intersect:motion-preset-slide-up md:opacity-0 md:intersect:opacity-100"
    >
      <div class="flex flex-col gap-4">
        <h2 class="text-center text-xl">Premium</h2>
        <h1 class="text-center text-5xl"><span class="w-fit font-bold leading-none">$129</span><span class="text-2xl">/Month</span></h1>
      </div>
      <div class="flex flex-col">
        {@render feature('Everything in Pro')}
        {@render feature('24/7 VIP Support')}
        {@render feature('Dedicated manager')}
        {@render feature('Full competitor analysis')}
      </div>
      <div class="absolute bottom-8 left-0 z-10 flex w-full justify-center">
        <a class="btn btn-neutral w-3/4" href="/#">Get Premium</a>
      </div>
    </div>

    <div
      class="intersect-once relative flex h-fit min-h-[28rem] flex-col gap-6 rounded-box bg-base-100 p-8 pb-32 shadow-lg md:intersect:motion-preset-slide-up md:opacity-0 md:intersect:opacity-100"
      style="--motion-delay: 400ms"
    >
      <div class="flex flex-col gap-4">
        <h2 class="text-center text-xl">Enterprise</h2>
        <h1 class="text-center text-5xl"><span class="w-fit font-bold leading-none">$249</span><span class="text-2xl">/Month</span></h1>
      </div>
      <div class="flex flex-col">
        {@render feature('Everything in Premium')}
        {@render feature('Unlimited listings')}
      </div>
      <div class="absolute bottom-8 left-0 z-10 flex w-full justify-center">
        <a class="btn btn-neutral w-3/4" href="/#">Get Enterprise</a>
      </div>
    </div>
  </div>
</div>
