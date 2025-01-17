<script>
  import SalePointSingle from './SalePoint_single.svelte';
</script>

<div class="my-16 text-center">
  <h1 class="text-2xl md:text-3xl" id="salepoints">
    Boost your
    <span class="font-bold text-accent">Bookings</span>
    and increase
    <span class="font-bold text-accent">Revenue</span>
  </h1>
  <div class="flex w-full flex-col justify-center gap-4 p-4 md:flex-row lg:mx-auto lg:w-9/12">
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
  </div>
</div>
