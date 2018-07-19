<template>
  <div>
    <div class="codeArea">
      <a @click="showPicker">调用打开</a>
      <pre>
这块还没想好怎么封装，就直接调用mint的吧，详见源码
</pre>
      <p>通过change返回的值：{{resJson}}</p>
      <p>通过绑定返回的值：{{resValue}}</p>
    </div>

    <mt-datetime-picker v-model="resValue" ref="datePicker" :startDate="startDate" :endDate="endDate" @confirm="confrimPicker" type="date" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日">
    </mt-datetime-picker>

  </div>
</template>

<script>
// import Cain from '@cain/'
import CainPicker from '@cain/components/Picker/CainPicker'
export default {
  components: {
    CainPicker
  },
  data () {
    return {
      resJson: '',
      resValue: new Date('1990/01/01'),
      startDate: new Date('1950/01/01'),
      endDate: new Date()
    }
  },
  mounted () {},
  methods: {
    confrimPicker (val) {
      console.log(val)
      this.resJson = val
    },
    showPicker () {
      this.$refs.datePicker.open()
    }
  }
}
</script>

<style  scoped lang="scss">
p {
  font-size: $fs26;
}
.codeArea {
  margin-bottom: 10px;
  padding: 10px;
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
