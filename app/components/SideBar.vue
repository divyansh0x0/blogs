<script setup lang="ts">
import { buildFileTree } from "~/lib/buildtree";
import PathTreeNode from "~/components/PathTreeNode.vue";
const { data: queryResult } = await useAsyncData(
    'navigation',
    () => queryCollection("content").all()
);

const tree = computed(() => {
    const items = queryResult.value;
    if (!items) {
        return null;
    }

    const paths: [string, string][] = items.map((value) => [value.path, value.title]);

    return buildFileTree(paths);
})
const isCollapsed = ref(false);
</script>
<template>
    <div class="backdrop" :class="{ show: !isCollapsed }" @click="isCollapsed = true"></div>
    <div class="nav-container" :class="{ collapsed: isCollapsed }">
        <nav>
            <NuxtLink class="logo" href="/">Divyansh Singh</NuxtLink>
            <Navbar class="searchbar" />
            <h2>Notes</h2>
            <div v-if="tree" class="path-tree">
                <PathTreeNode v-for="node in tree.children" :key="node.name" :node="node" />
            </div>

        </nav>
        <button class="side-edge-handle" @click="isCollapsed = !isCollapsed">
            <Icon name="ic:outline-keyboard-double-arrow-right" class="icon" />
        </button>
    </div>

</template>

<style scoped lang="scss">
.logo {
    min-width: max-content;
    font-size: 2em;
    align-content: center;
}

.searchbar {
    flex: 0 0 50px;
}
.nav-container{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;

    height: 100vh;
    transition: transform var(--transition-speed) ease;
}
nav {
    display: flex;
    flex-direction: column;
    gap: 1em;

    width: fit-content;
    max-width: 80vw;
    height: 100%;
    min-height: 100vh;

    padding: var(--padding-sm);


    transform: translateX(0);
    transition: transform var(--transition-speed) ease;
    background-color: var(--color-surface-container-high);
    overflow-y: auto;
    overflow-x: hidden;
}

.side-edge-handle {
    position: absolute;
    height: 100%;
    padding: 0;
    right: 0;
    top: 50%;
    width: 2rem;
    transform: translate(100%, -50%);
    backdrop-filter: blur(10px);
    background-color: var(--color-surface-container-highest);
    color: var(--color-on-surface);
    border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0;

    .icon {
        transform: rotate(180deg);
        transition: transform var(--transition-speed) ease;
    }

    &:hover {
        .icon {
            transform: rotate(180deg) translateX(5px);
        }
    }
}

.nav-container.collapsed {
    transform: translateX(-100%);

    .side-edge-handle {
        .icon {
            transform: rotate(0deg);
        }

        &:hover {
            .icon {
                transform: rotate(0deg) translateX(5px);
            }
        }
    }

}

.backdrop {
    position: fixed;
    z-index: 98;
    left: 0;
    top: 0;

    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);

    opacity: 0;
    backdrop-filter: blur(20px);
    transform: translateX(-100%);
    transition: opacity var(--transition-speed) ease;
    &.show {
        opacity: 1;
        transform: translateX(0);
    }
}

.path-tree {
    border-radius: var(--border-radius-sm);

    >li {
        padding-left: 0;
    }
}
</style>