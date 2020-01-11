<template>
  <div>
    <div>TTT</div>
    <list :datasource="listData"></list>
  </div>
</template>

<style scoped>
</style>

<script lang="ts">
import { getList } from "../actions/index";
import list from "../components/list.vue";

import { Component, Prop, Vue } from "vue-property-decorator"

@Component({
  components: {list},
  data() {
    return {
      listData: []
    };
  },
  created() {
    getList().then(listData => {
      this.listData = listData;
    });
  }
})
export default class App extends Vue{}

</script>