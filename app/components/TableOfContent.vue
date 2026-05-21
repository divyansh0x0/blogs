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
</script>
<template>
    <div class="toc">
        <h2>Table of Contents</h2>
        <ul>
            <li v-for="link in props.links" :key="link.id" :style="{ paddingLeft: `${(link.depth - 2) * 1}em` }">
                <a :href="`#${link.id}`">{{ link.text }}</a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.toc {
    background-color: transparent;
    padding: var(--padding-md) 0;
    width: 100%;
}

h2 {
    font-size: 1.2em;
    color: var(--color-on-surface-variant);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: "Lora", serif;
    margin-bottom: var(--spacing-md);
}

ul {
    list-style: none;
    margin-left: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
}

li {
    display: block;
    padding: 0;
}

a {
    font-size: 0.95em;
    color: var(--color-on-surface-variant);
    text-decoration: none;
    transition: color var(--transition-speed) ease;
    line-height: 1.4;

    &:hover {
        color: var(--color-primary);
    }
}
</style>