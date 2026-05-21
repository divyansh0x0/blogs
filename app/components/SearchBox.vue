<script setup lang="ts">
import Fuse from 'fuse.js'

const query = ref("");
const isCollapsed = ref(true);
const {data} = await useAsyncData('search-data', () => queryCollectionSearchSections('content'))

if (!data.value) {
    console.error("No search data found")
} else {

}
const fuse = new Fuse(data.value ?? [], {
    keys: ['title', 'description']
})
const result = computed(() => {
    const items = fuse.search(toValue(query)).slice(0, 10)
    console.log(toValue(query.value), items);
    return items;
});
</script>

<template>
    <div role="search" class="search" :class="{collapsed:isCollapsed}">
        <input v-model="query" @focusin="()=>isCollapsed = false" @focusout="()=>isCollapsed = true"
               placeholder="Search..." type="text">
        <ul class="result-container" v-if="result.length>0">
            <li v-for="link in result" :key="link.item.id">
                <NuxtLink class="search-result" :to="link.item.id">
                    <div>
                        <h6>
                            {{ link.item.title }}
                        </h6>
                        <p v-if="link.item.content">
                            {{ link.item.content.slice(0, 55) }}...
                        </p>
                    </div>
                </NuxtLink>
            </li>
        </ul>
        <div class="result-container empty-state" v-else-if="!isCollapsed && query">
            No result found
        </div>
    </div>
</template>

<style scoped>
.search {
    position: relative;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
}

input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    padding: var(--padding-sm) 0;
    font-family: inherit;
    font-size: 1rem;
    color: var(--color-on-surface);
    border-bottom: 1px solid var(--color-outline);
    transition: border-color var(--transition-speed) ease;

    &:focus {
        border-bottom-color: var(--color-primary);
    }
    
    &::placeholder {
        color: var(--color-on-surface-variant);
        font-family: "Lora", serif;
        font-style: italic;
    }
}

.result-container {
    padding: var(--padding-md) 0;
    list-style: none;
    max-height: 60vh;
    overflow-y: auto;

    /* Make it a bigger popup, escaping the sidebar width */
    position: absolute;
    top: calc(100% + var(--spacing-sm));
    right: 0;
    width: 80vw;
    max-width: 500px;
    min-width: 300px;
    background-color: var(--color-surface); 
    border: 1px solid var(--color-outline);
    border-radius: var(--border-radius-md);
    
    /* Optional: A very subtle shadow to lift it off the reading content */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    
    transition: max-height var(--transition-speed) ease, opacity var(--transition-speed) ease;
    z-index: 1000;
}

.dark .result-container {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.collapsed {
    .result-container {
        border: none;
        max-height: 0;
        padding: 0;
        overflow: hidden;
        opacity: 0;
        box-shadow: none;
    }
}

li {
    height: fit-content;
    width: 100%;
    margin: 0;
}

.search-result {
    display: block;
    width: 100%;
    height: 100%;
    padding: var(--padding-md) var(--padding-lg);

    text-decoration: none;
    font-size: 1.1em; /* Increased base font size for readability */

    &:hover {
        background-color: var(--color-surface-variant);
    }

    h6 {
        font-size: 1.2em; /* Larger title */
        padding: 0;
        margin: 0 0 var(--spacing-xs) 0;
        font-weight: 600;
        color: var(--color-on-surface);
        font-family: "Playfair Display", serif;
    }

    p {
        margin: 0;
        color: var(--color-on-surface-variant);
        font-family: "Lora", serif;
        font-size: 0.95em;
        line-height: 1.4;
    }
}

.empty-state {
    padding: var(--padding-lg);
    color: var(--color-on-surface-variant);
    font-family: "Lora", serif;
    font-size: 1.1em;
    font-style: italic;
    text-align: center;
}
</style>