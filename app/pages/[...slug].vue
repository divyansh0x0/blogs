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
    <div class="blog-wrapper">
        <div class="blog" v-if="page">
            <H1>{{ page?.title ?? "Untitled" }}</H1>
            <ContentRenderer class="content" :value="page.body" />
            <TableOfContent class="toc" v-if="page.body.toc && page.body.toc.links.length > 0"
                :links="page.body.toc.links" />
        </div>
    </div>
</template>
<style scoped>
.blog-wrapper {
    width: 100%;
    justify-content: center;
}

.blog {
    position: relative;
    height: 100%;
    max-width: 120ch;
    width: 100%;
    margin-left: 50%;
    transform: translateX(-50%);
}

h1 {
    padding: var(--padding-sm) 0 0 var(--padding-lg);
    /* text-align: center; */
}
</style>
