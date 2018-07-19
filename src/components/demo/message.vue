<template>
  <div>
    <div class="codeArea">
      <a @click="myAlert">调用Alert(默认按钮)</a>
      <pre>this.$cain.message.alert('我是内容')</pre>
    </div>
    <div class="codeArea">
      <a @click="myAlertByBtn">调用Alert,自定义按钮</a>
      <pre>this.$cain.message.alert('我是内容','自定义按钮')</pre>
    </div>
    <div class="codeArea">
      <a @click="myAlertByAwait">await 调用Alert</a>
      <pre>await this.$cain.message.alert('我是内容')</pre>
    </div>

    <div class="codeArea">
      <a @click="myConfirm">调用confirm(默认按钮)</a>
      <pre>this.$cain.message.confirm('我是内容')</pre>
    </div>

    <div class="codeArea">
      <a @click="myConfirm">调用confirm,自定义成功</a>
      <pre>this.$cain.message.alert('我是内容', '自定义成功')</pre>
    </div>
    <div class="codeArea">
      <a @click="myConfirmByBtn1">调用confirm,自定义成功，自定义取消</a>
      <pre>this.$cain.message.alert('我是内容', '自定义成功', '自定义取消')</pre>
    </div>

    <div class="codeArea">
      <a @click="myConfirmByBtn2">调用confirm,自定义成功，自定义取消</a>
      <pre>this.$cain.message.alert('我是内容', '自定义成功', '自定义取消')</pre>
    </div>
      <div class="codeArea">
      <a @click="myConfirmByAwait">await 调用confirm</a>
      <pre>await this.$cain.message.confirm('我是内容')</pre>
    </div>

  </div>
</template>

<script>
// import Cain from '@cain/'
export default {
  components: {},

  data () {
    return {}
  },
  mounted () {},
  methods: {
    myAlert () {
      this.$cain.message.alert('我是内容')
    },
    myAlertByBtn () {
      this.$cain.message.alert('我是内容', '自定义按钮')
    },
    async myAlertByAwait () {
      await this.$cain.message.alert('我是内容')
      await this.$cain.message.alert('我是内容2')
    },
    myConfirm () {
      this.$cain.message.confirm('我是内容')
    },
    myConfirmByBtn1 () {
      this.$cain.message.confirm('我是内容', '自定义成功')
    },
    myConfirmByBtn2 () {
      this.$cain.message.confirm('我是内容', '自定义成功', '自定义取消')
    },
    async myConfirmByAwait () {
      try {
        await this.$cain.message.confirm('我是内容')
        this.$cain.message.alert('点击确认')
      } catch (error) {
        this.$cain.message.alert('点击取消')
      }
    }
  }
}
</script>

<style  scoped lang="scss">
.codeArea {
  margin-bottom: 10px;
  padding: 10px;
  a {
    display: block;
    background-color: $mainColor;
    color: #fff;
    font-size: $fs16;
    padding: 10px;
    border-radius: 5px;
    line-height: $fs32;
    text-align: center;
  }
  pre {
    white-space: pre-wrap;
    user-select: text;
    margin: 10px 0;
    border-radius: 6px;
    background-color: #dedede;
    border: 1px solid #b1b1b1;
    padding: 10px;
    font-size: $fs16;
  }
}
</style>
