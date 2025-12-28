<script setup lang="ts">
import DarkModeIcon from "~icons/material-symbols/dark-mode-outline-rounded";
import LightModeIcon from "~icons/material-symbols/light-mode-rounded";
import SearchBox from "~/components/SearchBox.vue";

const colorMode = useColorMode();
const isDark = computed({
    get() {
        return colorMode.value === "dark";
    },
    set(_isDark) {
        colorMode.preference = _isDark ? "dark" : "light";
    }
});

isDark.value = colorMode.value === "dark";
</script>

<template>
    <div class="wrapper">
        <SearchBox class="search-box"/>
        <button @click="isDark=!isDark">
            <LightModeIcon v-if="isDark"/>
            <DarkModeIcon v-else/>
        </button>

    </div>
</template>

<style scoped>
.wrapper {
    position: relative;
    display: flex;
    gap: var(--spacing-sm);
    height: 100%;
    width: 100%;
    justify-content: stretch;
    align-content: stretch;
}
.search-box {
    height: 100%;
    width: 100%;
}
button{
    height: 100%;
    padding: 0 var(--padding-md);
    background-color: var(--color-tertiary);
}
</style>