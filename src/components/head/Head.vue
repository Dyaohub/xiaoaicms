<template>
  <div>
    <div class="heads">
      <div class="texts">
        <div class="text1">欢迎{{ username }}来到小爱后台管理系统</div>
        <div class="text2 wids">
          {{ hello }}，亲爱的{{ username }}&nbsp;上次登录时间：{{ times }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "Head",
  props: {},
  components: {},
  data() {
    return {
      username: "",
      times: "",
      hello: "",
    };
  },
  methods: {},
  mounted() {
    this.username = localStorage.getItem("username");
    this.times = localStorage.getItem("times");
    this.times = dayjs(this.times).format("YYYY年MM月DD日HH时mm分ss秒");
    let hh = dayjs().hour();
    // console.log(hh);
    if (hh > 5 && hh <= 11) {
      this.hello = "早上好";
    }
    if (hh > 11 && hh <= 13) {
      this.hello = "中午好";
    }
    if (hh > 13 && hh <= 17) {
      this.hello = "下午好";
    }
    if (hh > 17 && hh <= 23) {
      this.hello = "晚上好";
    } else {
      this.hello = "该睡觉了";
    }
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
//头部欢迎栏
.heads {
  background: #2e5e85;
  width: 100%;
  height: 100%;
}

.texts {
  display: flex;
  justify-content: space-between;
  color: #dae0e7;
  position: relative;
  top: 1px;
  margin: 0 5px;
}

@media screen and (min-width: 300px) {
  .texts {
    display: flex;
    flex-wrap: wrap;

    div {
      font-size: 12px;
      width: 29%;
    }
  }
}
</style>