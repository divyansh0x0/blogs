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
</script>
<template>
    <div class="nav-container">
        <nav>
            <NuxtLink class="logo" href="/">Divyansh Singh</NuxtLink>
            <h2>Index</h2>
            <div v-if="tree" class="path-tree">
                <PathTreeNode v-for="node in tree.children" :key="node.name" :node="node" />
            </div>
        </nav>
    </div>
</template>

<style scoped lang="scss">
.logo {
    min-width: max-content;
    font-size: 1.5em;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    padding-bottom: var(--spacing-lg);
    display: block;
}

.nav-container {
    height: 100%;
    width: 100%;
}

nav {
    display: flex;
    flex-direction: column;
    gap: 1em;

    width: 100%;
    height: 100%;
    padding: var(--padding-lg);
    overflow-y: auto;
    overflow-x: hidden;
    background-color: transparent;
}

h2 {
    font-size: 1.2em;
    color: var(--color-on-surface-variant);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: "Lora", serif;
    margin-bottom: var(--spacing-sm);
}

.path-tree {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    >li {
        padding-left: 0;
    }
}
</style>