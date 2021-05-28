<template>
  <div>
    <div class="bjs">
      <div class="dis-flex">
        <div class="layout">
          <div class="el-icon-location-outline"></div>
          <div class="el-icon-edit"></div>
          <div class="el-icon-menu"></div>
          <div class="el-icon-edit-outline"></div>
          <div class="el-icon-collection-tag"></div>
          <div class="el-icon-upload"></div>
          <div class="el-icon-picture"></div>
          <div class="el-icon-s-custom"></div>
        </div>
        <div class="Flexs">
          <div v-for="(item, index) in arr1" :key="item.id">
            <div
              class="text-Color"
              @click="clickName(item, index)"
              :class="{ active: flag === item.id, activeS: flag === index }"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
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
      arr1: [
        { id: 100, name: "首页" },
        { id: 200, name: "已发布" },
        { id: 300, name: "统计" },
        { id: 400, name: "发表文章" },
        { id: 500, name: "标签页" },
        { id: 600, name: "导出excel" },
        { id: 700, name: "图片上传" },
        { id: 800, name: "退出系统" },
      ],
      flag: "",
    };
  },
  methods: {
    clickName(item, index, flag) {
      this.flag = item.id;
    },
  },
  mounted() {
    this.flag = 0;
    this.$router.push("/Chart")
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
//侧栏
.bjs {
  background-color: #344055;
  border: 1px solid #344055;
  width: 200px;
  height: 650px;
}
.text-Color {
  color: #ecf4f7;
  &:hover {
    cursor: pointer;
  }
}
.active {
  color: #fdcc4c;
}
.activeS {
  color: #fdcc4c;
}
.layout {
  display: flex;
  flex-wrap: wrap;
  width: 10px;
  font-size: 20px;
  div {
    margin: 20px 5px;
  }
}
.Flexs {
  div {
    padding: 10px;
  }
}
</style>