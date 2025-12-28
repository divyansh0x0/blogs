<script setup lang="ts">
import type {TreeNode} from "@/lib/buildtree";

defineProps<{
    node: TreeNode
}>();
</script>

<template>
    <li>
        <NuxtLink class="file" v-if="node.type === 'file'" :to="node.path">
            <h3>
                {{ node.name }}
            </h3>
            <p>
                {{node.overview}}
            </p>
        </NuxtLink>
        <div class="folder collapsed" @click = "(e)=>(e.target as HTMLDivElement).classList.toggle('collapsed')" v-else open>
            <h3> {{ node.name }}</h3>
            <ul>
                <TreeNode
                    v-for="child in Object.values(node.children)"
                    :key="child.name"
                    :node="child"
                />
            </ul>
        </div>
    </li>
</template>

<style scoped>
ul {
    list-style: none;
    padding-left: var(--padding-lg);
    border-left: 1px solid var(--color-tertiary);
}
li{
    width: 100%;
}
.file{
    display: block;
    padding: var(--padding-md);
    transition: max-height var(--transition-speed) ease;
}
.folder{
    cursor: pointer;
    background-color: var(--color-overlay-container);
    overflow: hidden;
}
p{
    color: var(--color-on-overlay);
}
</style>
