<template>
  <div>
    <div><Head></Head></div>
    <div class="dis-flex">
      <div class="side"><Sidebar></Sidebar></div>
      <div class="route"><router-view></router-view></div>
    </div>
  </div>
</template>

<script>
import Head from "@/components/head/Head.vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";
export default {
  name: "",
  props: {},
  components: {
    Head,
    Sidebar,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
  .side{
    flex: 1;
  }
  .route{
    flex: 9;
  }

@media all and (min-width: 300px) {
  .dis-flex {
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
    .route{
    width: 20%;
  }
}
</style>