<script lang="ts"></script>

{#snippet headercard(num: string, text: string)}
  <div class="flex h-40 w-full flex-col items-center rounded-md border-1 border-base-300 md:w-1/3">
    <div class="my-auto h-fit text-center">
      <h2 class="text-4xl font-bold">{num}</h2>
      <p class="font-bold text-slate-600">{text}</p>
    </div>
  </div>
{/snippet}

<div class="mx-auto mt-16 w-11/12">
  <h1 class="mx-auto w-full text-center text-2xl font-bold md:w-2/3 md:text-4xl">
    Unlock Your Airbnb Hosting Potential with BoostBNB’s AI-Powered Solutions
  </h1>
  <div class="mx-auto mt-4 flex w-full flex-col gap-2 md:w-2/3 md:flex-row">
    {@render headercard('500+', 'Listings Optimized')}
    {@render headercard('100+', 'Happy Hosts')}
    {@render headercard('96%', 'Satisfaction Rate')}
  </div>
</div>
