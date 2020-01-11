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

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

@Component({props: ['datasource']})
export default class list extends Vue{
  
}
// export default {
//     props: ['datasource']
// }
</script>