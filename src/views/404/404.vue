<template>
  <div>
    <div class="bImg">
      <div><el-button type="warning" @click="clickFH">返回主页</el-button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    clickFH() {
      this.$router.push("/");
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.bImg {
  background: url("../../assets/img/404.jpg");
  width: 100%;
  height: 900px;
  position: fixed;
  background-size: 100% 100%;
}
</style>