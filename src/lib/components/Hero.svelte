<script lang="ts">
  import HeroAnimate from './Hero_animate.svelte';
  let mainClientHeight: number = $state(0);
  let heroHeight: number = $state(0);
  let heroWidth: number = $state(0);

  interface dimensions {
    width: number;
    height: number;
  }

  let heroDimesnions: dimensions = $derived({
    width: heroWidth - 32,
    height: heroHeight - 32,
  });
</script>

<section class="hero flex min-h-fit flex-col" id="hero" bind:clientHeight={heroHeight} bind:clientWidth={heroWidth}>
  <!-- 
   This CSS calc() determines the amount of margin
   needed on the top in order to have the text be 
   centered vertically onscreen 
  -->
  <div
    class="mb-8 flex w-full flex-col justify-center px-4 align-middle"
    bind:clientHeight={mainClientHeight}
    style={`margin-top: calc((100vh - ${mainClientHeight}px ) / 2)`}
  >
    <h1 class="w-full text-center font-header text-4xl font-bold leading-none md:text-7xl lg:mx-auto lg:w-2/5">
      <HeroAnimate delay={300} duration={500}>Supercharge</HeroAnimate>
      <HeroAnimate delay={400} duration={500}>Your</HeroAnimate>
      <HeroAnimate delay={500} duration={500}>Airbnb</HeroAnimate>
      <HeroAnimate delay={600} duration={500}>Listing</HeroAnimate>
      <HeroAnimate delay={700} duration={500}>with</HeroAnimate>
      <HeroAnimate delay={800} duration={500} className="text-primary">AI-Powered</HeroAnimate>
      <HeroAnimate delay={900} duration={500}>Tools</HeroAnimate>
    </h1>
    <HeroAnimate delay={950} duration={500}>
      <hr class="mx-auto mt-4 w-3/5 border-neutral lg:w-2/5" />
    </HeroAnimate>
    <HeroAnimate className="mx-auto w-full text-center text-lg my-4 font-semibold italic" delay={1000} duration={700}
      >Unlock Your Property's Full Potential with Expert Insights and Cutting-Edge Technology</HeroAnimate
    >
    <div class="flex justify-center gap-2">
      <div class="flex w-full justify-center gap-2">
        <HeroAnimate direction="left" delay={1000} duration={1500} className="size-fit"
          ><a class="btn btn-primary" href="/#about">Learn more</a></HeroAnimate
        >
        <HeroAnimate direction="right" delay={1000} duration={1500} className="size-fit"
          ><a class="btn btn-secondary" href="/#audit">Get your free AI audit</a></HeroAnimate
        >
      </div>
    </div>
    <HeroAnimate delay={1300} duration={1500} className="w-full text-center text-sm text-neutral-600 mt-2"
      >No Credit Card Required<a href="#*">*</a> • Get results instantly</HeroAnimate
    >
  </div>

  <div class="motion-preset-slide-up h-fit w-full motion-delay-1500">
    <img
      src="/assets/hero-image.png"
      alt="Boostbnb Dashboard"
      class="relative z-10 mx-auto aspect-video w-11/12 rounded-lg border-2 border-neutral shadow-hero md:w-1/2"
    />
  </div>
</section>
<div
  class="absolute left-4 top-4 -z-10 hidden rounded-lg bg-gradient-to-b from-white to-blue-200 align-middle md:block"
  style={`height: ${heroDimesnions.height}px; width: ${heroDimesnions.width}px;`}
></div>
<div
  class="absolute left-0 top-0 -z-10 block w-full rounded-lg bg-gradient-to-b from-white to-blue-200 align-middle md:hidden"
  style={`height: ${heroHeight + 8}px;`}
></div>
