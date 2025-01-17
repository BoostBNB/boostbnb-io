<script>
  import HeroAnimate from './Hero_animate.svelte';
</script>

<div class="hero min-h-screen border-b-2 border-primary bg-gradient-to-br from-white to-blue-200 pb-4">
  <div class="hero-content flex-col lg:flex-row">
    <HeroAnimate delay={1200} duration={1500} className="block w-3/4 scale-[0.85] md:scale-100">
      <div class="relative mx-auto h-[172px] max-w-[301px] rounded-t-xl border-[8px] border-zinc-400 bg-zinc-400 md:h-[294px] md:max-w-[512px]">
        <div class="h-[156px] overflow-hidden rounded-lg bg-white md:h-[278px]">
          <img src="/assets/hero-image.png" class="h-[156px] w-full rounded-lg md:h-[278px]" alt="" />
        </div>
      </div>
      <div class="relative mx-auto h-[17px] max-w-[351px] rounded-b-xl rounded-t-sm bg-zinc-500 md:h-[21px] md:max-w-[597px]">
        <div class="absolute left-1/2 top-0 h-[5px] w-[56px] -translate-x-1/2 rounded-b-xl bg-zinc-400 md:h-[8px] md:w-[96px]"></div>
      </div>
    </HeroAnimate>
    <div>
      <h1 class="text-center text-3xl font-bold lg:text-5xl">
        <HeroAnimate delay={500} duration={1000}>Maximize</HeroAnimate>
        <HeroAnimate delay={600} duration={1000}>your</HeroAnimate>
        <HeroAnimate delay={700} duration={1000}>AirBNB</HeroAnimate>
        <HeroAnimate delay={800} duration={1000}>Profits</HeroAnimate>
      </h1>
      <p class="py-6 text-center">
        <HeroAnimate delay={1000} duration={1000}>
          Unlock the full potential of your Short Term Rental listings and maximize your bookings with AirBNB's
          <span class="text-[#081647]">#1 rental optimization platform</span>.
        </HeroAnimate>
      </p>
      <div class="flex w-full justify-center gap-2">
        <div class="motion-preset-blur-left size-fit motion-duration-1500 motion-delay-1000">
          <a class="btn btn-primary" href="/#">Get started</a>
        </div>
        <div class="motion-preset-blur-right size-fit motion-duration-1500 motion-delay-1000">
          <a class="btn btn-secondary" href="/#about">Learn more</a>
        </div>
      </div>
    </div>
  </div>
</div>
