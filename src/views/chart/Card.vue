<template>
  <div>
    <div>
      <div class="dis-flex felxwap">
        <el-card class="Card" shadow="always">
          <i class="iconfont icon-guanliyuan admin"></i>
          <div>
            <p>New visits</p>
            <b
              ><countTo
                :startVal="0"
                :endVal="HomeData.visits"
                :duration="3000"
              ></countTo
            ></b>
          </div>
        </el-card>

        <el-card class="Card" shadow="always">
          <i class="iconfont icon-xiaoxi news"></i>
          <div>
            <p>Messages</p>
            <b
              ><countTo
                :startVal="0"
                :endVal="HomeData.messages"
                :duration="3000"
              ></countTo
            ></b>
          </div>
        </el-card>

        <el-card class="Card" shadow="always">
          <i class="iconfont icon-qian4 money"></i>
          <div>
            <p>Purchases</p>
            <b
              ><countTo
                :startVal="0"
                :endVal="HomeData.purchases"
                :duration="3000"
              ></countTo
            ></b>
          </div>
        </el-card>

        <el-card class="Card" shadow="always">
          <i class="iconfont icon-gouwuche shop"></i>
          <div class="posdiv">
            <p>Shopping</p>
            <b
              ><countTo
                :startVal="0"
                :endVal="HomeData.shopping"
                :duration="3000"
              ></countTo
            ></b>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from "vue-count-to";
export default {
  name: "",
  props: {},
  components: { countTo },
  data() {
    return {
      HomeData: "",
    };
  },
  methods: {
    getHomeData() {
      this.$api
        .getHomeData()
        .then((res) => {
          this.HomeData = res.data;
          // console.log(res)
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getHomeData();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
//卡片样式
.Card {
  position: relative;
  top: 6px;
  flex: 1;
  margin: 1px;
  div {
    float: right;
    p {
      color: #c1becc;
      margin-bottom: 10px;
    }
    b {
      font-size: 20px;
    }
  }
}
i {
  font-size: 50px;
}
.admin {
  color: #44c8c5;
}
.news {
  color: #3ba2f4;
  font-size: 60px;
}
.money {
  color: #f25771;
}
.shop {
  color: #febb87;
}
@media screen and (min-width: 300px) {
  .felxwap {
    display: flex;
    flex-wrap: wrap;

    i {
      position: relative;
      right: 18px;
    }
  }
  p {
    position: relative;
    left: 20px;
  }
  b {
    position: relative;
    left: 18px;
  }
}
</style>