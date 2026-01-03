<script setup lang="ts">
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
            <div style="display: flex; padding-left: var(--padding-md); align-content: center;pointer-events: none; touch-action: none;"> <Icon name="ic:outline-keyboard-arrow-right" class="icon"/> <h3> {{ node.name }}</h3></div>
            <ul>
                <PathTreeNode
                    v-for="child in Object.values(node.children)"
                    :key="child.name"
                    :node="child"
                />
            </ul>
        </div>
    </li>
</template>

<style scoped lang="scss">
    
li {
    list-style: none;
    // padding-left: ;
    padding: 0 0 0 var(--padding-md);
    width: 100%;

    overflow: hidden;
    background-clip: border-box;
    border-radius: var(--border-radius-sm);
}
ul {
    list-style: none;
    padding-left: var(--padding-sm);
    overflow: hidden;
    border-radius: var(--border-radius-sm);
    height: fit-content;
}


h3 {
    text-transform:capitalize;
    pointer-events: none;
    align-content: center;
    padding: var(--padding-md);
    color: var(--color-on-surface-container);
}
h4{
    font-size: 1.1em;
}
.file {
    display: block;
    padding: var(--padding-md) var(--padding-lg);
    max-height: 100vh;
    height: fit-content;
    opacity: 1;
    transition: max-height var(--transition-speed) ease;
    &:hover{
        //backdrop-filter: brightness(1.1);
        background: linear-gradient(to right, transparent,var(--color-overlay-container));
    }
    &.router-link-exact-active{
        background: linear-gradient(to right, transparent,var(--color-overlay-container));
    }
}

.folder {
    user-select: none;
    text-transform:capitalize;
    cursor: pointer;

    max-height: 100vh;
    height: fit-content;

    opacity: 1;
    overflow: hidden;

    background-color: var(--color-surface-container-highest);
    border-radius: var(--border-radius-sm);
    transition: background-color var(--transition-speed) ease ;
    .icon{
        transform: rotate(90deg);
        transition: transform var(--transition-speed) ease;
    }
    position: relative;
    // &::before{
    //     content: '';
    //     position: absolute;
    //     left: 0;
    //     top: 0;
    //     width: 2px;
    //     height: 100%;
    //     border-radius: var(--border-radius-sm) 0 0 var(--border-radius-sm);
    //     background-color: var(--color-secondary);
    //     &:nth-child(1){
    //         display: none;
    //     }
    // }
}
.file,.folder{
    transition: max-height var(--transition-speed) ease,
    padding-top var(--transition-speed) ease,
    padding-bottom var(--transition-speed) ease,
    opacity var(--transition-speed) ease;
}
.folder.collapsed {
    background-color: transparent;
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
.icon{
    pointer-events: none;
    touch-action: none;
    display: block;
    align-self: center;
}
</style>
