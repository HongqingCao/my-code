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
        },
        {
          src: require('../assets/2.jpg'),
          title: '测试测试测试2',
          href: 'detail/count'
        },
        {
          src: require('../assets/1.jpg'),
          title: '测试测试测试1',
          href: 'detail/analysis'
        },
        {
          src: require('../assets/2.jpg'),
          title: '测试测试测试2',
          href: 'detail/count'
        },
        {
          src: require('../assets/1.jpg'),
          title: '测试测试测试1',
          href: 'detail/analysis'
        },
        {
          src: require('../assets/2.jpg'),
          title: '测试测试测试2',
          href: 'detail/count'
        }
      ],
    }
  },
  created: function () {
	    this.$http.get('api/slidesList')
	    .then((res) => {
	      this.slides = res.data
	    }, (err) => {
	      console.log(err)
	    })
  }
}
</script>

<style scoped>

</style>
