<template>
  <div>
    <div>TTT</div>
    <list :datasource="listData"></list>
  </div>
</template>

<style scoped>
</style>

<script>
import { getList } from "../actions";
import list from "../components/list.vue";
export default {
  components: {
    list
  },
  data() {
    return {
      listData: []
    };
  },
  created() {
    getList().then(listData => {
      this.listData = listData;
    });
  },
  methods: {}
};
</script>