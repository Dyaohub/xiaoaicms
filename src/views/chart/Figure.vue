<template>
  <div>
    <div class="dis-flex">
      <el-card class="box-card">
        <ve-radar :data="chartData1"></ve-radar>
      </el-card>
      <el-card class="box-card">
        <ve-pie :data="chartData2" :settings="chartSettings1"></ve-pie>
      </el-card>
      <el-card class="box-card">
        <ve-histogram
          :data="chartData3"
          :settings="chartSettings2"
        ></ve-histogram>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    this.chartSettings1 = {
      roseType: "radius",
    };
    this.chartSettings2 = {
      metrics: ["expected", "actual"],
      dimension: ["date"],
    };

    return {
      chartData1: {
        columns: [
          "name",
          "sales",
          "ministration",
          "techology",
          "marketing",
          "delelopmer",
        ],
        rows: [],
      },
      chartData2: {
        columns: ["name", "data"],
        rows: [],
      },
      chartData3: {
        columns: ["date", "expected", "actual"],
        rows: [],
      },
    };
  },
  methods: {
    // 雷达图
    getRadarChat() {
      this.$api
        .getRadarChat()
        .then((res) => {
          // console.log(res.data);
          this.chartData1.rows = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 饼图
    getRingChat() {
      this.$api
        .getRingChat()
        .then((res) => {
          // console.log(res.data);
          this.chartData2.rows = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 柱状图
    gethomeData() {
      this.$api
        .gethomeData()
        .then((res) => {
          // console.log(res.data);
          this.chartData3.rows = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getRadarChat();
    this.getRingChat();
    this.gethomeData();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  flex: 1;
  margin: 8px;
  height: 100%;
}
</style>