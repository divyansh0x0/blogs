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
        <TableOfContent v-if="page.body.toc && page.body.toc.links.length>0" :links="page.body.toc.links"/>
    </main>
</template>
<style scoped>
.content-container{
    position: relative;
    height: 100%;
    width: 100%;
}
.content{
    margin-left: 2rem; /* hardcoded margin based on sidebar edge handle width*/
}
</style>
