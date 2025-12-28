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
               placeholder="search..." type="text">
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
        <div class="result-container" v-else>
            No result found
        </div>
    </div>
</template>

<style scoped>
.search {
    background-color: var(--color-surface-container-highest);
    border-radius: var(--border-radius-sm);
    position: relative;
    padding: 0;
    width: 100%;
    height: 100%;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 1px;
        width: 100%;
        background-color: var(--color-primary);
        opacity: 1;
        transition: opacity var(--transition-speed) ease;
    }
}

input {
    width: 100%;
    height: 100%;
    background-color: var(--color-surface-container-highest);
    padding: 0 var(--padding-md);
    border-top-left-radius: var(--border-radius-sm);
    border-top-right-radius: var(--border-radius-sm);
    position: relative;

}

.result-container {
    padding: var(--padding-sm);
    list-style: none;
    max-height: 50vh;
    overflow: auto;

    position: absolute;
    top: 100%;
    background-color: var(--color-surface-container-highest);
    border-bottom-left-radius: var(--border-radius-sm);
    border-bottom-right-radius: var(--border-radius-sm);
    width: 100%;

    transition: max-height var(--transition-speed) ease;
    z-index: 1000;
}

.collapsed {
    &::after {
        opacity: 0;
    }

    .result-container {
        border: none;
        max-height: 0;
        padding: 0;
        overflow: hidden;
        opacity: 0;
    }

    input {
        border-radius: var(--border-radius-sm);
    }
}

li {
    height: fit-content;
    width: 100%;
    margin-top: var(--spacing-sm);
}

.search-result {
    display: block;
    width: 100%;
    height: 100%;
    padding: var(--padding-md) var(--padding-lg);

    text-decoration: none;
    font-size: 1em;
    border-radius: var(--border-radius-sm);

    &:hover {
        background-color: var(--color-secondary);
        color: var(--color-on-secondary);
        h6{
            color: var(--color-on-secondary);
        }
        p{
            color: var(--color-on-secondary);
        }
    }

    h6 {
        font-size: 1.1em;
        padding: 0;
        margin: 0;
    }

    p {
        margin: 0;
    }
}


</style>