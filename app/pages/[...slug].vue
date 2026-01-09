<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
    return queryCollection('content').path(route.path).first()
})

if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
    <H1>{{ page?.title ?? "Untitled"  }}</H1>
    <div class="content-container" v-if="page">
        <ContentRenderer class="content" :value="page.body" />
        <TableOfContent class="toc" v-if="page.body.toc && page.body.toc.links.length > 0" :links="page.body.toc.links" />
    </div>
</template>
<style scoped>
.content-container {
    position: relative;
    height: 100%;
    width: 100%;
}
h1{
    padding:var(--padding-sm) 0 0 var(--padding-lg);
}
</style>
