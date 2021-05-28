<template>
  <div>
    <div id="bgImg">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="ml-100px Text">欢迎来到小爱后台管理系统</span>
        </div>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm Items"
        >
          <el-form-item label="用户名" prop="user">
            <el-input
              type="userName"
              v-model.trim="ruleForm.user"
              autocomplete="off"
              id="names"
              @keyup.enter.native="clickup"
            ></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="pass">
            <el-input
              type="password"
              v-model.trim="ruleForm.pass"
              autocomplete="off"
              show-password
              id="pas"
              @keyup.enter.native="clickup"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <div class="dis-flex j-between">
              <el-button @click="clickup">立即注册</el-button>
              <el-button @click="clickin">立即登录</el-button>
            </div>
          </el-form-item>
        </el-form>
      </el-card>
      <div style="height: 240px"></div>
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
      ruleForm: {
        user: "",
        pass: "",
      },
      rules: {
        user: [
          {
            required: true,
            message: "用户名不能为空！",
            trigger: "blur",
          },
          { min: 2, max: 6, message: "用户名在2-6之间", trigger: "blur" },
        ],
        pass: [
          {
            required: true,
            message: "密码不能为空！",
            trigger: "blur",
          },
          { min: 6, max: 15, message: "密码应在6-15之间", trigger: "blur" },
        ],
      },
      flag: true,
    };
  },
  methods: {
    // 注册
    clickup() {
      if (this.ruleForm.user === "" && this.ruleForm.pass === "") {
        alert("用户名或密码都不能为空！");
      }

      let names = document.getElementById("names").value;
      // console.log(wo);

      //用户名正则
      let users = /^[a-z][\w-]{1,5}$/i;
      let wlo = users.test(names);
      // console.log(wlo)

      if (wlo === false) {
        alert(
          "用户名开头必须是英文字母并且在2-6之间，后面可以带有横杠、下划线和数字"
        );
        this.ruleForm.user = "";
        this.ruleForm.pass = "";
      }

      //密码正则
      let pas = document.getElementById("pas").value;
      // console.log(pas,999)
      let pus = /^[a-z0-9]{6,15}$/i;

      let lo = pus.test(pas);
      // console.log(lo, 999);

      if (lo === false) {
        // console.log(lo, 1);
        alert("密码只能设置为英文字母或数字并且在6-15之间！");
        this.ruleForm.user = "";
        this.ruleForm.pass = "";
      }

      this.$api
        .postSignup({
          username: this.ruleForm.user,
          password: this.ruleForm.pass,
        })
        .then((res) => {
          if (res.code === 200) {
            // console.log(res);
            alert(res.message);
            this.$router.push("/");
          }
          if (res.code === 1) {
            // console.log(res);
            alert(res.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 登录
    clickin() {
      this.$router.push("/Signin");
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
// 背景图
#bgImg {
  background: url("../../assets/img/xiaoai.jpg");
  width: 100%;
  position: fixed;
  background-size: 100% 100%;
  margin-top: 18px;
}

// 卡片
.box-card {
  width: 363px;
  height: auto;
  margin: 10% auto;
}
.Text {
  margin: 20%;
}
.Items {
  margin-left: -10%;
}
</style>