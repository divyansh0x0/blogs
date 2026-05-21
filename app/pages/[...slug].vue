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
    <div class="blog-wrapper" v-if="page">
        <div class="blog" >
            <H1>{{ page?.title ?? "Untitled" }}</H1>
            <ContentRenderer class="content" :value="page.body" />
        </div>
        <ClientOnly>
            <Teleport to="#right-sidebar-toc">
                <TableOfContent class="toc" v-if="page.body.toc && page.body.toc.links.length > 0"
                                :links="page.body.toc.links" />
            </Teleport>
        </ClientOnly>
    </div>
</template>
<style scoped>
.blog-wrapper {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
}

.blog {
    position: relative;
    width: 100%;
    /* Max width is handled by .content in markdown.scss, but we can set it here too */
    max-width: 70ch;
    margin: 0 auto;
    padding: var(--spacing-xl) 0;
}

h1 {
    padding: var(--padding-sm) 0 var(--spacing-lg) 0;
    /* text-align: left; */
}
</style>
