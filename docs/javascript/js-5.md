
# 常用的JS-Web-API 

## BOM
 BOM（浏览器对象模型）是浏览器本身的一些信息的设置和获取，例如获取浏览器的宽度、高度，设置让浏览器跳转到哪个地址
  
    1、navigator
    2、 screen 
    3、location
    4、history
> 获取浏览器特性（即俗称的UA）然后识别客户端，例如判断是不是 Chrome 浏览器   
 
  ```js
var ua = navigator.userAgent
var isChrome = ua.indexOf('Chrome')
console.log(isChrome)
  ```
> 获取屏幕的宽度和高度   
 
  ```js
console.log(screen.width)
console.log(screen.height)
  ```	
 > 获取网址、协议、path、参数、hash 等   
 
  ```js
// 例如当前网址是 https://juejin.im/timeline/frontend?a=10&b=10#some
console.log(location.href)  // https://juejin.im/timeline/frontend?a=10&b=10#some
console.log(location.protocol) // https:
console.log(location.pathname) // /timeline/frontend
console.log(location.search) // ?a=10&b=10
console.log(location.hash) // #some
  ```
 > 另外，还有调用浏览器的前进、后退功能等
 
   ```js
history.back()
history.forward()
  ```
## DOM
 > DOM 和 HTML 区别和联系  
 
 浏览器就需要把 HTML 转变成 DOM，HTML 是一棵树，DOM 也是一棵树。对 DOM 的理解，可以暂时先抛开浏览器的内部因素，先从 JS 着手，即可以认为 DOM 就是 JS 能识别的 HTML 结构，一个普通的 JS 对象或者数组
 
 > 获取 DOM 节点  
 
   ```js
 // 通过 id 获取
var div1 = document.getElementById('div1') // 元素

// 通过 tagname 获取
var divList = document.getElementsByTagName('div')  // 集合
console.log(divList.length)
console.log(divList[0])

// 通过 class 获取
var containerList = document.getElementsByClassName('container') // 集合

// 通过 CSS 选择器获取
var pList = document.querySelectorAll('p') // 集合
   ```
 
 >  property 和 attribute 的区别是什么？  
 
 ** property**
 
 DOM 节点就是一个 JS 对象，它符合之前讲述的对象的特征 —— 可扩展属性，因为 DOM 节点本质上也是一个 JS 对象。因此，如下代码所示，p可以有style属性，有className nodeName nodeType属性。注意，这些都是 JS 范畴的属性，符合 JS 语法标准的。

 ```js
var pList = document.querySelectorAll('p')
var p = pList[0]
console.log(p.style.width)  // 获取样式
p.style.width = '100px'  // 修改样式
console.log(p.className)  // 获取 class
p.className = 'p1'  // 修改 class

// 获取 nodeName 和 nodeType
console.log(p.nodeName)
console.log(p.nodeType)
   ```

 **attribute**
   
property 的获取和修改，是直接改变 JS 对象，而 attribute 是直接改变 HTML 的属性，两种有很大的区别。attribute 就是对 HTML 属性的 get 和 set，和 DOM 节点的 JS 范畴的 property 没有关系  

  ```js
 var pList = document.querySelectorAll('p')
var p = pList[0]
p.getAttribute('data-name')
p.setAttribute('data-name', 'juejin')
p.getAttribute('style')
p.setAttribute('style', 'font-size:30px;')
  ```
 而且，get 和 set attribute 时，还会触发 DOM 的查询或者重绘、重排，频繁操作会影响页面性能。

> 题目：DOM 操作的基本 API 有哪些？

### DOM 树操作

  ```js
  
  
  var div1 = document.getElementById('div1')

// 添加新节点
var p1 = document.createElement('p')
p1.innerHTML = 'this is p1'
div1.appendChild(p1) // 添加新创建的元素

// 移动已有节点。注意，这里是“移动”，并不是拷贝
var p2 = document.getElementById('p2')
div1.appendChild(p2)
  
  
// 获取父元素
var div1 = document.getElementById('div1')
var parent = div1.parentElement

// 获取子元素
var div1 = document.getElementById('div1')
var child = div1.childNodes


// 删除节点

var div1 = document.getElementById('div1')
var child = div1.childNodes
div1.removeChild(child[0])
    ```

 
## dom事件的级别（发展史）
    1、dom0: element.onclick= function(){}
    2、dom1: (没有规定事件相关内容)
    3、dom2: element.addEventListener(‘click’,function(){})
    4、dom3: element.addEventListener(‘keyup’,function(){}) 
       除了鼠标点击click事件外，还提供了键盘按压、弹起等类型

普通的事件绑定写法如下： 
 
  ```js
var btn = document.getElementById('btn1')
btn.addEventListener('click', function (event) {
    // event.preventDefault() // 阻止默认行为
    // event.stopPropagation() // 阻止冒泡
    console.log('clicked')
})
  ```   

 为了编写简单的事件绑定，可以编写通用的事件绑定函数。这里虽然比较简单，但是会随着后文的讲解，来继续完善和丰富这个函数  
   ```js
 // 通用的事件绑定函数
function bindEvent(elem, type, fn) {
    elem.addEventListener(type, fn)
}
var a = document.getElementById('link1')
// 写起来更加简单了
bindEvent(a, 'click', function(e) {
    e.preventDefault() // 阻止默认行为
    alert('clicked')
})
   ```  
   
## dom事件模型（捕获、冒泡）
   
 DOM事件流：浏览器与当前页面用户做交互过程中  
   ![](https://user-gold-cdn.xitu.io/2018/7/9/1647ab273f7f2c12?w=373&h=232&f=png&s=20418)  
   
   事件捕获具体流程：window>document>html>body>父级>子元素>目标元素
   
  
## 事件冒泡
   ```js
 <body>
    <div id="div1">
        <p id="p1">激活</p>
        <p id="p2">取消</p>
        <p id="p3">取消</p>
        <p id="p4">取消</p>
    </div>
    <div id="div2">
        <p id="p5">取消</p>
        <p id="p6">取消</p>
    </div>
</body>
    ```  
 对于以上 HTML 代码结构，要求点击p1时候进入激活状态，点击其他任何<p>都取消激活状态，如何实现？代码如下，注意看注释：
     
   ```js
	 var body = document.body
bindEvent(body, 'click', function (e) {
    // 所有 p 的点击都会冒泡到 body 上，因为 DOM 结构中 body 是 p 的上级节点，事件会沿着 DOM 树向上冒泡
    alert('取消')
})

var p1 = document.getElementById('p1')
bindEvent(p1, 'click', function (e) {
    e.stopPropagation() // 阻止冒泡
    alert('激活')
})
     ``` 
如果我们在p1 div1 body中都绑定了事件，它是会根据 DOM 的结构来冒泡，从下到上挨个执行的。但是我们使用`e.stopPropagation()`就可以阻止冒泡 

## 事件代理
 我们设定一种场景，如下代码，一个`<div>`中包含了若干个`<a>`，而且还能继续增加。那如何快捷方便地为所有`<a>`绑定事件呢？  
   ```js
 <div id="div1">
    <a href="#">a1</a>
    <a href="#">a2</a>
    <a href="#">a3</a>
    <a href="#">a4</a>
</div>
<button>点击增加一个 a 标签</button>
   ``` 
这里就会用到事件代理。我们要监听`<a>`的事件，但要把具体的事件绑定到`<div>`上，然后看事件的触发点是不是`<a>`。
   ```js
var div1 = document.getElementById('div1')
div1.addEventListener('click', function (e) {
    // e.target 可以监听到触发点击事件的元素是哪一个
    var target = e.target
    if (e.nodeName === 'A') {
        // 点击的是 <a> 元素
        alert(target.innerHTML)
    }
})
   ``` 
我们现在完善一下之前写的通用事件绑定函数，加上事件代理。
   ```js
function bindEvent(elem, type, selector, fn) {
    // 这样处理，可接收两种调用方式 bindEvent(div1, 'click', 'a', function () {...}) 和 bindEvent(div1, 'click', function () {...}) 这两种
    if (fn == null) {
        fn = selector
        selector = null
    }

    // 绑定事件
    elem.addEventListener(type, function (e) {
        var target
        if (selector) {
            // 有 selector 说明需要做事件代理
            // 获取触发时间的元素，即 e.target
            target = e.target
            // 看是否符合 selector 这个条件
            if (target.matches(selector)) {
                fn.call(target, e)
            }
        } else {
            // 无 selector ，说明不需要事件代理
            fn(e)
        }
    })
}
   ``` 	 
   
## Event 对象的常见应用

1、`event.preventDefault()`   阻止元素发生默认的行为。

```
<a href="http://w3cschool.cc/">Go to W3Cschool.cc</a>
 $("a").click(function(event){
    event.preventDefault(); //阻止a标签页面跳转默认行为
  });
```

 2、`event.stopPropagation()`    阻止冒泡行为  
 
 ```
parent.addEventListener("click",function(){
console.log("parent");
},false);
span.addEventListener("click",function(){
    event.stopPropagation(); 
    console.log("span");
},false)
```

3、 event.stoplmmediatePropagation() 阻止冒泡和这个元素绑定的同类型事件  

4、 event.currentTaget  始终是监听事件者  

5、 event.target 而target是事件的真正触发者  

6.自定义事件


## Ajax

#### 手写 XMLHttpRequest 不借助任何库

  ```js
  var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
    // 这里的函数异步执行，可参考之前 JS 基础中的异步模块
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            alert(xhr.responseText)
        }
    }
}
xhr.open("GET", "/api", false) //建立连接，参数一：发送方式，二：请求地址，三：是否异步，true为异步
xhr.send(null) //
xhr.send(data);        //发送
  ```
 jq
 
  ```js
$.ajax({
	   type: "POST",
	   url: "test.php",
	   data: "name=garfield&age=18",
	   success: function(data){
				console.log(data)
		  },
		  error:function(xhr){
		     console.log(xhr)
		  }
	});
  ``` 
  
#### xhr.readyState的状态码
    1、0 -代理被创建，但尚未调用 open() 方法
	2、1 -open() 方法已经被调用
	3、2 -send() 方法已经被调用，并且头部和状态已经可获得
	4、3 -下载中， responseText 属性已经包含部分数据







 &emsp;&emsp;
  ```js
  ```