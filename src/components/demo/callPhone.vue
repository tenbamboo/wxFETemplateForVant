<template>
  <div>
    <div class="codeArea">
      <a @click="callPhone">调用打电话（手机可用）</a>
      <pre> this.$cain.callPhone.number('13333333333')</pre>
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
    callPhone () {
      this.$cain.callPhone.number('13333333333')
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
