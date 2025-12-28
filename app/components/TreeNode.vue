<script setup lang="ts">
import ArrowRight from '~icons/material-symbols/keyboard-arrow-right';
import type {TreeNode} from "@/lib/buildtree";

function folderClickHandler(e: MouseEvent) {
    const html = (e.target as HTMLDivElement);
    html.classList.toggle("collapsed");
    console.log(html);
    e.stopImmediatePropagation();
}

defineProps<{
    node: TreeNode
}>();
</script>

<template>
    <li>
        <NuxtLink class="file" v-if="node.type === 'file'" :to="node.path">
            <h4>
                {{ node.name }}
            </h4>
            <p>
                {{ node.overview }}
            </p>
        </NuxtLink>
        <div role="button" class="folder collapsed" @click="folderClickHandler" v-else>
            <h3> <ArrowRight class="icon"/> {{ node.name }}</h3>
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

<style scoped lang="scss">
ul {
    list-style: none;
    padding-left: var(--padding-lg);
}

li {
    width: 100%;
    border-left: 1px solid var(--color-secondary);
}

h3 {
    text-transform:capitalize;
    pointer-events: none;
    align-content: center;

}

.file {
    display: block;
    padding: var(--padding-md);
    max-height: 100vh;
    height: fit-content;
    opacity: 1;
    transition: max-height var(--transition-speed) ease,
}

.folder {
    text-transform:capitalize;
    cursor: pointer;

    max-height: 100vh;
    height: fit-content;

    opacity: 1;
    background-color: var(--color-overlay-container);
    overflow: hidden;

    .icon{
        transform: rotate(90deg);
        transition: transform var(--transition-speed) ease;
    }

}
.file,.folder{
    transition: max-height var(--transition-speed) ease,
    padding-top var(--transition-speed) ease,
    padding-bottom var(--transition-speed) ease,
    opacity var(--transition-speed) ease;
}
.folder.collapsed {
    .icon{
        transform: rotate(0deg);
    }
    .folder,.file {
        max-height: 0;
        padding-top:  0;
        padding-bottom: 0;
        opacity: 0;
    }
}
p {
    color: var(--color-on-overlay);
}
</style>
