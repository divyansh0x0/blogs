<template>
    <NuxtRouteAnnouncer/>
    <div class="page-layout">
        <!-- Left Zone: Index -->
        <aside class="zone-left">
            <SideBar />
        </aside>

        <!-- Center Zone: Content -->
        <main class="zone-center">
            <NuxtPage/>
        </main>

        <!-- Right Zone: Sidebar with Search & TOC -->
        <aside class="zone-right">
            <Navbar class="navbar" />
            <div id="right-sidebar-toc"></div>
        </aside>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.page-layout {
    display: grid;
    grid-template-columns: 260px minmax(0, 1fr) 260px;
    min-height: 100vh;
    width: 100%;
}

.zone-left, .zone-right {
    position: relative;
}

.zone-left > *, .zone-right > * {
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
}

.zone-left {
    border-right: 1px solid var(--color-outline-variant);
}

.zone-right {
    /* Optional faint border or none. Prompt says: "no sidebar borders unless extremely faint (1px, low-opacity)." */
    border-left: 1px solid var(--color-outline-variant);
    display: flex;
    flex-direction: column;
}

.zone-right > * {
    display: flex;
    flex-direction: column;
}

.navbar {
    padding: var(--padding-lg);
    flex-shrink: 0;
    height: fit-content;
}

#right-sidebar-toc {
    padding: 0 var(--padding-lg) var(--padding-lg);
    flex-grow: 1;
    overflow-y: auto;
}

.zone-center {
    padding: 0 var(--padding-lg);
}

@media (max-width: 1024px) {
    .page-layout {
        display: flex;
        flex-direction: column;
    }
    
    .zone-left > *, .zone-right > * {
        position: relative;
        height: auto;
        overflow-y: visible;
    }

    .zone-left {
        order: 3; /* Index at the bottom */
        border-right: none;
        border-top: 1px solid var(--color-outline-variant);
    }
    
    .zone-center {
        order: 2; /* Content in the middle */
    }

    .zone-right {
        order: 1; /* Search and TOC at the top */
        border-left: none;
        border-bottom: 1px solid var(--color-outline-variant);
    }

    /* Adjust padding for mobile */
    .navbar {
        padding: var(--padding-md);
    }

    #right-sidebar-toc {
        padding: 0 var(--padding-md) var(--padding-md);
    }
}
</style>