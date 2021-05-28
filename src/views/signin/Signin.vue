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
              @keyup.enter.native="clickin"
            ></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="pass">
            <el-input
              type="password"
              v-model.trim="ruleForm.pass"
              autocomplete="off"
              show-password
              id="pas"
              @keyup.enter.native="clickin"
            ></el-input>
          </el-form-item>

          <el-form-item prop="code">
            <div class="dis-flex" style="margin-bottom: -10px">
              <el-input
                type="password"
                v-model.trim="ruleForm.code"
                autocomplete="off"
                id="codes"
                @keyup.enter.native="clickin"
              ></el-input>
              <div
                v-html="vscode"
                class="pointer"
                @click="vscodeClick"
                style="margin-top: -10px"
              ></div>
            </div>
          </el-form-item>

          <el-form-item>
            <div class="dis-flex j-between">
              <el-button @click="clickin">立即登录</el-button>
              <el-button @click="clickup">立即注册</el-button>
            </div>
          </el-form-item>
        </el-form>
      </el-card>
      <div style="height: 170px"></div>
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
        code: "",
      },
      rules: {
        user: [
          {
            required: true,
            message: "用户名不能为空！",
            trigger: "blur",
          },
        ],
        pass: [
          {
            required: true,
            message: "密码不能为空！",
            trigger: "blur",
          },
        ],
        code: [
          {
            required: true,
            message: "验证码不能为空！",
            trigger: "blur",
          },
        ],
      },
      flag: true,
      vscode: "",
    };
  },
  methods: {
    // 验证码
    getCode() {
      this.$api
        .getCode()
        .then((res) => {
          // console.log(res);
          this.vscode = res;
        })
        .catch((err) => {
          // console.log(err);
        });
    },
    vscodeClick() {
      this.getCode();
    },

    // 登录
    clickin() {
      if (
        this.ruleForm.user === "" &&
        this.ruleForm.pass === "" &&
        this.ruleForm.code === ""
      ) {
        alert("用户名或密码、验证码都不能为空！");
      }

      this.$api
        .postSignin({
          username: this.ruleForm.user,
          password: this.ruleForm.pass,
          code: this.ruleForm.code,
        })

        .then((res) => {
          if (res.code === 200) {
            localStorage.setItem("times", res.data[0].date);
            localStorage.setItem("username", this.ruleForm.user);
            alert(res.message);
            this.$router.push("/");
          }
          if (res.code === 500) {
            // console.log(res);
            alert(res.message + "或密码有误，请仔细检查！");
          }
          if (res.code === 1) {
            // console.log(res);
            alert(res.message);
            this.ruleForm.code = "";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 注册
    clickup() {
      this.$router.push("/Signup");
    },
  },
  mounted() {
    this.getCode();
  },
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
.vscode {
  text-align: center;
}
</style>