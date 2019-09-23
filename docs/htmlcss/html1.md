# Html知识点


## 按默认分类

  1、块级元素`block`  
  2、行内`inline`  
  3、行内块元素 `inline-block`  



## 块级元素block

  1. 元素自己独占一行显示（块级元素有默认宽度)  
  2. 可以设置宽度和高度 
  3. 当两个块级元素发生嵌套关系的时候，子元素如果没有设置宽度，那么该子元素的宽度与父元素的宽度一致。
  4. 代表:  div , h1 , p , ul , li...  

## 行内元素inline

  1. 元素自己独占一行显示（块级元素有默认宽度)  
  2. 行内元素不能直接设置宽度和高度
  3. 元素的宽和高就是内容撑开的宽高 
  4. 代表：  span , a , strong , b , i , s , font... 
  
## 行内块元素 inline-block

  1. 所有元素都在一行上显示
  2. 可以设置宽度和高度
  3. 代表：  <img> , input....
  
## 语义化的意义

  1. 开发者更容易理解，减少差异化，方便团队开发和维护
  2. 机器更容易理解结果（搜索爬虫、方便其他设备解析（读屏幕软件、盲人设备、移动设备））
 
## 写页面结构应该注意的

  1. 尽可能少的使用没有语义的div和span元素
  2. 块级元素和内联元素的嵌套一定要符合web标准，比如内联元素就是不能嵌套块级元素
  
## HTML XHML HTML5的关系

  1. HTML属于SGML 
  2. XHML属于XML,是Html进行XML严格化的结果
  3. HTML5简单点理解成：h5≈ html+CSS 3+js+API，减少对外部插件的需求（比如 Flash），更优秀的错误处理，更多取代脚本的标记

## HTML5新特性

  1. 新的语义化元素：article 、footer 、header 、nav 、section 
  2. 表单增强，新的表单控件：calendar 、date 、time 、email 、url 、search 
  3. 新的API：音频(用于媒介回放的video和audio元素)、图形（绘图canvas元素）
  4. 新的API：离线，通过创建 cache manifest 文件，创建应用程序缓存
  5. 新的API：本地存储，localStorage-没有时间限制的数据存储，sessionStorage-session数据存储（关闭浏览器窗口数据删除）
  4. 新的API：实时通讯，设备能力 


## Doctype 

  1、document type definiton 文档类型定义是一系列的语法规则，用来定义xml和html的文件类型  
  2、浏览器用它来判断文档类型，决定使用何种协议辣子解析，以及切换浏览器模式

  
## 盒模型

  1. 盒模型的组成大家肯定都懂，由里向外content,padding,border,margin.  
  2.盒模型是有两种标准的，一个是标准模型，一个是IE模型
    
## 标准模型

在标准模型中，盒模型的宽高只是内容（content）的宽高  

## IE模型

盒模型的宽高是内容(content)+填充(padding)+边框(border)的总宽高  

## css如何设置两种模型

  1、标准模型 box-sizing:content-box; 
  2、IE模型 box-sizing:border-box;
  
## JS获取宽高如何获取盒模型对应的宽高
  1、dom.style.width/height  
	这种方式只能取到dom元素内联样式所设置的宽高，也就是说如果该节点的样式是在style标签中或外联的CSS文件中
	设置的话，通过这种方法是获取不到dom的宽高的  

  2、dom.currentStyle.width/height  
    这种方式获取的是在页面渲染完成后的结果，就是说不管是哪种方式设置的样式，都能获取到，只有IE浏览器支持该方式  

  3、window.getComputedStyle(dom).width/height   
	这种方式的原理和2是一样的，这个可以兼容更多的浏览器，通用性好一些  

  4、 dom.getBoundingClientRect().width/height  
	这种方式是根据元素在视窗中的绝对位置来获取宽高的  

  5、 dom.offsetWidth/offsetHeight  
  
## 边距重叠

边距重叠是指两个或多个盒子(可能相邻也可能嵌套)的相邻边界(其间没有任何非空内容、补白、边框)重合在一起而形成一个单一边界  

## BFC

块级格式化上下文 (Block Fromatting Context)是按照块级盒子布局 

## BFC的原理

  1、内部的box会在垂直方向，一个接一个的放置  
  2、每个元素的margin box的左边，与包含块border box的左边相接触（对于从做往右的格式化，否则相反）  
  3、box垂直方向的距离由margin决定，属于同一个bfc的两个相邻box的margin会发生重叠  
  4、bfc的区域不会与浮动区域的box重叠  
  5、bfc是一个页面上的独立的容器，外面的元素不会影响bfc里的元素，反过来，里面的也不会影响外面的  
  6、计算bfc高度的时候，浮动元素也会参与计算  
  
## 怎么创建bfc（边距重叠产生原因）

  1、float属性不为none（脱离文档流）  
  2、position为absolute或fixed  
  3、display为inline-block,table-cell,table-caption,flex,inine-flex  
  4、overflow不为visible  
  5、根元素的垂直margin不会被重叠  
    
## 防止外边距重叠解决方案
  1、外层元素padding代替  
  2、内层元素透明边框 border:1px solid transparent;  
  3、内层元素绝对定位 postion:absolute:  
  4、外层元素 overflow:hidden;  
  5、内层元素 加float:left;或display:inline-block;  
  6、内层元素padding:1px;  
  
## BFC应用场景
  1、自适应两栏布局
  2、清除内部浮动
  
## 浮动float误解和误用
 float 被设计出来的初衷是用于文字环绕效果，即一个图片一段文字，图片float:left之后，文字会环绕图片  
 但是，后来大家发现结合float + div可以实现之前通过table实现的网页布局，因此就被“误用”于网页布局了
 
## 为何 float 会导致父元素塌陷？
  1、float 的破坏性 —— float 破坏了父标签的原本结构，使得父标签出现了坍塌现象。    
  2、导致这一现象的最根本原因在于：被设置了 float 的元素会脱离文档流，我们的浮动是左右浮动，所以我们的块级元素都是左右排列。其根本原因在于 float 的设计初衷是解决文字环绕图片的问题    
  3、包裹性也是 float 的一个非常重要的特性，普通的 div 如果没有设置宽度，它会撑满整个屏幕，在之前的盒子模型那一节也讲到过。而如果给 div 增加float:left之后，它突然变得紧凑了，宽度发生了变化，把内容中的三个字包裹了——这就是包裹性。为 div 设置了 float 之后，其宽度会自动调整为包裹住内容宽度，而不是撑满整个父容器  清空格，对于高度不同的容器，float 排版出来的网页严丝合缝，

## 清除浮动（clear）

  1、额外添加标签，再最后一个浮动的盒子的后面，新添加一个标签。然后他可以清除浮动  
  2、`Overflow` 清除浮动，是浮动的大盒子（父级标签）再样式里面加: `overflow:hidden`，  常用的`ul` `li`，在`ul`里添加`overflow：hidden`  
  3、`After`伪类清除浮动  
  4、写一个通用的`clearfix`类，直接在需要清除浮动的地方加一个这个样式 ：`<div class="box clearfix">` 
  5、`After before`伪类清除浮动 是大部分大型网站常用的，比如新浪 淘宝 的清除浮动的效果  
```html
	.clearfix:before,.clearfix:after{  
		content:"";  
		display:table;  
		}  
		.clearfix:after{  
		clear:both;  
		}  
		.clearfix{ /*照顾ie6*/  
		zoom:1;  
		}  
		使用：  
		<div class="box clearfix"> 
		
```

## 定位position
position 用于网页元素的定位，可设置 `static/relative/absolute/fixed /inherit ` 

  1、static 默认  
  2、relative，会导致自身位置的相对变化，而不会影响其他元素的位置、大小  
  3、absolute 元素脱离了文档结构，导致父元素坍塌，元素具有“包裹性，元素会悬浮在页面上方，会遮挡住下方的页面内容，设置了 top、left 值时，   元素是相对于最近的定位上下文来定位的，而不是相对于浏览器定位。  
  4、fixed 元素脱离了文档结构，根据 window （或者 iframe）确定位置
  
## URL、src、href
  1、src 是指向物件的来源  
  2、href是指向需要连结的地方  
  3、url是通用的 "连结" 的专业代名词，在 HTML语法里几乎不会使用    
  4、url不是属性，src和href是属性，src用于替换当前元素，href用于在当前文档和引用资源之间确立联系，也就是说src引用的路径是img自己的路径，href引用的路径是要跳转到的地方。 
 
## link/import差别  
  1、老祖宗的差别。link属于XHTML标签，而@import完全是CSS提供的一种方式。link标签除了可以加载CSS外，还可以做很多其它的事情，比如定义RSS，定义rel连接属性等，@import就只能加载CSS了。  
  2、加载顺序的差别。当一个页面被加载的时候（就是被浏览者浏览的时候），link引用的CSS会同时被加载，而@import引用的CSS 会等到页面全部被下载完再被加载。所以有时候浏览@import加载CSS的页面时开始会没有样式（就是闪烁），网速慢的时候还挺明显（梦之都加载CSS 的方式就是使用@import，我一边下载一边浏览梦之都网页时，就会出现上述问题）   
  3、兼容性的差别。由于@import是CSS2.1提出的所以老的浏览器不支持，@import只有在IE5以上的才能识别，而link标签无此问题    
  4、使用dom控制样式时的差别。当使用javascript控制dom去改变样式的时候，只能使用link标签，因为@import不是dom可以控制的    
  
## px
PX实际上就是像素，用PX设置字体大小时，比较稳定和精确。但是这种方法存在一个问题，当用户在浏览器中浏览我们制作的Web页面时，如果改变了浏览器的缩放，这时会使用我们的Web页面布局被打破。这样对于那些关心自己网站可用性的用户来说，就是一个大问题了。因此，这时就提出了使用“em”来定义Web页面的字体。

## em
EM就是根据基准来缩放字体的大小。EM实质是一个相对值，而非具体的数值。这种技术需要一个参考点，一般都是以<body>的“font-size”为基准。如WordPress官方主题Twenntytwelve的基准就是14px=1em

## rem
REM是相对于其父元素来设置字体大小的，这样就会存在一个问题，进行任何元素设置，都有可能需要知道他父元素的大小。而Rem是相对于根元素<html>，这样就意味着，我们只需要在根元素确定一个参考值

## px em rem浏览器的兼容性

除了IE6-IE8r，其它的浏览器都支持em和rem属性，px是所有浏览器都支持。
因此为了浏览器的兼容性，可“px”和“rem”一起使用，用"px"来实现IE6-8下的效果，然后使用“Rem”来实现代浏览器的效果

## form的作用
  1、直接提交表单
  2、使用submit/reset按钮  
  3、 便于浏览器保持表单
  4、第三方库可以整体提取值
  5、第三方库可以进行表单验证