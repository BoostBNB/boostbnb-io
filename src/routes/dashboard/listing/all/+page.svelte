<svelte:head>
  <title>BoostBNB | Listings</title>
</svelte:head>

<div class="mx-auto flex w-3/4 flex-wrap items-center gap-2 p-2">
  {#each [...Array(10).keys()] as iter}
    <a class="card card-compact basis-[30%] bg-base-100 shadow-xl transition-all duration-200 hover:scale-[1.01]" href="##">
      <figure class="h-24 w-full">
        <img src="/assets/pexels-nextvoyage-3051551.webp" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Listing title ({iter})</h2>
        <p>Truncated listing description</p>
      </div>
    </a>
  {/each}
</div>
