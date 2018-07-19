<template>
  <div>
    <div class="codeArea">
      <a @click="success">成功Toast</a>
      <pre>this.$cain.toast.success('成功Toast')</pre>
    </div>
    <!-- <div class="codeArea">
      <a @click="warn">警告Toast</a>
      <pre>this.$cain.toast.warn('警告Toast')</pre>
    </div> -->
    <div class="codeArea">
      <a @click="error">错误Toast</a>
      <pre>this.$cain.toast.error('错误Toast')</pre>
    </div>

    <!-- <div class="codeArea">
      <a @click="custom">自定义IconToast</a>
      <pre>this.$cain.toast.toast('自定义Toast', 'fa fa-bolt')</pre>
    </div> -->

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
    success () {
      this.$cain.toast.success('成功Toast')
    },
    // warn () {
    //   this.$cain.toast.warn('警告Toast')
    // },
    error () {
      this.$cain.toast.error('错误Toast')
    }
    // custom () {
    //   this.$cain.toast.toast('自定义Toast', 'fa fa-bolt')
    // }
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
