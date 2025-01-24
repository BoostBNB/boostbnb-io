<script lang="ts">
  import ItemSection from './ItemSection.svelte';

  interface SalePointProps {
    title: string;
    desc: string;
    src: string;
    alt: string;
  }
</script>

{#snippet salepoint(props: SalePointProps)}
  <div
    class="intersect-once card mx-auto w-11/12 rounded-lg bg-base-200 opacity-0 motion-delay-100 intersect:motion-preset-slide-left intersect:opacity-100 md:mx-0 md:w-full"
  >
    <div class="card-body text-center">
      <img class="h-16" src={props.src} alt={props.alt} />
      <h2 class="text-xl font-bold">{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  </div>
{/snippet}

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
    {@render salepoint({
      src: '/icons/eye_line.svg',
      alt: 'mingcute:eye_line',
      desc: 'Boost Visibility',
      title: 'Increase your visibility and reach a wider audience with our AI based Optimization Service.',
    })}
    {@render salepoint({
      src: '/icons/book_6_line.svg',
      alt: 'mingcute:book_6_line',
      title: 'Turn Interest into Bookings',
      desc: 'Turn potential guests into confirmed bookings with our smart and targeted AI algorithm based techniques.',
    })}
    {@render salepoint({
      src: '/icons/chart_line_line.svg',
      alt: 'mingcute:chart_line_line',
      title: 'Stay ahead of market trends',
      desc: 'Stay ahead of market trends and ensure your listings remain competitive with our real-time AI insights.',
    })}
  </ItemSection>
</div>
