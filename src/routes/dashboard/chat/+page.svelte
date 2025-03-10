<script lang="ts">
  import { enhance } from '$app/forms';

  interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
  }

  const { data, form } = $props();
  let message: string = $state('');
  let chatHistory: ChatMessage[] = $state([
    {
      role: 'assistant',
      content: "Hello! I'm your Cohost AI assistant. How can I help optimize your Airbnb listings today?",
      timestamp: new Date(),
    },
  ]);
  let isLoading = $state(false);
  let chatContainer: HTMLElement;

  // Scroll to bottom of chat when new messages appear
  $effect(() => {
    if (chatContainer) {
      setTimeout(() => {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }, 100);
    }
  });

  function handleSubmit() {
    if (!message.trim()) return;

    // Add user message to chat
    chatHistory = [
      ...chatHistory,
      {
        role: 'user',
        content: message,
        timestamp: new Date(),
      },
    ];

    isLoading = true;

    // Clear input
    message = '';

    // @ts-ignore
    return async ({ update }) => {
      await update();

      // Check if form submission returned a result
      if (form?.success && form?.result) {
        chatHistory = [
          ...chatHistory,
          {
            role: 'assistant',
            content: form.result,
            timestamp: new Date(),
          },
        ];
      } else if (form?.error) {
        chatHistory = [
          ...chatHistory,
          {
            role: 'assistant',
            content: `Error: ${form.error}`,
            timestamp: new Date(),
          },
        ];
      }

      isLoading = false;
    };
  }
</script>

<svelte:head>
  <title>BoostBNB | Cohost AI</title>
</svelte:head>

<div class="h-full p-4 lg:p-10">
  <div class="flex h-full flex-col rounded-xl border-1 border-base-300 bg-base-100 shadow-lg">
    <div class="border-b-1 border-base-300 p-4">
      <h2 class="text-xl font-bold">Cohost AI Assistant</h2>
      <p class="text-sm text-gray-500">Get AI-powered help optimizing your listings and managing guest interactions</p>
    </div>

    <div class="flex min-h-[400px] flex-grow overflow-y-auto p-4" bind:this={chatContainer}>
      <div class="chat flex w-full flex-col gap-4">
        {#each chatHistory as message}
          {#if message.role === 'user'}
            <div class="chat chat-end">
              <div class="avatar chat-image">
                <div class="w-10 rounded-full">
                  <div class="relative size-full bg-neutral text-neutral-content">
                    <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl leading-none"
                      >{data?.session?.user?.email?.[0].toUpperCase() ?? 'U'}</span
                    >
                  </div>
                </div>
              </div>
              <div class="chat-header opacity-50">
                You
                <time class="text-xs opacity-50">{message.timestamp.toLocaleTimeString()}</time>
              </div>
              <div class="chat-bubble chat-bubble-primary">{message.content}</div>
            </div>
          {:else}
            <div class="chat chat-start">
              <div class="avatar chat-image">
                <div class="w-10 rounded-full">
                  <img alt="Cohost AI" src="/favicon.png" />
                </div>
              </div>
              <div class="chat-header opacity-50">
                Cohost AI
                <time class="text-xs opacity-50">{message.timestamp.toLocaleTimeString()}</time>
              </div>
              <div class="chat-bubble chat-bubble-accent whitespace-pre-wrap">{message.content}</div>
            </div>
          {/if}
        {/each}

        {#if isLoading}
          <div class="chat chat-start">
            <div class="avatar chat-image">
              <div class="w-10 rounded-full">
                <img alt="Cohost AI" src="/favicon.png" />
              </div>
            </div>
            <div class="chat-bubble bg-base-300">
              <span class="loading loading-dots loading-sm"></span>
            </div>
          </div>
        {/if}
      </div>
    </div>

    <!-- Input area -->
    <form method="POST" action="?/chatResponse" class="flex items-center gap-2 border-t-1 border-base-300 p-4" use:enhance={handleSubmit}>
      <input
        name="prompt"
        type="text"
        placeholder="Type your question or request..."
        class="input input-bordered flex-1"
        bind:value={message}
        disabled={isLoading}
      />
      <button type="submit" class="btn btn-primary" disabled={isLoading || !message.trim()}>
        {#if isLoading}
          <span class="loading loading-spinner loading-sm"></span>
        {:else}
          Send
        {/if}
      </button>
    </form>
  </div>
</div>
