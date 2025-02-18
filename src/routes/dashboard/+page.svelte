<script lang="ts">
  import Header from '$lib/components/dashboard/Header.svelte';
  import Stats from '$lib/components/dashboard/Stats.svelte';
  const { data } = $props();
  let { supabase } = $derived(data);

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      window.location.href = '/log-in';
    } else {
      console.error(error);
    }
  };

  async function test() {
    console.log("Test button clicked!");
     try {
      const res = await fetch('/dashboard/listing', {
        method: "DELETE", // ✅ Changed to POST
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: "https://google.com" })
      });

      const data = await res.json();
      console.log("Response:", data);

      if (data.error) {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Fetch failed:", error);
      alert("Fetch request failed");
    }
  }
  
</script>

<svelte:head>
  <title>BoostBNB | Dashboard</title>
</svelte:head>

<div class="grid grid-cols-12 grid-rows-[min-content] gap-y-12 p-4 lg:gap-x-12 lg:p-10">
  <Header disp={data.session?.user.email ?? 'U'} {logout} />
  <Stats />
  <button 
    on:click={test} 
    class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
    Test Button
  </button>
</div>
