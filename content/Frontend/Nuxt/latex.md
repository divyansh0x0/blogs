# How to render latex in nuxt markdown

> Use `rehype-katex` and `remark-math` in `nuxt.config.ts`

```ts
export default defineNuxtConfig({
    modules: ['@nuxt/content', '@nuxtjs/color-mode'],
    css: [
        'katex/dist/katex.min.scss'
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
```