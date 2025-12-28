// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules:
        [
            '@nuxt/content',
            '@nuxtjs/color-mode',
            '@nuxtjs/mdc',
            ['unplugin-icons/nuxt', { /* options */ }]
        ],
    devtools: {enabled: true},
    compatibilityDate: '2024-04-03',
    css: [
        'katex/dist/katex.min.css',
        './assets/scss/markdown.scss',
        './assets/css/theme.css',
        './assets/css/defaults.css'
    ],
    content: {

        build: {

            markdown: {
                toc: {
                    depth: 2,
                    searchDepth: 2
                },

                remarkPlugins: {'remark-math': {}},
                rehypePlugins: {'rehype-katex': {}},
            }
        }
    }
})