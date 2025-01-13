<script lang="ts">
  const aboutLink: string = '/#about';
  const pricingLink: string = '/#pricing';
  const loginLink: string = '/log-in';
</script>

<!-- Navbar -->
<nav class="navbar justify-between fixed top-0 left-0">
  <!-- Logo -->
  <a class="btn btn-ghost text-lg" href="/">
    <img alt="Logo" src="/favicon.png" class="w-8" />
    BoostBNB
  </a>

  <!-- Menu for mobile -->
  <div class="dropdown dropdown-end sm:hidden">
    <button class="btn btn-ghost" aria-label="open menu">
      <i class="fa-solid fa-bars text-lg"></i>
    </button>

    <ul tabindex="-1" class="dropdown-content menu z-[1] bg-base-200 p-6 rounded-box shadow w-56 gap-2">
      <li><a href={aboutLink}>About</a></li>
      <li><a href={pricingLink}>Pricing</a></li>
      <li><a href={loginLink} class="btn btn-sm btn-primary">Log in</a></li>
    </ul>
  </div>

  <!-- Menu for desktop -->
  <ul class="hidden menu sm:menu-horizontal gap-2">
    <li><a href={aboutLink}>About</a></li>
    <li><a href={pricingLink}>Pricing</a></li>
    <li><a class="btn btn-sm btn-primary" href={loginLink}>Log in</a></li>
  </ul>
</nav>