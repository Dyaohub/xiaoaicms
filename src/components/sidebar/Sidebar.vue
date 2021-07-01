<template>
  <div>
    <div class="bjs">
      <div class="dis-flex">
        <div class="layout">
          <div class="el-icon-location-outline"></div>
          <div class="el-icon-document-copy"></div>
          <div class="el-icon-collection-tag"></div>
          <div class="el-icon-picture"></div>
          <div class="el-icon-document-checked"></div>
          <div class="el-icon-edit"></div>
          <div class="el-icon-help"></div>
          <div class="el-icon-s-promotion"></div>
          <div class="el-icon-loading"></div>
          <div class="el-icon-s-custom"></div>
        </div>
        <div class="Flexs">
          <div v-for="(item, index) in arr1" :key="item.id">
            <div
              class="text-Color"
              @click="clickName(index)"
              :class="{ active: flag === index }"
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
        { id: 200, name: "分页表格" },
        { id: 300, name: "标签页" },
        { id: 400, name: "图片上传" },
        { id: 500, name: "已发表" },
        { id: 600, name: "发布文章" },
        { id: 700, name: "统计" },
        { id: 800, name: "导出excel" },
        { id: 900, name: "聊天室" },
        { id: 1000, name: "退出系统" },
      ],
      flag: "",
    };
  },
  methods: {
    clickName(index) {
      if (index === 0) {
        this.$router.push("/Chart");
        this.flag = 0;
      }
      if (index === 1) {
        this.$router.push("/Form");
        this.flag = 1;
      }
    },
  },
  mounted() {
    this.flag = 0;
    this.$router.push("/Chart");
    if (this.$route.meta.index === 0) {
      this.flag = 0;
      this.$router.push("/Chart");
    }
    if (this.$route.meta.index === 1) {
      this.flag = 1;
      this.$router.push("/Form");
    }
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
  width: 122px;
  height: 100%;
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