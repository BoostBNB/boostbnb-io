<script>
  import ProblemSolutionSingle from './ProblemSolution_single.svelte';
  import ItemSection from './ItemSection.svelte';
</script>

<div class="my-8 text-center">
  <h1 class="text-2xl md:text-3xl">
    Solving
    <span class="font-bold text-accent">Real Problems</span>
    for
    <span class="font-bold text-accent">Hosts Everywhere</span>
  </h1>
  <ItemSection rtl src="/assets/pexels-nextvoyage-3051551.webp" alt="Green Coconut Palm Trees (By Nextvoyage on Pexels)">
    <ProblemSolutionSingle
      prob="I don't know how to price my listing competitively."
      sol="Smart Pricing - Automatically adjust your listing prices based on real-time market data to maximize your revenue and occupancy rates."
    />
    <ProblemSolutionSingle
      prob="My listing description isn’t attracting enough guests."
      sol="Enhanced Descriptions - Get tailored suggestions to improve your listing descriptions and attract more guests."
    />
    <ProblemSolutionSingle
      prob="I’m not sure which photos work best for my listing."
      sol="Dynamic Photos - Receive recommendations for optimizing your listing photos to enhance visibility and appeal."
    />
  </ItemSection>
</div>
