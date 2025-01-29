<script lang="ts">
  interface Box {
    src: string;
    alt: string;
    title: string;
    text: string;
  }
</script>

{#snippet box(input: Box)}
  <div class="flex-grow rounded-xl border-1 border-base-300 p-6">
    <h3 class="flex items-center space-x-2 font-bold">
      <div class="inline-block size-14 rounded-lg bg-black p-3 text-center text-white">
        <img src={input.src} alt={input.alt} class="m-auto aspect-square w-11/12" />
      </div>
      <span>{input.title}</span>
    </h3>
    <p class="mt-2 text-gray-600">{input.text}</p>
  </div>
{/snippet}

<div class="mx-auto flex max-w-6xl gap-16 p-6">
  <div class="w-1/2">
    <div class="inline-flex items-center rounded-full border-1 border-base-300 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
      <span class="mr-2">🧠</span> About us
    </div>

    <h1 class="mt-4 text-4xl font-bold">Discover the Genius <br /> Behind Productivity</h1>

    <p class="mt-3 text-gray-600">
      At Genius, we’re dedicated to enhancing productivity through innovative tools, streamlined processes, and seamless task management, empowering
      individuals and teams.
    </p>
    <div class="mt-6 flex h-[124px] space-x-12">
      <div>
        <h2 class="text-4xl font-bold">100%</h2>
        <p class="text-gray-600">Increase in Progress Tracking</p>
      </div>
      <hr class="my-auto h-3/4 border-l-1" />
      <div>
        <h2 class="text-4xl font-bold">10X</h2>
        <p class="text-gray-600">Increase in Productivity</p>
      </div>
    </div>
    <hr class="mx-auto w-3/4" />
    <div class="mt-4 flex h-6 items-center space-x-2">
      <div class="mask mask-star my-auto size-6 bg-yellow-400">.</div>
      <span class="text-gray-600">4.5 Star Average user rating</span>
    </div>
  </div>

  <div class="mt-8 w-1/2">
    <img class="h-[280px] w-full rounded-xl object-cover" src="/assets/pexels-nextvoyage-3051551.webp" alt="Team Meeting" />
    <hr class="mx-auto my-2 w-0 opacity-0" />
    <div class="flex justify-center gap-2">
      {@render box({
        src: '/icons/compass_line.svg',
        alt: 'mingcute:compass_line',
        title: 'Our Mission',
        text: 'To empower individuals and teams with intuitive tools that simplify tasks and boost productivity every day.',
      })}
      {@render box({
        src: '/icons/eye_line.svg',
        alt: 'mingcute:eye_line',
        title: 'Our Vision',
        text: 'To redefine work efficiency by creating innovative solutions that enable seamless task management globally.',
      })}
    </div>
  </div>
</div>
