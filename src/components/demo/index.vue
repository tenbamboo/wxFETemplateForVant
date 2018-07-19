<template>
  <div>
    <a @click="gotoPage('/demo/message')">提示消息</a>
    <a @click="gotoPage('/demo/toast')">Toast消息</a>
    <a @click="gotoPage('/demo/loading')">loading</a>
    <!-- <a @click="gotoPage('/demo/singlePicker')">单选Picker</a>
    <a @click="gotoPage('/demo/muiltPicker')">多选Picker</a>
    <a @click="gotoPage('/demo/datePicker')">日期Picker</a> -->
    <a @click="gotoPage('/demo/callPhone')">打电话</a>
    <a>Cain API(待补全 )</a>

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
    gotoPage (url) {
      this.$router.push(url)
    }
  }
}
</script>

<style  scoped lang="scss">
a {
  margin: 10px;
  display: block;
  background-color: $mainColor;
  color: #fff;
  font-size: $fs16;
  padding: 10px;
  border-radius: 5px;
  line-height: $fs32;
  text-align: center;
}
</style>
