
<script lang="ts" setup>
interface ContentLink {
    id:string,
    depth:number,
    text:string,
}
const props=defineProps({
    links:{
        type:Array<ContentLink>
    }
})
</script>
<template>
    <div class="toc">
        <ul v-for="link in props.links" :key="link.id">
            <li>
                <a :href="`#${link.id}`">{{link.text}}</a>
            </li>
        </ul>
    </div>
</template>

<style>

</style>