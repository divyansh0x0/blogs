<script setup lang="ts">
const route = useRoute()

const {data: page} = await useAsyncData('page-' + route.path, () => {
    return queryCollection('content').path(route.path).first()
})

if (!page.value) {
    throw createError({statusCode: 404, statusMessage: 'Page not found', fatal: true})
}
</script>

<template>
    <main class="content-container" v-if="page">
        <ContentRenderer class="content" :value="page.body"/>
        <TableOfContent class="toc" v-if="page.body.toc && page.body.toc.links.length>0" :links="page.body.toc.links"/>
    </main>
</template>
<style scoped>
.content-container{
    position: relative;
    height: 100%;
    width: 100%;
}
.toc{
    background-color: var(--color-surface-container-highest);
    box-shadow: var(--box-shadow);
    position: fixed;
    top:0;
    right: 0;
    transition: transform var(--transition-speed) ease;
    padding: var(--padding-md);
    border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0;
    &.collapsed{
        transform: translateX(100%);
    }
}
.content{
    margin-left: 2rem; /* hardcoded margin based on sidebar edge handle width*/
}
</style>
