<script setup lang="ts">
import DarkModeIcon from '~icons/material-symbols/dark-mode-outline-rounded';
import LightModeIcon from '~icons/material-symbols/light-mode-rounded';

const colorMode = useColorMode();
const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set(_isDark) {
        colorMode.preference = _isDark ? 'dark' : 'light'
    }
})

isDark.value = colorMode.value === 'dark';
</script>

<template>
    <nav>
        <NuxtLink class="logo" href="/">Divyansh Singh</NuxtLink>
        <div class="right">
            <ContentSearch class="search-box"/>
            <button @click="isDark=!isDark">
                <LightModeIcon v-if="isDark"/>
                <DarkModeIcon v-else/>
            </button>
        </div>
    </nav>
</template>

<style scoped>
nav {
    width: 100vw;
    position: sticky;
    display: flex;
    padding: var(--padding-sm);
    gap: var(--spacing-md);
    justify-content: space-between;
    align-content: center;
}
.logo{
    min-width: max-content;
    font-size: 2em;
    align-content: center;
}
.right{
    flex: 1;
    position: relative;
    display: flex;
    gap: var(--spacing-md);
    justify-content: end;
}
.search-box{
    height: 100%;
    width: 100%;
    max-width: 500px;
    flex: 1 1 50vw;
}
</style>