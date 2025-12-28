<script lang="ts" setup>
import ArrowRight from '~icons/material-symbols/keyboard-arrow-right';
interface ContentLink {
    id: string,
    depth: number,
    text: string,
}

const props = defineProps({
    links: {
        type: Array<ContentLink>
    }
});
const isCollapsed = ref(false);
</script>
<template>
    <div class="toc" :class="{collapsed:isCollapsed}">
        <h2>Table of Content</h2>
        <ul v-for="link in props.links" :key="link.id">
            <li>
                <a :href="`#${link.id}`">{{ link.text }}</a>
            </li>
        </ul>
        <button class="side-edge-handle" @click="isCollapsed = !isCollapsed">
            <ArrowRight class="icon"/>
        </button>
    </div>
</template>

<style scoped>
.toc {
    background-color: var(--color-surface-container-highest);
}

ul {
    list-style: none
}
li{
    padding: var(--padding-md);
}
.toc{
    box-shadow: var(--box-shadow);
    position: fixed;
    top:50%;
    right: 0;
    transform: translate(0,-50%);
    transition: transform var(--transition-speed) ease;
    padding: var(--padding-md);
    border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0;

    &.collapsed{
        transform: translate(100%,-50%);
    }
}

.side-edge-handle{
    position: absolute;
    height: 100%;
    padding: 0;
    width: fit-content;
    left: 0;
    top: 50%;
    transform: translate(-100%,-50%);
    backdrop-filter: blur(10px);
    background-color: var(--color-overlay-container);
    color: var(--color-on-overlay);
    border-radius: var(--border-radius-sm) 0 0 var(--border-radius-sm);

    .icon{
        transform: rotate(0deg);
        transition: transform var(--transition-speed) ease;
    }
}
.toc.collapsed{
    .side-edge-handle{
        .icon{
            transform: rotate(180deg);
        }
    }

}
</style>