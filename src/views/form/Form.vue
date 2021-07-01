<template>
  <div>
    <!-- 分页表格 -->
    <el-input
      class="iptWidth"
      placeholder="请输入您想搜索的商品名称"
      v-model="input"
      clearable
      @input="ipt"
    >
    </el-input>
    <el-card class="box-card">
      <el-table
        :data="arr.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
        style="width: 100%"
      >
        <el-table-column prop="NAME" label="名称"></el-table-column>
        <el-table-column
          prop="GOODS_SERIAL_NUMBER"
          label="商品编号"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="ORI_PRICE"
          label="原价"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="PRESENT_PRICE"
          label="现价"
          align="center"
        ></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" @click="Edit(scope)"
              >修改</el-button
            >
            <el-button type="danger" icon="el-icon-delete" @click="Del"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <!--弹框 Form -->
      <el-dialog title="修改数据" :visible.sync="dialogFormVisible">
        <el-form v-model="flag">
          <el-form-item label="名称：" :label-width="formLabelWidth">
            <el-input v-model="flag[0].NAME" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="原价：" :label-width="formLabelWidth">
            <el-input v-model="flag[0].ORI_PRICE" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="现价：" :label-width="formLabelWidth">
            <el-input
              v-model="flag[0].PRESENT_PRICE"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"
            >确 定</el-button
          >
        </div>
      </el-dialog>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="arr.length"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      input: "",
      arr: [],
      pageSizes: [10, 20, 30, 40, 50, 100],
      pageSize: 10,
      currentPage: 1,
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "80px",
      flag: [{ NAME: "", ORI_PRICE: "", PRESENT_PRICE: "" }],
    };
  },
  methods: {
    gettableData() {
      this.$api
        .gettableData()
        .then((res) => {
          // console.log(res.data);
          this.arr = res.data;
          // console.log(this.arr);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    ipt() {
      console.log(this.input);
    },
    handleSizeChange(val) {
      this.pageSize = val;
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      // console.log(`当前页: ${val}`);
    },
    Edit(scope) {
      this.dialogFormVisible = true;

      this.flag[0].NAME = scope.row.NAME;
      this.flag[0].ORI_PRICE = scope.row.ORI_PRICE;
      this.flag[0].PRESENT_PRICE = scope.row.PRESENT_PRICE;
    },
    Del() {
      this.$message({
        message: "老板，给您删除成功了哦！",
        type: "success",
      });
    },
  },
  mounted() {
    this.gettableData();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.iptWidth {
  width: 300px;
  margin-top: 20px;
}
.box-card {
  margin-top: 10px;
}
</style>