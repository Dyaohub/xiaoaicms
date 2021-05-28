<template>
  <div>
    <div><Head></Head></div>
    <div class="dis-flex">
      <div><Sidebar></Sidebar></div>
      <div><router-view></router-view></div>
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
</style>