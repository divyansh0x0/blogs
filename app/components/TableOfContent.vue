<script lang="ts" setup>
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
    <div :class="{collapsed:isCollapsed}">
        <h2>Table of Content</h2>
        <ul v-for="link in props.links" :key="link.id">
            <li>
                <a :href="`#${link.id}`">{{ link.text }}</a>
            </li>
        </ul>
        <button class="side-edge-handle" @click="isCollapsed = !isCollapsed">
            <Icon name="ic:outline-keyboard-double-arrow-right" class="icon"/>
        </button>
    </div>
</template>

<style scoped>


ul {
    list-style: none
}
li{
    padding: var(--padding-md);
}

.side-edge-handle{
    position: absolute;
    height: 100%;
    padding: 0;
    width: 3em;
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
    &:hover{
        .icon{
            transform: translateX(30%);
        }
    }
}
.toc.collapsed{
    .side-edge-handle{
        .icon{
            transform: rotate(180deg);
        }
            &:hover{
        .icon{
            transform:rotate(180deg)  translateX(30%) ;
        }
    }
    }

}
</style>