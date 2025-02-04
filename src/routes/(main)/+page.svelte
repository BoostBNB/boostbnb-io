<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import SalePoints from '$lib/components/SalePoints.svelte';
  import ProblemSolution from '$lib/components/ProblemSolution.svelte';
  import Pricing from '$lib/components/Pricing.svelte';
  import GetAudit from '$lib/components/GetAudit.svelte';
  import ProjectStats from '$lib/components/ProjectStats.svelte';
  import TextSection from '$lib/components/TextSection.svelte';
  import FeaturesSection from '$lib/components/FeaturesSection.svelte';
  import OverviewSection from '$lib/components/OverviewSection.svelte';
</script>

<svelte:head>
  <title>BoostBNB</title>
</svelte:head>

<Hero />
<ProjectStats />
<FeaturesSection />
<TextSection />
<OverviewSection />
<p class="size-0" id="about"></p>
<!-- 
  <SalePoints />
  <ProblemSolution />
 -->
<p class="size-0" id="audit"></p>
<GetAudit />
<Pricing />
<div class="bg-base-300 text-center text-sm" id="*">* Credit card required for paid plans</div>
