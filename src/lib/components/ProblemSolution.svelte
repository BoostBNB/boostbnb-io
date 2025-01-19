<script>
  import ProblemSolutionSingle from './ProblemSolution_single.svelte';
</script>

<div class="my-8 text-center">
  <h1 class="text-2xl md:text-3xl">
    Solving
    <span class="font-bold text-accent">Real Problems</span>
    for
    <span class="font-bold text-accent">Hosts Everywhere</span>
  </h1>
  <h3 class="mx-auto w-3/4 text-lg text-gray-500">
    We’ve listened to what hosts are saying on Facebook and other platforms about their struggles with optimizing listings. Here’s how BoostBNB
    addresses these common issues:
  </h3>
  <div class="flex w-full flex-col justify-center gap-4 p-4 md:flex-row lg:mx-auto lg:w-9/12">
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
  </div>
</div>
