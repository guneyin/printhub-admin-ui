<script lang="ts">
    import Sidebar from "@/components/modules/sidebar.svelte";
    import Header from "@/components/modules/header.svelte";

    let { children } = $props();
</script>

<div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <Sidebar />
    <div class="flex flex-col">
        <Header />

        <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {@render children()}
        </main>
    </div>
</div>