<template>
  <div>
    <div class="dis-flex">
      <el-card class="box-cards">
        <div class="dis-flex j-between text">
          <div class="text1">Order</div>

          <div class="text2">Price</div>
          <div class="text3">Status</div>
        </div>
        <div class="borders"></div>

        <div v-for="item in order" :key="item.id">
          <div class="dis-flex j-between textItem">
            <div>{{ item.num }}</div>
            <div>${{ item.price }}</div>

            <div class="pending" v-if="item.status === 0">pending</div>
            <div class="success" v-if="item.status === 1">success</div>
          </div>
          <div class="borders"></div>
        </div>
      </el-card>

      <el-card class="box-card">
        <div class="dis-flex j-between">
          <div class="el-icon-edit"></div>
          <div>Todo List</div>
        </div>
        <div class="borders"></div>

        <div v-for="(item, index) in arr" :key="item.id">
          <div class="iptName">
            <input type="checkbox" v-model="item.flag" />
            {{ item.name }}

            <div
              v-if="item.flag"
              :class="{ active: item.flag === true }"
              @mouseenter="enter(item)"
              @click="leave(index)"
            >
              ×
            </div>
          </div>
        </div>

        <div class="borders"></div>
        <div class="dis-flex">
          <div class="numbers">{{ clickbox }}&nbsp;items left</div>

          <div v-for="(item, index) in btps" :key="item.id">
            <div
              class="textsp"
              :class="{ textTive: flag === index }"
              @click="clickbtps(index, item)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </el-card>

      <el-card class="box-card">
        <img
          src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"
          title="哈哈哈哈😂"
        />
        <div class="strip" v-for="item in strip" :key="item.id">
          <div>{{ item.name }}</div>
          <el-progress :percentage="item.progress * 100"></el-progress>
        </div>
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
    return {
      order: "",
      strip: "",
      flag: "",
      value: "",

      arr: [
        { id: 1, name: "axios" },
        { id: 2, name: "webpack" },
        { id: 3, name: "vite" },
        { id: 4, name: "vue-admin" },
        { id: 5, name: "xiaoaicms" },
        { id: 6, name: "primary" },
        { id: 7, name: "element" },
        { id: 8, name: "Twilight" },
      ],
      arr2: [
        { id: 1, name: "axios" },
        { id: 2, name: "webpack" },
        { id: 3, name: "vite" },
        { id: 4, name: "vue-admin" },
        { id: 5, name: "xiaoaicms" },
        { id: 6, name: "primary" },
        { id: 7, name: "element" },
        { id: 8, name: "Twilight" },
      ],

      btps: [
        { id: 20, name: "All" },
        { id: 30, name: "Active" },
        { id: 40, name: "Completed" },
      ],
    };
  },

  methods: {
    // 订单
    getorderData() {
      this.$api
        .getorderData()
        .then((res) => {
          // console.log(res.data);
          this.order = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //事项
    enter(item) {
      item.flag = true;
    },
    leave(index) {
      this.arr.splice(index, 1);
    },
    clickbtps(index, item) {
      this.flag = index;
      if (index === 0) {
        this.arr = this.arr2;
      }

      if (index === 1) {
        this.arr = this.arr2.filter((item) => {
          return item.flag === false;
        });
      }
      if (index === 2) {
        this.arr = this.arr2.filter((item) => {
          return item.flag === true;
        });
      }
    },

    // 进度条
    getprogress() {
      this.$api
        .getprogress()
        .then((res) => {
          // console.log(res.data);
          this.strip = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    },
  },
  mounted() {
    this.getorderData();
    this.getprogress();
    this.flag = 0;
    this.arr2.map((item) => {
      this.$set(item, "flag", false);
    });
    this.arr[6].flag = true;
    this.arr[7].flag = true;
  },
  watch: {},
  computed: {
    clickbox() {
      let arr = this.arr2.filter((item) => {
        this.arr2[6].flag = true;
        this.arr2[7].flag = true;
        return item.flag === false;
      });

      return arr.length;
    },
  },
};
</script>

<style scoped lang='scss'>
// 订单
.text {
  font-size: 14px;
  color: #9daeb2;

  .text1 {
    position: relative;
    left: 15%;
  }
  .text2 {
    position: relative;
    left: 15%;
  }
  .text3 {
    position: relative;
    right: 5%;
  }
}

.borders {
  border-bottom: 1px solid #c8c8c8;
  width: 100%;
}
.textItem {
  font-size: 12px;
  div {
    margin: 17px;
    color: #61656d;
  }
}
.box-cards {
  flex: 2;
}
.box-card {
  flex: 1;
}
.pending {
  border: 1px solid #fbc4c4;
  background: #fef0f0;
  width: 70px;
  height: 26px;
  border-radius: 6%;
  text-align: center;
}
.success {
  border: 1px solid #c2e7b0;
  background: #f0f9eb;
  width: 70px;
  height: 26px;
  border-radius: 6%;
  text-align: center;
}

// 事项
.iptName {
  margin: 12px;
  font-size: 12px;

  input {
    position: relative;
    top: 3px;
  }
}
.textsp {
  cursor: pointer;
  float: left;
  font-size: 12px;
  margin: 10px;
  position: relative;
  left: 12px;
}
.textTive {
  border: 1px solid #ccc;
}
.numbers {
  position: relative;
  top: 10px;
  font-size: 12px;
}
.active {
  cursor: pointer;
  float: right;
  font-size: 18px;
  color: red;
  height: 20px;
}

//进度条
.strip {
  margin: 12px;
}
</style>