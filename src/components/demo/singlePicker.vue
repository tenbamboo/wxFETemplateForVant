<template>
  <div>
    <div class="codeArea">
      <a @click="showPicker">调用打开</a>
      <a @click="showPickerByDefault">默认选中某个值打开</a>
      <pre>
直接看源码吧。。。
</pre>
      <p>通过change返回的值：{{resJson}}</p>
      <p>通过绑定返回的值：{{resValue}}</p>
    </div>
    <cain-picker ref="picker" @confrim='confrimPicker' v-model="resValue"></cain-picker>
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
      resValue: ''
    }
  },
  mounted () {},
  methods: {
    confrimPicker (val) {
      console.log(val)
      this.resJson = val
    },
    showPicker () {
      let list = [
        {
          value: '1',
          label: '第一个'
        },
        {
          value: '2',
          label: '第二个'
        },
        {
          value: '3',
          label: '第三个'
        }
      ]
      this.$refs.picker.show(list, 'label')
    },
    showPickerByDefault () {
      let list = [
        {
          value: '1',
          label: '第一个'
        },
        {
          value: '2',
          label: '第二个'
        },
        {
          value: '3',
          label: '第三个'
        }
      ]
      this.$refs.picker.show(list, 'label', list[1])
    }
  }
}
</script>

<style  scoped lang="scss">
p{
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
