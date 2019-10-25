<template>
  <div class="slideshow-warpper">
    <div class="img-warpper">
      <div class="border-img">
        <img :src="borderImgList[nowIndex].src" ref="isBorderImg" />
      </div>
      <div class="head-img">
        <img :src="headImg" ref="isHeadImg" />
      </div>
    </div>
    <div class="btn" @click="goto(prevIndex)"></div>
    <div class="btn next" @click="goto(prevIndex)"></div>
  </div>
</template>

<script>
export default {
  name: "slideshow",
  props: ["borderImgList", "headImg"],
  data() {
    return {
      nowIndex: 0,
      selectBorderImg: this.borderImgList[0].src
    };
  },
  methods: {
    goto(index) {
      this.nowIndex = index;
      this.selectBorderImg = this.borderImgList[index].src;
    }
  },
  computed: {
    prevIndex() {
      if (this.nowIndex === 0) {
        return this.borderImgList.length - 1;
      } else {
        return this.nowIndex - 1;
      }
    },
    nextIndex() {
      if (this.nowIndex === this.borderImgList.length - 1) {
        return 0;
      } else {
        return this.nowIndex + 1;
      }
    }
  }
};
</script>

<style lang="scss">
.slideshow-warpper {
  padding: 40px;
  position: relative;
  .img-warpper {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    position: relative;
    .border-img {
      position: absolute;
      z-index: 3;
    }
    .head-img {
      position: absolute;
    }
  }
  .btn {
    position: absolute;
    top: calc(50% - 25px);
    left: 40px;
    width: 50px;
    height: 50px;
    background: url(../assets/btn.png);
    transform: rotate(180deg);
    background-size: cover;
    &.next {
      left: auto;
      right: 40px;
      transform: rotate(0deg);
    }
  }
}
</style>
