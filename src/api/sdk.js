import wx from "weixin-js-sdk"; //微信sdk依赖
const jsApiList = ["chooseImage", "uploadImage", "saveImageToPhotosAlbum"];

export function comConfig() {
  wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: "", // 必填，公众号的唯一标识
    timestamp: "", // 必填，生成签名的时间戳
    nonceStr: "", // 必填，生成签名的随机串
    signature: "", // 必填，签名
    jsApiList: jsApiList // 必填，需要使用的JS接口列表
  });
}
// 选择上传图片
export function uploadImage() {
  wx.chooseImage({
    count: 1, // 默认9
    sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
    success: function(res) {
      var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
      wx.uploadImage({
        count: 1,
        localId: localIds, // 需要上传的图片的本地ID，由chooseImage接口获得
        isShowProgressTips: 1, // 默认为1，显示进度提示
        success: function(res) {
          return res.serverId; // 返回图片的服务器端ID
        }
      });
    }
  });
}
