import { Toast } from 'vant'
const CainLoading = {
  // 显示Toast
  show (message = '加载中...') {
    Toast.loading({
      mask: true,
      message
    })
  },
  close () {
    Toast.clear()
  }
}
export default CainLoading
