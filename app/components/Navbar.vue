<script setup lang="ts">
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
        <button class="theme-toggle" @click="isDark=!isDark" aria-label="Toggle theme">
            <Icon name="ic:baseline-light-mode" v-if="isDark"/>
            <Icon name="ic:round-dark-mode" v-else/>
        </button>
    </div>
</template>

<style scoped>
.wrapper {
    position: relative;
    display: flex;
    gap: var(--spacing-sm);
    align-items: center;
    width: 100%;
}
.search-box {
    flex-grow: 1;
}
.theme-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--padding-sm);
    background-color: transparent;
    color: var(--color-on-surface-variant);
    border-radius: var(--border-radius-circle);
    transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease;

    &:hover {
        background-color: var(--color-surface-variant);
        color: var(--color-primary);
    }
    
    /* Make icon slightly larger for better tap target */
    font-size: 1.2rem;
}
</style>