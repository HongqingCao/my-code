# vueslidershow

> a slider implement by vuejs
>一个vue的响应式自适应轮播图组件

[示例源码地址](https://github.com/HongqingCao/My-Code/tree/master/VueSliderShow)

###### ![实例效果](https://github.com/HongqingCao/My-Code/blob/master/VueSliderShow/VueSlider.gif)

## Install
``` bash
npm i vueslideshow
```


## 应用案例

#### in vue2.x:

```html
<template>
   <div>
     <slider-show :slides="slides" :inv="invTime"></slider-show>
   </div>
</template>

<script>
import sliderShow from 'vueslidershow'
export default {
  components: {
      sliderShow
  },
  data () {
    return {
      invTime: 2000,
      slides: [
        {
          src: require('../assets/1.jpg'),
          title: '测试测试测试1',
          href: 'detail/analysis'
       }
    ]
   }
 }
}
```
<br>

### 参数说明：

 1.invTime,控制轮播速度
 
 2.slides,具体的轮播数据数组形式，包含图片，文字，链接三个参数
 
 3.由于是响应式自适应所以推的图片必须高度一致，更友好

## License

[MIT](LICENSE)

