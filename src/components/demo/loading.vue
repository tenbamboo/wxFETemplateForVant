<template>
  <div>
    <div class="codeArea">
      <a @click="showLoading">显示loading</a>
      <pre>this.$cain.loading.show()</pre>
    </div>
    <div class="codeArea">
      <a @click="showLoadingCustom">显示loading,自定义文字</a>
      <pre>this.$cain.loading.show('自定义')</pre>
    </div>

     <div class="codeArea">
      <a @click="showLoadingCustom">关闭loading</a>
      <pre>this.$cain.loading.close()</pre>
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
    showLoading () {
      this.$cain.loading.show()
      setTimeout(() => {
        this.$cain.loading.close()
      }, 2000)
    },
    showLoadingCustom () {
      this.$cain.loading.show('自定义')
      setTimeout(() => {
        this.$cain.loading.close()
      }, 2000)
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
    user-select:text;
    margin: 10px 0;
    border-radius: 6px;
    background-color: #dedede;
    border: 1px solid #b1b1b1;
    padding: 10px;
    font-size: $fs16;
  }
}
</style>
