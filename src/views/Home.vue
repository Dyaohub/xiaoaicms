<template>
  <div><Head></Head><Sidebar></Sidebar></div>
</template>

<script>
import Head from "../components/head/Head";
import Sidebar from "../components/sidebar/Sidebar";
export default {
  name: "",
  props: {},
  components: { Head, Sidebar },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    // console.log(this.$route);
    
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>