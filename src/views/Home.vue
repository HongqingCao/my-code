<template>
  <div class="home">
    <div class="operation-header">
      <img
        src="http://mat1.gtimg.com/bbs/static/20190906-logo2.png"
        class="h-title"
      />
      <div class="h">领取你的国庆专属头像</div>
      <div class="hh">目前已经有<span>14000万</span>人参与活动</div>
    </div>
    <slideshow
      ref="slideshowChild"
      :borderImgList="borderImgList"
      :headImg="headImg"
    ></slideshow>
    <div class="btn-wapper">
      <div class="btn-com upload" @click="upload">上传图片</div>
      <div class="btn-com save" @click="save">保存头像</div>
    </div>
    <div class="canvas-warrpper" v-show="showCanvas">
      <div class="bg-box" @click="close"></div>
      <canvas id="myCanvas" class="canvas"></canvas>
    </div>
  </div>
</template>

<script>
// import wx from "weixin-js-sdk"; //微信sdk依赖
import { uploadImage } from "@/api/sdk";
import slideshow from "../components/slideshow";
export default {
  name: "home",
  components: {
    slideshow
  },
  data() {
    return {
      borderImgList: [
        { src: require("../assets/border1.png") },
        { src: require("../assets/border2.png") },
        { src: require("../assets/border3.png") }
      ],
      headImg: require("../assets/test.jpg"),
      showCanvas: false
    };
  },
  methods: {
    upload() {
      let data = uploadImage();
      console.log(data);
    },
    save() {
      let slideshowChild = this.$refs.slideshowChild.$refs;
      let canvas = document.getElementById("myCanvas");
      let ctx = canvas.getContext("2d");
      canvas.width = 150;
      canvas.height = 150;
      ctx.drawImage(slideshowChild.isHeadImg, 0, 0, 150, 150);
      ctx.drawImage(slideshowChild.isBorderImg, 0, 0, 150, 150);
      let urlSrc = canvas.toDataURL("img/png");
      this.showCanvas = true;
      console.log(urlSrc);
      //    wx.saveImageToPhotosAlbum({
      //      filePath: urlSrc
      //    });
    },
    close() {
      this.showCanvas = false;
    }
  }
};
</script>

<style lang="scss">
.home {
  position: relative;
  overflow-x: hidden;
  width: 100%;
  min-height: 100vh;
  max-width: 500px;
  margin: 0 auto;
  background-image: url(../assets/bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  .operation-header {
    width: 100%;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .h-title {
      margin-top: 4rem;
      width: 80%;
    }
    .h {
      color: #fffebb;
      font-size: 22px;
    }
    .hh {
      margin-top: 1.5rem;
      color: #fffcf7;
      font-size: medium;
      span {
        margin: 0 5px 0 5px;
        background-color: #ea4726;
        color: #ffd697;
        padding: 5px;
        border-radius: 15px;
      }
    }
  }
  .btn-wapper {
    padding: 40px;
    .btn-com {
      float: left;
      margin-left: 15px;
      height: 45px;
      width: calc(50% - 30px);
      border-radius: 20px;
      text-align: center;
      line-height: 45px;
      font-size: 20px;
      &.upload {
        background: #fff;
        color: #c45700;
      }
      &.save {
        background: #fed677;
        color: #c45700;
      }
    }
  }
  .canvas-warrpper {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;

    .bg-box {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 9999;
      background-color: rgba(0, 0, 0, 0.7);
    }
    .canvas {
      top: calc(50% - 75px);
      opacity: 1;
      position: relative;
      z-index: 99999;
      margin: 0 auto;
    }
    .span-title {
      opacity: 1;
      bottom: 0;
      position: relative;
      z-index: 99999;
      margin: 0 auto;
      color: #fff;
    }
  }
}
</style>
