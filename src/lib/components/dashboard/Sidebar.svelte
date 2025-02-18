<aside class="drawer-side z-10">
  <label for="my-drawer" class="drawer-overlay"></label>
  <nav class="flex min-h-screen w-72 flex-col gap-2 overflow-y-auto bg-base-100 px-6 py-10">
    <div class="mx-4 flex items-center gap-2 font-black">
      <img alt="Logo" src="/favicon.png" class="w-8" />
      BoostBNB
    </div>
    <ul class="menu">
      <li>
        <a class="active" href="/dashboard">
          <svg data-src="https://unpkg.com/heroicons/20/solid/home.svg" class="h-5 w-5"></svg>
          Dashboard
        </a>
      </li>
      <li>
        <details>
          <summary>
            <svg data-src="https://unpkg.com/heroicons/20/solid/squares-2x2.svg" class="h-5 w-5"></svg>
            Listings
          </summary>
          <ul>
            <li><a href="/dashboard/listing/all">All Listings</a></li>
            <li><a href="/dashboard/listing/new">Add New</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>
            <svg data-src="https://unpkg.com/heroicons/20/solid/sparkles.svg" class="h-5 w-5"></svg>
            Tools
          </summary>
          <ul>
            <li><a href="/dashboard/chat"> Cohost AI </a></li>
            <li><a href="/dashboard/optimize-listing">Listing Optimizer</a></li>
            <li><a href="/dashboard/optimize-image">Image Optimizer</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>
            <svg data-src="https://unpkg.com/heroicons/20/solid/adjustments-vertical.svg" class="h-5 w-5"></svg>
            Settings
          </summary>
          <ul>
            <li><a href="##">Account</a></li>
            <li><a href="##">Transactions</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </nav>
  <!-- /sidebar menu -->
</aside>
