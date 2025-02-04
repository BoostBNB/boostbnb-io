<script lang="ts">
  import '../app.css';
  import { invalidate } from '$app/navigation';
  import { onMount, type Snippet } from 'svelte';
  import type { Data } from '$lib';

  interface props {
    data: Data;
    children: Snippet;
  }

  let { data, children }: props = $props();
  let { session, supabase }: Data = $derived(data);

  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
      if (newSession?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth');
      }
    });

    return () => data.subscription.unsubscribe();
  });
</script>

{@render children()}
