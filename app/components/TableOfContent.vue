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
        <ul >
            <li v-for="link in props.links" :key="link.id">
                <a :href="`#${link.id}`">{{ link.text }}</a>
            </li>
        </ul>
        <button class="side-edge-handle" @click="isCollapsed = !isCollapsed">
            <Icon name="ic:outline-keyboard-double-arrow-right" class="icon"/>
        </button>
    </div>
</template>

<style scoped>

.toc{
    background-color: var(--color-surface-container-highest);
    box-shadow: var(--box-shadow);
    
    transition: transform var(--transition-speed) ease;
    padding: var(--padding-md);
    
    border-radius:  var(--border-radius-sm) var(--border-radius-sm) 0 0;
    &.collapsed{
        transform: translateY(-100%);
    }
}
ul {
    list-style: decimal;
    margin-left: var(--spacing-lg);
}
li{
    display: list-item;
    padding: var(--padding-md) 0;
}

.side-edge-handle{
    height: 2em;
    width: 100%;

    position: absolute;
    left: 50%;
    bottom: 0;

    transform: translate(-50%,100%);
    backdrop-filter: blur(18px);
   
    background-color: var(--color-overlay-container);
    color: var(--color-on-overlay);
    
    padding: 0;
    border-radius:  0 0 var(--border-radius-sm) var(--border-radius-sm);

    .icon{
        transform: rotate(-90deg);
        transition: transform var(--transition-speed) ease;
    }
    &:hover{
        .icon{
            transform:  rotate(-90deg) translateX(30%);
        }
    }
}
.toc.collapsed{
    .side-edge-handle{
        .icon{
            transform: rotate(90deg);
        }
            &:hover{
        .icon{
            transform:rotate(90deg)  translateX(30%) ;
        }
    }
    }

}
</style>