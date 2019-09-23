# CSS知识点

## 雪碧图
css雪碧图(sprite)是一种网页图片应用处理方式，它允许将一个页面涉及到的所有零星图片都包含到一张大图中。使用雪碧图的处理方式可以实现两个优点：

  1、减少Http请求数量（因为浏览器同一时间能够加载的资源数是一定的，IE 8是6个，Chrome是6个，Firefox是8），提高加载性能
  2、有些情况下可以减少图片的大小（字节总和）
	
缺点：  
  1、高清屏会失真  
  2、雪碧图不方便变化，提高了网页开发和维护成本  
    
## 字体图标 
字体图标就是利用字体来显示网页中的的纯色图标，或者是特殊字体   

原理：  

计算机里面每个字符都有一个unicode编码,比如「我」的unicode是\u6211（16进制），而字体文件的作用是规定某个字符应该用什么形状来显示，利用@font-face原理载入图标字体库，然后调用图标  

优点：   

  1、灵活性：可以任意地缩放，改变颜色，产生阴影，透明效果，可以快速转化形态（：hover）  
  2、轻量性：本身体积更小，但携带的信息并没有削减。一旦图标字体加载了，图标就会马上渲染出来，不需要下载一个图像。可以减少HTTP请求，还可以配合HTML5离线存储做性能优化。  
  3、兼容性：网页字体支持所有现代浏览器，包括IE低版本。  
	
缺点： 
 
  1、图标字体只能被渲染成单色或者CSS3的渐变色，由于此限制使得它不能广泛使用。
  2、制作用于生成icon font的svg比较麻烦  
  
## base64 
Base64是网络上最常见的用于传输8Bit字节代码的编码方式之一，可用于在HTTP环境下传递较长的标识信息  

优点：
  
  1、减少了HTTP请求
  2、某些文件可以避免跨域的问题
  3、没有图片更新要重新上传，还要清理缓存的问题
	
缺点： 
 
  1、用于小图，体积约为原图的4/3
  2、兼容性：IE6/IE7浏览器是不支持
  
## 伪类与伪元素  

  1、两者都不存在于HTML文档树中，伪类与伪元素都是用于向选择器加特殊效果  
  2、伪类与伪元素的本质区别就是是否抽象创造了新元素    
  3、伪类只要不是互斥可以叠加使用  
  4、伪元素在一个选择器中只能出现一次，并且只能出现在末尾  
  5、伪类与伪元素优先级分别与类、标签优先级相同  
  6、伪类单冒号，伪元素双冒号  
  

## 水平居中
1、inline 元素用text-align: center;即可，如下：

  ```bash
.container {
   text-align: center;
}
  ```

2、固定宽度块状元素，可以设置左右margin值为auto来使用，如下：

  ```bash
.item {
    width: 1000px;
    margin: auto; 
}
  ```
3、不定宽度块状元素

  1、在元素外加入 table 标签（完整的，包括 table、tbody、tr、td），该元素写在 td 内，然后设置 margin 的值为 auto  
  2、给该元素设置 displa:inine 方法   
  3、父元素设置 position:relative 和 left:50%，子元素设置 position:relative 和 left:50%  
	
## 垂直居中
1、inline 元素可设置line-height的值等于height值，如单行文字垂直居中：

  ```bash
.css文件
.outerBox{
  width:200px;
  height:100px;
  border: 1px solid #000;
  text-align:center; /* 水平居中 */
  line-height: 100px; /* line-height=height */
}
.html文件
<div class="outerBox">
  center text 
</div>
  ```
2、vertical-align实现文本的垂直居中  
可以使用vertical-align实现垂直居中，不过vertical-align仅适用于内联元素和table-cell元素，因此之前需要转化  

  ```bash
.outerBox{
  width:200px;
  height:100px;
  border: 1px solid #000;
  text-align:center; /* 水平居中 */
  display:table-cell; /*转化成table-cell元素*/
  vertical-align:middle;  
  /*垂直居中对齐，vertical-align适用于内联及table-cell元素*/
}
  ```
3、绝对定位元素，可结合left和margin实现，但是必须知道尺寸
  ```bash
.container {
    position: relative;
    height: 200px;
}
.item {
    width: 80px;
    height: 40px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -20px;
    margin-left: -40px;
}...

  ```
4、绝对定位可结合transform实现居中。
优点：不需要提前知道尺寸  
缺点：兼容性不好  
  ```bash
.container {
    position: relative;
    height: 200px;
}
.item {
    width: 80px;
    height: 40px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: blue;
}
  ```
5、绝对定位结合margin: auto，不需要提前知道尺寸，兼容性好


  ```bash
.container {
    position: relative;
    height: 300px;
}
.item {
    width: 100px;
    height: 50px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
  ```


## 适配移动端页面meta viewport

  ```bash
  <meta name="viewport" content="width=device-width">
  ```
  meta viewport 中有6个通用属性：  
  
  1、width 设置layout viewport的宽度 正整数或字符串 'width-device'  
  2、initial-scale 设置页面的初始缩放值，数字或小数  
  3、minimum-scale 允许用户的最小缩放值 数字或小数  
  4、maximum-scale 允许用户的最大缩放值 数字或小数  
  5、user-scaleabel 是否允许用户进行缩放 'no'或‘yes’ 还有2个需要特别注意的两个属性  
  6、target-densitydpi 在andriod 4.0一下的设备中，不支持设置viewport的width，android 自带浏览器支持设置 target-densitydpi来达到目的
  
### meta viewport

rem/viewport/media  query  
在Bootstrap的栅格系统中有：

  ```bash
  /* 超小屏幕（手机，小于 768px） */
/* 没有任何媒体查询相关的代码，因为这在 Bootstrap 中是默认的（还记得 Bootstrap 是移动设备优先的吗？） */
.col-xs-

/* 小屏幕（平板，大于等于 768px） */
@media (min-width: @screen-sm-min) { ... }
.col-sm-

/* 中等屏幕（桌面显示器，大于等于 992px） */
@media (min-width: @screen-md-min) { ... }
.col-md-

/* 大屏幕（大桌面显示器，大于等于 1200px） */
@media (min-width: @screen-lg-min) { ... }
.col-lg-
  ```
  
## 效果属性（box-shadow、border-radius、background、clip-path）
### box-shadow

  1、营造层次感（立体感）  
  2、充当没有宽度的边框    
  3、 特殊效果  
	
### background
  1、纹理/图案  
  2、渐变    
  3、 雪碧图动画  
  4、背景图尺寸适应  
    
### clip-path
  1、对容器进行裁剪  
  2、常见几何图形   
  3、自定义路径  


##  Canvas和svg
### Canvas 
  1、Canvas是基于位图的，它不能够改变大小，只能缩放显示，放大或缩小时图形质量会有所损失  
  2、 依赖分辨率，逐像素进行渲染的  
  3、 Canvas 通过 JavaScript 来绘制2D图形（动态生成）  
  4、 不支持事件处理器。Canvas输出的是一整幅画布，能够以 .png 或 .jpg 格式保存结果图像  
  5、 适合像素处理，动态渲染和大数据量绘制，最适合图像密集型的游戏（频繁重绘对象）  
  6、 如果图形位置发生变化，整个场景需要重新绘制，包括任何或许已被图形覆盖的对象  
 
### svg
  1、SVG 可缩放矢量图形（Scalable Vector Graphics），是一种使用可扩展标记语言（XML）描述2D图形的语言  
  2、不依赖分辨率,逐元素（DOM元素）进行渲染,能够很好的处理图形大小的改变,	放大或缩小时图形质量不会有所损失  
  3、 基于XML，用文本格式的描述性语言来描述图像内容  
  4、 支持事件处理器。SVG绘制出的每个图形元素都是独立的DOM节点，能够方便的绑定事件  
  5、 适合静态图片展示，高保真文档查看和打印的应用场景，不适合游戏应用）  
  6、 如果对象属性发生变化，浏览器能自动重现图形。也就是说，SVG绘图很容易编辑，只需要增加或移除相应的元素即可  
 
## 浏览器内核 
### Trident内核(IE内核)
代表作品是IE，因IE捆绑在Windows中，所以占有极高的份额，又称为IE内核或MSHTML，此内核只能用于Windows平台，且不是开源的。
代表作品还有腾讯、Maxthon（遨游）、360浏览器等。但由于市场份额比较大，曾经出现脱离了W3C标准的时候，同时IE版本比较多，
存在很多的兼容性问题
### Gecko(Firefox内核)
代表作品是Firefox，即火狐浏览器。因火狐是最多的用户，故常被称为firefox内核它是开源的，最大优势是跨平台，在Microsoft Windows、Linux、MacOs X等主   要操作系统中使用
### Webkit内核(Safari内核,Chrome内核原型,开源)
它是苹果公司自己的内核，也是苹果的Safari浏览器使用的内核
### Presto内核
表作品是Opera，Presto是由Opera Software开发的浏览器排版引擎，它是世界公认最快的渲染速度的引擎。在13年之后，Opera宣布加入谷歌阵营，弃用了    Presto
### Blink内核
由Google和Opera Software开发的浏览器排版引擎，2013年4月发布。现在Chrome内核是Blink。谷歌还开发了自己的JS引擎，V8，使JS运行速度极大地提高了


## css动画

#### 动画类型
    1、transition补间动画
    2、keyframe关键帧动画
    3、animation逐帧动画
#### 补间动画
    1、位置-平移（left/right/margin/transform）
    2、方位-旋转（transform）
    3、大小-缩放（transform）
	4、透明度（opacity）
	5、其他线性变换（transform）
#### keyframe关键帧动画
  ```js
@keyframes testAnimation
{
    0%   {background: red; left:0; top:0;}
    25%  {background: yellow; left:200px; top:0;}
    50%  {background: blue; left:200px; top:200px;}
    75%  {background: green; left:0; top:200px;}
    100% {background: red; left:0; top:0;}
}
div {
    width: 100px;
    height: 50px;
    position: absolute;

    animation-name: myfirst;
    animation-duration: 5s;
}
  ```
 #### animation逐帧动画
  ```bash 
.fadeIn{
  animation: fadeIn .5s ease 1s both;
}
@keyframes fadeIn{
  from{
    opacity:0;
  }
  to{
    opacity:1
  }
}
 ```
 
