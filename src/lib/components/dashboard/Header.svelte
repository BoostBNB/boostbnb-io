<header class="col-span-12 flex items-center gap-2 lg:gap-4">
  <label for="my-drawer" class="btn btn-square btn-ghost drawer-button lg:hidden">
    <svg data-src="https://unpkg.com/heroicons/20/solid/bars-3.svg" class="h-5 w-5"></svg>
  </label>
  <div class="grow">
    <h1 class="lg:text-2xl lg:font-light">Dashboard</h1>
  </div>
  <!-- dropdown -->
  <div class="dropdown dropdown-end z-10">
    <div tabindex="0" class="avatar btn btn-circle btn-ghost">
      <div class="w-10 rounded-full">
        <img src="https://picsum.photos/80/80?5" />
      </div>
    </div>
    <ul tabindex="0" class="menu dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow-2xl">
      <li>
        <a>Profile</a>
      </li>
      <li>
        <a>
          Inbox
          <span class="badge badge-success">12</span>
        </a>
      </li>
      <li><a>Settings</a></li>
      <li><a>Logout</a></li>
    </ul>
  </div>
  <!-- /dropdown -->
</header>
