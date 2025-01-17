<script lang="ts">
  interface props {
    title: string;
    desc: string;
    src: string;
    alt: string;
  }

  const { title, desc, src, alt }: props = $props();
</script>

<div class="card mx-auto w-11/12 bg-base-200 shadow-xl md:mx-0 md:w-auto">
  <div class="card-body text-center">
    <img class="h-16" {src} {alt} />
    <h2 class="text-xl font-bold">{title}</h2>
    <p>{desc}</p>
  </div>
</div>
