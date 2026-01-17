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
        <TableOfContent class="toc" v-if="page.body.toc && page.body.toc.links.length > 0"
                        :links="page.body.toc.links" />
    </div>
</template>
<style scoped>
.blog-wrapper {
    position: relative;
    width: 100%;
    justify-content: center;
}
.toc{
    position: fixed;
    top: 0;
    right: 0;
}
.blog {
    position: relative;
    height: 100%;
    max-width: 120ch;
    width: 100%;
    margin-left: 50%;
    transform: translateX(-50%);
}

h1, .content {
    padding: var(--padding-sm) 0 0 20px;
    /* text-align: center; */
}


</style>
