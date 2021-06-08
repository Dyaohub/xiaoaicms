<template>
  <div>
    <br />
    <div>
      <ve-line :data="chartData"></ve-line>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      chartData: {
        columns: ["date", "expected", "actual"],
        rows: [],
      },
    };
  },
  methods: {
    getHomeChat() {
      this.$api
        .getHomeChat()
        .then((res) => {
          this.chartData.rows = res.data;
          // console.log(this.chartData.rows, "数据");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getHomeChat();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>