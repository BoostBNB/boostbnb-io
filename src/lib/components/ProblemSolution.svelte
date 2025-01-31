<script lang="ts">
  import ItemSection from './ItemSection.svelte';

  interface ProblemSolutionProps {
    prob: string;
    sol: string;
  }
</script>

{#snippet problemsolution(props: ProblemSolutionProps)}
  <div
    class="intersect-once mx:mx-0 card mx-auto w-11/12 rounded-lg bg-base-200 opacity-0 intersect:motion-preset-slide-right intersect:opacity-100 md:w-full"
  >
    <div class="card-body text-center">
      <p class="text-xl font-semibold italic">"{props.prob}"</p>
      <p>{props.sol}</p>
    </div>
  </div>
{/snippet}

<div class="my-8 text-center">
  <h1 class="text-2xl md:text-3xl">
    Solving
    <span class="font-bold text-accent">Real Problems</span>
    for
    <span class="font-bold text-accent">Hosts Everywhere</span>
  </h1>
  <ItemSection rtl src="/assets/pexels-nextvoyage-3051551.webp" alt="Green Coconut Palm Trees (By Nextvoyage on Pexels)">
    {@render problemsolution({
      prob: "I don't know how to price my listing competitively.",
      sol: 'Smart Pricing - Automatically adjust your listing prices based on real-time market data to maximize your revenue and occupancy rates.',
    })}
    {@render problemsolution({
      prob: 'My listing isn’t attracting enough guests.',
      sol: 'Enhanced Descriptions - Get tailored suggestions to improve your listing descriptions and attract more guests.',
    })}
    {@render problemsolution({
      prob: 'I’m not sure which photos work best for my listing.',
      sol: 'Dynamic Photos - Receive recommendations for optimizing your listing photos to enhance visibility and appeal.',
    })}
  </ItemSection>
</div>
