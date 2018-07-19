import { Dialog } from 'vant'
const CainMessage = {
  // 显示Toast
  confirm (message, succesTxt = '确认', cancelTxt = '再看看') {
    return new Promise((resolve, reject) => {
      Dialog.confirm({
        message,
        confirmButtonText: succesTxt,
        cancelButtonText: cancelTxt
      }).then(action => {
        resolve()
      }).catch(() => {
        reject(new Error('cancel'))
      })
    })
  },
  alert (message, succesTxt = '确认') {
    return new Promise((resolve, reject) => {
      Dialog.alert({
        message,
        confirmButtonText: succesTxt
      }).then(action => {
        resolve()
      }).catch(() => {
        reject(new Error('cancel'))
      })
    })
  }
}
export default CainMessage
