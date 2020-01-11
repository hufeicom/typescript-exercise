<template>
    <div>
        <ul>
            <li v-for="(item, i) in datasource" :key="i">
                {{item.title}}
                <img :src="item.image_url">
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>

<script>
export default {
    props: ['datasource']
}
</script>