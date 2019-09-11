<h1 align="center">
	<br>
	  [Vue响应式原理]从Object.defineProperty到proxy实现观察者机制的探索
	<br>
	<br>
</h1>



不知不觉，Vue的作者尤雨溪公布了Vue3.0版本的开发计划，发布到现在已经一年了，看来Vue3.0的发布尚需时日，在开发计划中，下图这段话：Vue3.0版本中将基于Proxy来改造观察者模式。说明Vue3.0讲不再借助于ES5的Object.defineProperty，转而使用最新的Proxy语法实现Vue最根本的响应式原理（注又名：数据劫持，下文统称响应式原理）。



下文主要简述从Object.defineProperty到proxy的实现观察者机制探索，目前关于深入响应式原理的文章已经很多了，很多都写的很好，本文不做过深的vue里的源码解析，只是浅入探索和自己动手手写一个简易的Object.defineProperty实现观察者机制，以及手写一个简易的由Proxy实现观察者机制，当然最终以作者发布为准。主要有以下几个知识点带大家一起进入

1、Object.defineProperty实现观察者机制
2、Object.defineProperty的缺点
3、利用proxy实现简易的实现观察者机制
4、总结

## 一、Object.defineProperty实现观察者机制

这里我们照顾一下小白同学，首先我们来补充一下ES5中对Object.defineProperty() 方法的定义和一些基础知识，然后手写一个简易的响应式，最后再结合vue源码简析

####  1.1 Object.defineProperty基础知识
在developer.mozilla.org对Object.defineProperty()定义

Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象
语法：
Object.defineProperty(obj, prop, descriptor)
参数说明：
1、obj要在其上定义属性的对象
2、要定义或修改的属性的名称
3、将被定义或修改的属性描述符
返回值：
 被传递给函数的对象

这里我们重点关注一下语法中的第三个参数属性描述符：descriptor

对象里目前存在的属性描述符有两种主要形式：数据描述符和存取描述符。数据描述符是一个具有值的属性，该值可能是可写的，也可能不是可写的。存取描述符是由getter-setter函数对描述的属性。描述符必须是这两种形式之一；不能同时是两者。这里descriptor有6个选键值configurable、enumerable、value、writableget、set这里他们分别的介绍可以移步

####  1.2 创建对象
通常我们创建对象来一步一步了解这个Object.defineProperty() 方法和属性描述符descriptor里面键值的用法

【1】正常我们创建一个对象，如下，然后控制台打印他们我们可以看到

      let vm = {
        name: '掘金'
      }
      console.log(vm)

![图片描述][1]
【2】接下来我们通过Object.defineProperty创建一个对象，并设置这个对象要定义或者修改的属性“name”

//    let vm = {
//      name: '掘金'
//    }
    let vm = Object.defineProperty({},"name",{
      get() {
        console.log("执行get");
        return "掘金"
      },
      set(newValue) {
        console.log("执行set");
        console.log("新值：" + newValue);
      }
    })
 console.log(vm)

![图片描述][2]
其实这两种都创建一个对象的方式，通过Object.defineProperty创建的对象，我们可以看到，多了上面说的两个存取描述符键值方法get 和set 这样的对象，就变得可控被观察，也就是我们说的被劫持，当我们改变或者获取这对象的属性的时候，我们就可以控制到它

下面我们通过改变vm.name = "juejin",我们通过控制台可以看到

//    let vm = {
//      name: '掘金'
//    }
    let vm = Object.defineProperty({},"name",{
      get() {
        console.log("执行get");
        return "掘金"
      },
      set(newValue) {
        console.log("执行set");
        console.log("新值：" + newValue);
      }
    })
vm.name = "juejin";
//console.log(vm)




####  1.3 实现观察者机制，响应式对象
let vm = {
  id:"juejin",
  name:"掘金"};
let keys = Object.keys(vm);
keys.forEach(key=>{
  let value = vm[key];
  Object.defineProperty(vm, key,{
     get() {
        console.log("执行get");
        return value
     },
     set(newValue){
        console.log("执行set");
        if(newValue!=value){
           value =  newValue;
         }
       }
    })
})
vm.id = "test";
console.log(vm)
![图片描述][3]

这里主要是遍历对象中的每一个属性，每个属性都是赋予get和set，让对象中的每一个属性的改变都会被监测到，也就是实现了响应式

####  1.4 vue源码中的响应式原理简析
上面的例子我们试一下，用数组对象发现是不能生效的，那么在vue里数组是怎么实现响应式原理的呢，我们可以看到vue源码目录src/core/observer/index.js里，其实他是对对象进行了判断，如果是数组对象，就会走observeArray（）方法,而且你会发现里面还有一个arrayMethods，里面是对数组的 'push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'进行了重写，重写过后的方法不仅能实现原有的功能，还能发布消息给订阅者。其他对象，都走walk（）方法。

####  1.5 把数据渲染到页面上
当我们检测到对象更新了，如何同步更新到页面上呢？

1、首先，我们要找到作用域范围内（vue，里会有个 el:"#app"）的节点，全部页面内容都会渲染到这个结点里面

2、然后遍历结点上所有含有使用该对象的地方，也就是Mustache语法 (双大括号) 的文本插值的地方，例如 {{ vm }}

3、绑定视图更新



## 二、Object.defineProperty的缺点
####  2.1 无法监听对象非已有的属性的添加和已有属性的删除
只会对对象原有的全部属性进行做数据劫持，也就是说Vue 不允许动态添加或者删除对象已有属性，它是不做数据劫持的，也就不能实现响应式

举例

<template>
  <div>
    <h1>{{ vm }}</h1>
    <button @click="addAttribute">新增属性</button>
    <button @click="delAttribute">删除属性</button>
  </div>
</template>

<script>
export default {
  data() {
    return { 
      vm:{
        id:"juejin",
        name:"掘金"
      }
    }
  },
  methods: {
    addAttribute() {
      this.vm.use = "codercao"
      console.log(this.vm)
    },
    delAttribute() {
      for(let k in this.vm) {
       if(k=='id'){
         delete this.vm[k]
       }
      }
      console.log(this.vm)
   }
  },
}
</script>
新增，你会发现控制台打印的vm已经新增了use属性，而页面并没有响应式改变
![图片描述][4]


删除，你会发现控制台打印的vm已经删除了id属性，而页面并没有响应式改变

![图片描述][5]

#### 2.2 数组变异
数组对象也不能通过属性或者索引控制数组，比如length，index实现响应式，通过1.4 里我们也看到vue源码只是对数组的 'push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'进行了重写，但是索引控制数组是没有办法实现响应式的

#### 2.3 解决以上的办法。 使用Vue.set(object, propertyName, value) 方法
改进上面2.1里的新增属性方式，你会发现页面就实现了响应式，至于Vue.set方法介绍移步

    addAttribute() {
     //this.vm.use = "codercao"
     this.$set(this.vm,'use','codercao')
      console.log(this.vm)
    },


## 三、利用proxy实现简易的实现观察者机制
#### 3.1proxy基础知识
Proxy 对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）
语法
let p = new Proxy(target, handler);
参数说明
target用Proxy包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）
handler一个对象，其属性是当执行一个操作时定义代理的行为的函数


  let vm = {
      id:"juejin",
      name:"掘金"
    }
    let newVm = new Proxy(vm,{
      get(target,key){
        console.log("执行get");
        return target[key];
       },
      set(target,key,newValue){
        console.log("执行set");
        if(target[key]!==newValue)
        target[key] = newValue;
      }
    })
    newVm.use = "codercao"
    console.log(newVm)
你会发现用Proxy 也一样实现了一个简易的观察者机制，当然深入研究的话，你还可以实现双向绑定。

#### 四、结尾
到这里我们这篇文章到此就结束了，至于最终作者会怎么用proxy来写这个观察者机制，待vue3.0发布可以一看究竟，文章主要是带大家实践探索一下Object.defineProperty实现观察者机制，顺便提了一下，这个Object.defineProperty缺陷和处理办法，然后引入proxy，属于比较初级的尝试，Vue发展到现在几年了，其实大部分人对其应用已经游刃有余了，关注源码和实践vue里功能的原理，或许对每个前端人都会有一些提升。


  [1]: /img/bVbxBvl
  [2]: /img/bVbxBvn
  [3]: /img/bVbxBvr
  [4]: /img/bVbxBvt
  [5]: /img/bVbxBvH


## 捐赠

您的捐赠，是我持续开源的动力。


支付宝 | 微信
------|------
![](./public/alipay.jpg) | ![](./public/wechat.jpg)

