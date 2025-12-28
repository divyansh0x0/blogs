<script setup lang="ts">
import {buildFileTree} from "~/lib/buildtree";
import TreeNode from "~/components/TreeNode.vue";

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
</script>
<template>
    <div>
        <h2>Content</h2>
        <div v-if="tree">
            <TreeNode v-for="node in tree.children" :key="node.name" :node="node"/>
        </div>
    </div>
</template>

<style scoped>

</style>