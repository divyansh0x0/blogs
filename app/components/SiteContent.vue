<script setup lang="ts">
import {buildFileTree} from "~/lib/buildtree";
import TreeNode from "~/components/TreeNode.vue";
import ArrowRight from '~icons/material-symbols/keyboard-arrow-right';
const {data: queryResult} = await useAsyncData(
    'navigation',
    () => queryCollection("content").all()
);

const tree = computed(() => {
    const items = queryResult.value;
    if (!items) {
        return null;
    }

    const paths:[string,string][] = items.map((value) => [value.path,value.title]);

    return buildFileTree(paths);
})
const isCollapsed = ref(true);
</script>
<template>
    <nav :class="{collapsed:isCollapsed}">
        <h2>Content</h2>
        <div v-if="tree">
            <TreeNode v-for="node in tree.children" :key="node.name" :node="node"/>
        </div>
        <button class="edge-handle" @click="isCollapsed = !isCollapsed">
            <ArrowRight class="icon"/>
        </button>
    </nav>
</template>

<style scoped lang="scss">
nav{
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--color-surface-container-highest);
    height: 100vh;
    width: fit-content;
    max-width: 80vw;
    transform: translateX(0);
    transition: transform var(--transition-speed) ease;

}
.edge-handle{
    position: absolute;
    height: 100px;
    width: fit-content;
    background-color: var(--color-primary);
    right: 0;
    top: 50%;
    transform: translate(100%,-50%);
    .icon{
        transform: rotate(180deg);
        transition: transform var(--transition-speed) ease;
    }
}
nav.collapsed{
    transform: translateX(-100%);
    .edge-handle{
        .icon{
            transform: rotate(0deg);
        }
    }
}
</style>