<script>
  import Shell from "$lib/components/dashboard/Shell.svelte";

    let { data, children } = $props()
    let { supabase } = $derived(data)
  
    const logout = async () => {
      const { error } = await supabase.auth.signOut()
      if (error) {
        console.error(error)
      }
    }
  </script>
  

    <Shell>
        {@render children()}
    </Shell>
