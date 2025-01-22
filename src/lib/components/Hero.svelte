<script lang="ts">
  import HeroAnimate from './Hero_animate.svelte';
  let clientHeight: number = 0;
</script>

<section class="hero flex min-h-fit flex-col">
  <div class="flex min-h-screen w-full flex-col justify-center bg-base-100 px-4 pb-4 align-middle">
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
  <img
    src="/assets/hero-image.png"
    alt="Boostbnb Dashboard"
    class="motion-preset-slide-up aspect-video w-1/2 -translate-y-48 rounded-lg shadow-hero motion-delay-1500"
  />
</section>
