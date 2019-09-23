# ES6常用新特性

## let && const 
  &emsp;&emsp;let 命令也用于变量声明，但是作用域为局部  
  &emsp;&emsp;const用于声明一个常量，设定后值不会再改变  
  
## 箭头函数
箭头函数是 ES6 中新的函数定义形式，function name(arg1, arg2) {...}可以使用(arg1, arg2) => {...}来定义。示例如下：
  ```js
  // JS 普通函数
var arr = [1, 2, 3]
arr.map(function (item) {
    console.log(index)
    return item + 1
})

// ES6 箭头函数
const arr = [1, 2, 3]
arr.map((item, index) => {
    console.log(index)
    return item + 1
})
  ```
箭头函数存在的意义，第一写起来更加简洁，第二可以解决 ES6 之前函数执行中this是全局变量的问题（没有独立的作用域），看如下代码  
  ```js
  function fn() {
    console.log('real', this)  // {a: 100} ，该作用域下的 this 的真实的值
    var arr = [1, 2, 3]
    // 普通 JS
    arr.map(function (item) {
        console.log('js', this)  // window 。普通函数，这里打印出来的是全局变量，令人费解
        return item + 1
    })
    // 箭头函数
    arr.map(item => {
        console.log('es6', this)  // {a: 100} 。箭头函数，这里打印的就是父作用域的 this
        return item + 1
    })
}
fn.call({a: 100})
  
  ```
  
## 解构赋值
 ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）  
   ```js
let [a, b, c] = [1, 2, 3];
//等同于
let a = 1;
let b = 2;
let c = 3;

  ```
 对象的解构赋值：获取对象的多个属性并且使用一条语句将它们赋给多个变量
   ```js
 var {
  StyleSheet,
  Text,
  View
} = React;

等同于
var StyleSheet = React.StyleSheet;
var Text = React.Text;
var View = React.Text;
    ```
  
## 模块化 import导入模块、export导出模块
如果只是输出一个唯一的对象，使用export default即可，代码如下  
  ```js
  // 创建 util1.js 文件，内容如
export default {
    a: 100
}

// 创建 index.js 文件，内容如
import obj from './util1.js'
console.log(obj)
    ```
如果想要输出许多个对象，就不能用`default`了，且`import`时候要加`{...}`，代码如下  
  ```js
// 创建 util2.js 文件，内容如
export function fn1() {
    alert('fn1')
}
export function fn2() {
    alert('fn2')
}

// 创建 index.js 文件，内容如
import { fn1, fn2 } from './util2.js'
fn1()
fn2()
    ```
	
## 类class

class 其实一直是 JS 的关键字（保留字），但是一直没有正式使用，直到 ES6 。 ES6 的 class 就是取代之前构造函数初始化对象的形式，从语法上更加符合面向对象的写法。例如：  

JS 构造函数的写法  
  ```js
  function MathHandle(x, y) {
  this.x = x;
  this.y = y;
}

MathHandle.prototype.add = function () {
  return this.x + this.y;
};

var m = new MathHandle(1, 2);
console.log(m.add())
  ```

用 ES6 class 的写法  
  ```js
class MathHandle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add() {
    return this.x + this.y;
  }
}
const m = new MathHandle(1, 2);
console.log(m.add())

  ```
  
注意以下几点，全都是关于 class 语法的：


    1、class 是一种新的语法形式，是class Name {...}这种形式，和函数的写法完全不一样
    2、两者对比，构造函数函数体的内容要放在 class 中的constructor函数中，constructor即构造器，初始化实例时默认执行
    3、class 中函数的写法是add() {...}这种形式，并没有function关键字

	
使用 class 来实现继承就更加简单了，至少比构造函数实现继承简单很多。看下面例子  
JS 构造函数实现继承  
  ```js
// 动物
function Animal() {
    this.eat = function () {
        console.log('animal eat')
    }
}
// 狗
function Dog() {
    this.bark = function () {
        console.log('dog bark')
    }
}
Dog.prototype = new Animal()
// 哈士奇
var hashiqi = new Dog()
  ```
ES6 class 实现继承
  ```js
class Animal {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(`${this.name} eat`)
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
        this.name = name
    }
    say() {
        console.log(`${this.name} say`)
    }
}
const dog = new Dog('哈士奇')
dog.say()
dog.eat()
  ```
注意以下两点：  

    1、使用extends即可实现继承，更加符合经典面向对象语言的写法，如 Java
    2、子类的constructor一定要执行super()，以调用父类的constructor

	
	
## Set 和 Map
> 题目：ES6 中新增的数据类型有哪些？  

Set 和 Map 都是 ES6 中新增的数据结构，是对当前 JS 数组和对象这两种重要数据结构的扩展。由于是新增的数据结构，目前尚未被大规模使用，但是作为前端程序员，提前了解是必须做到的。先总结一下两者最关键的地方：  
    1、Set 类似于数组，但数组可以允许元素重复，Set 不允许元素重复
    2、Map 类似于对象，但普通对象的 key 必须是字符串或者数字，而 Map 的 key 可以是任何数据类型

	
####  Set

Set 实例不允许元素有重复，可以通过以下示例证明。可以通过一个数组初始化一个 Set 实例，或者通过add添加元素，元素不能重复，重复的会被忽略。


  ```js
// 例1
const set = new Set([1, 2, 3, 4, 4]);
console.log(set) // Set(4) {1, 2, 3, 4}

// 例2
const set = new Set();
[2, 3, 5, 4, 5, 8, 8].forEach(item => set.add(item));
for (let item of set) {
  console.log(item);
}
// 2 3 5 4 8
  ```
Set 实例的属性和方法有 
 
    1、size：获取元素数量。
    2、add(value)：添加元素，返回 Set 实例本身。
    3、delete(value)：删除元素，返回一个布尔值，表示删除是否成功。
    4、has(value)：返回一个布尔值，表示该值是否是 Set 实例的元素。
    5、clear()：清除所有元素，没有返回值。

  ```js
const s = new Set();
s.add(1).add(2).add(2); // 添加元素

s.size // 2

s.has(1) // true
s.has(2) // true
s.has(3) // false

s.delete(2);
s.has(2) // false

s.clear();
console.log(s);  // Set(0) {}
  ```
 Set 实例的遍历，可使用如下方法
 
 
    1、keys()：返回键名的遍历器。
    2、values()：返回键值的遍历器。不过由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys()和values()返回结果一致。
    3、entries()：返回键值对的遍历器。
    4、forEach()：使用回调函数遍历每个成员
	
  ```js	
let set = new Set(['aaa', 'bbb', 'ccc']);

for (let item of set.keys()) {
  console.log(item);
}
// aaa
// bbb
// ccc

for (let item of set.values()) {
  console.log(item);
}
// aaa
// bbb
// ccc

for (let item of set.entries()) {
  console.log(item);
}
// ["aaa", "aaa"]
// ["bbb", "bbb"]
// ["ccc", "ccc"]

set.forEach((value, key) => console.log(key + ' : ' + value))
// aaa : aaa
// bbb : bbb
// ccc : ccc
   ```
####  Map
 
 Map 的用法和普通对象基本一致，先看一下它能用非字符串或者数字作为 key 的特性。  
   ```js	
const map = new Map();
const obj = {p: 'Hello World'};

map.set(obj, 'OK')
map.get(obj) // "OK"

map.has(obj) // true
map.delete(obj) // true
map.has(obj) // false
    ``` 
需要使用new Map()初始化一个实例，下面代码中set get has delete顾名即可思义（下文也会演示）。其中，map.set(obj, 'OK')就是用对象作为的 key （不光可以是对象，任何数据类型都可以），并且后面通过map.get(obj)正确获取了

Map 实例的属性和方法如下：

    1、size：获取成员的数量
    2、set：设置成员 key 和 value
    3、get：获取成员属性值
    4、has：判断成员是否存在
    5、delete：删除成员
    6、clear：清空所有
	
  ```js 
const map = new Map();
map.set('aaa', 100);
map.set('bbb', 200);

map.size // 2

map.get('aaa') // 100

map.has('aaa') // true

map.delete('aaa')
map.has('aaa') // false

map.clear()
    ```
Map 实例的遍历方法有：

    1、keys()：返回键名的遍历器。
    2、values()：返回键值的遍历器。
    3、entries()：返回所有成员的遍历器。
    4、forEach()：遍历 Map 的所有成员
	
  ```js 
const map = new Map();
map.set('aaa', 100);
map.set('bbb', 200);

for (let key of map.keys()) {
  console.log(key);
}
// "aaa"
// "bbb"

for (let value of map.values()) {
  console.log(value);
}
// 100
// 200

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
// aaa 100
// bbb 200

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
// aaa 100
// bbb 200

    ```

## Promise
   &emsp;&emsp;Promise是 CommonJS 提出来的这一种规范，有多个版本，在 ES6 当中已经纳入规范，原生支持 Promise 对象，非 ES6 环境可以用类似 Bluebird、Q 这类库来支持。  
   &emsp;&emsp;Promise 可以将回调变成链式调用写法，流程更加清晰，代码更加优雅。  
  &emsp;&emsp;简单归纳下 Promise：三个状态、两个过程、一个方法，快速记忆方法：3-2-1  
  &emsp;&emsp;三个状态：pending、fulfilled、rejected
 
 两个过程：
    1、pending→fulfilled（resolve）
    2、pending→rejected（reject）
 当然还有其他概念，如catch、 Promise.all/race，这里就不展开了  
 
  ```js  
new Promise((resolve,reject)=>{
   $.ajax({
      url : "xxxxx",
	  type : "post"
	  success(res){
	    resolve(res)
	  },
	  error(err){
	    reject（err）
	  }
   });
}).then(()=>{
},()=>{
})
  ```
  &emsp;&emsp;



