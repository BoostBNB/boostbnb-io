<script lang="ts">
  import { onMount } from 'svelte';
  const aboutLink: string = '/#about';
  const pricingLink: string = '/#pricing';
  const loginLink: string = '/log-in';

  onMount(() => {
    addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar')!;
      const classes = ['shadow-xl', 'bg-nav', 'backdrop-filter', 'backdrop-blur-md'];
      if (document.documentElement.scrollTop > 0) {
        for (const i in classes) {
          navbar.classList.add(classes[i]);
        }
      } else {
        for (const i in classes) {
          navbar.classList.remove(classes[i]);
        }
      }
    });
  });
</script>

<!-- Navbar -->
<nav id="navbar" class="navbar fixed left-0 top-0 z-[100] justify-between transition-all duration-300">
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

    <ul tabindex="-1" class="menu dropdown-content z-[101] w-56 gap-2 rounded-box bg-base-200 p-6 shadow">
      <li><a href={aboutLink}>About</a></li>
      <li><a href={pricingLink}>Pricing</a></li>
      <li><a href={loginLink} class="btn btn-primary btn-sm">Log in</a></li>
    </ul>
  </div>

  <!-- Menu for desktop -->
  <ul class="menu hidden gap-2 sm:menu-horizontal">
    <li><a href={aboutLink}>About</a></li>
    <li><a href={pricingLink}>Pricing</a></li>
    <li><a class="btn btn-primary btn-sm" href={loginLink}>Log in</a></li>
  </ul>
</nav>
