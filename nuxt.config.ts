// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules:
        [
            '@nuxt/content',
            '@nuxtjs/color-mode',
            '@nuxtjs/mdc',
            '@nuxt/icon',
            '@nuxt/fonts'
        ],
    ssr: false,
    // devtools: {enabled: true},
    nitro: {
        preset: "static",
    },
    compatibilityDate: '2024-04-03',
    css: [
        'katex/dist/katex.min.css',
        './assets/scss/markdown.scss',
        './assets/css/theme.css',
        './assets/css/defaults.css',
    ],

    icon: {
        serverBundle: {
            collections: ['ic']
        }
    },
    content: {


        build: {

            markdown: {
                toc: {
                    depth: 3,
                    searchDepth: 2
                },

                remarkPlugins: { 'remark-math': {} },
                rehypePlugins: { 'rehype-katex': {} },
                highlight: {
                    theme: {
                        default: 'github-light',
                        // Theme used if `html.dark`
                        dark: 'github-dark',
                        // Theme used if `html.sepia`
                        sepia: 'monokai'
                    },
                    langs: [
                        'c',
                        'cpp',
                        'ts'
                    ]
                }
            }
        }
    },
    app: {
        baseURL: '/blogs/',
        head: {
            title: 'Divyansh Singh - Blogs',
            htmlAttrs: {
                lang: 'en',
            },
            link: [
                { rel: 'icon', href: '/favicon.ico' },
            ]
        }
    }
})