<script lang="ts">
  import SalePointSingle from './SalePoint_single.svelte';
  import ItemSection from './ItemSection.svelte';
  let pointsDivHeight: number = $state(0);
  $inspect(pointsDivHeight);
</script>

<div class="my-16 h-fit text-center">
  <h1 class="text-2xl md:text-3xl">
    Boost your
    <span class="font-bold text-accent">Bookings</span>
    and increase
    <span class="font-bold text-accent">Revenue</span>
  </h1>
  <ItemSection
    src="/assets/pexels-antoine-maurin-264851287-28451195.webp"
    alt="Scenic Coastal View of Tonnara di Scopello (By Antoine Maurin on Pexels)"
  >
    <SalePointSingle
      src="/icons/eye_line.svg"
      alt="mingcute:eye_line"
      title="Boost Visibility"
      desc="Increase your visibility and reach a wider audience with our AI based Optimization Service."
    />
    <SalePointSingle
      src="/icons/book_6_line.svg"
      alt="mingcute:book_6_line"
      title="Turn Interest into Bookings"
      desc="Turn potential guests into confirmed bookings with our smart and targeted AI algorithm based techniques."
    />
    <SalePointSingle
      src="/icons/chart_line_line.svg"
      alt="mingcute:chart_line_line"
      title="Stay ahead of market trends"
      desc="Stay ahead of market trends and ensure your listings remain competitive with our real-time AI insights."
    />
  </ItemSection>
</div>
