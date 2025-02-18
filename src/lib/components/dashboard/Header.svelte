<script lang="ts">
  interface props {
    disp: string;
    logout: () => void;
  }

  const { disp, logout }: props = $props();
  let apbv: string = disp ? disp.charAt(0).toUpperCase() : '';
</script>

<header class="col-span-12 flex items-center gap-2 lg:gap-4">
  <label for="my-drawer" class="btn btn-square btn-ghost drawer-button lg:hidden">
    <svg data-src="https://unpkg.com/heroicons/20/solid/bars-3.svg" class="h-5 w-5"></svg>
  </label>
  <div class="grow">
    <h1 class="lg:text-2xl lg:font-light">Dashboard</h1>
  </div>
  <!-- dropdown -->
  <div class="dropdown dropdown-end z-10">
    <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
    <div tabindex="0" class="avatar btn btn-circle btn-ghost">
      <div class="w-10 rounded-full">
        <div class="relative size-full bg-neutral text-neutral-content">
          <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl leading-none">{apbv}</span>
        </div>
      </div>
    </div>
    <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
    <ul tabindex="0" class="menu dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow-2xl">
      <li>
        <a href="##">Profile</a>
      </li>
      <li><a href="##">Settings</a></li>
      <li>
        <button onclick={() => logout()}>Log Out</button>
      </li>
    </ul>
  </div>
  <!-- /dropdown -->
</header>
