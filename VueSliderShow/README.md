# vueslidershow

> a slider implement by vuejs


[Demo](https://github.com/HongqingCao/My-Code/tree/master/VueSliderShow)



## Install
``` bash
npm i vueslideshow
```


## Usage

#### Use in vue2.x:

```html
<template>
   <div>
     <slider-show :slides="slides" :inv="invTime"></slider-show>
   </div>
</template>

<script>
import sliderShow from './sliderShow'
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


## License

[MIT](LICENSE)

