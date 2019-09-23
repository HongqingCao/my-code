# ES8新特性
    1、Object.values/Object.entries
    2、String padding(字符串填充)
    3、Object.getOwnPropertyDescriptors
    4、函数参数列表和调用中的尾逗号（Trailing commas）
    5、异步函数（Async Functions）
## Object.values/Object.entries 

Object.values和 Object.entries是在ES2017规格中，它和Object.keys类似，返回数组类型，其序号和Object.keys序号对应。类似python中的dict.iteritems()。  

Object.values,Object.entries和Object.keys各自项返回是数组，相对应包括key,value或者可枚举特定对象property/attribute  
  ```js
let obj = {a: 1, b: 2, c: 3}
Object.keys(obj).forEach((key, index)=>{
  console.log(key, obj[key])
})
  ```
  
 而使用ES6/ES2015 中for/of稍微好点：
  ```js 
 let obj = {a: 1, b: 2, c: 3}
for (let key of Object.keys(obj)) {
  console.log(key, obj[key])
}
  ```
Object.values返回对象自身可以迭代属性值（values）为数组类型。我们最好使用Array.prototype.forEach迭代它，结合ES6的箭头函数隐形返回值：  
  ```js 
 let obj = {a: 1, b: 2, c: 3}
Object.values(obj).forEach(value=>console.log(value)) // 1, 2, 3 
  ```
  
  
  
## String padding(字符串填充)
String.prototype.padStart 和 String.prototype.padEnd在javascript字符操作是一个不错的体验，帮助避免依赖而外的库  
padStart()在开始部位填充，返回一个给出长度的字符串，填充物给定字符串，把字符串填充到期望的长度。从字符串的左边开始（至少大部分西方语言），一个经典例子是使用空格创建列：

  ```js
console.log(‘react‘.padStart(10).length)         // "       react" is 10
console.log(‘backbone‘.padStart(10).length)         // "  backbone" is 10
  ```
## Object.getOwnPropertyDescriptors
 
 Object.getOwnPropertyDescriptors允许创建真实的对象浅副本并创建子类,它通过给开发者描述符来做到这一点.在Object.create(prototype, object)放入描述符后，返回一个真正的浅拷贝  
   ```js
 Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
)
   ```
 或者你可以合并两个对象target和source如下：
 
  ```js
 Object.defineProperties(
  target,
  Object.getOwnPropertyDescriptors(source)
)
  ```
两种描述符号类型：

    1.数据描述符（Data descriptor）
    2.存取器描述符（Accessor descriptor）
存取描述符有必须属性：get 或者set或者get和set两个就是如你所想的getter和setter函数，然后存取描述符还有可选属性configurable和enumerable
  ```js
let azatsBooks = {  
  books: ['React Quickly'],
  get latest () {
    let numberOfBooks = this.books.length
    if (numberOfBooks == 0) return undefined
    return this.books[numberOfBooks - 1]
  }
}
  ```
## 函数参数列表和调用中的尾逗号	
 
 尾逗号在函数定义中只是一个纯粹语法变化，在ES5中，将会非法语法，在函数参数后面应该是没有逗号的：  
  ```js
 var f = function(a,
  b,
  c,
  d) { // NO COMMA!
  // ...
  console.log(d)
}
f(1,2,3,'this')
  ```	
  
 在ES8中，这种尾逗号是没有问题的：
  ```js
 var f = function(a,
  b,
  c,
  d,
) { // COMMA? OK!
  // ...
  console.log(d)
}
f(1,2,3,'this')
  ```	
## 异步函数 
  
异步函数（或者async/await）特性操作是Promise最重要的功能，开发者定义一个asyc函数里面不包含或者包含await 基于Promise异步操作  
在ES6中我们可以使用Promise，Axios库向GraphQL服务器发送一个请求：  
  ```js
axios.get(`/q?query=${query}`)
  .then(response => response.data)
  .then(data => {
    this.props.processfetchedData(data) // Defined somewhere else
  })
  .catch(error => console.log(error))
  ```
任何一个Promise库都能兼容新的异步函数，我们可以使用同步try/catch做错误处理  

  ```js
async fetchData(url) => {
  try {
    const response = await axios.get(`/q?query=${query}`)
    const data = response.data
    this.props.processfetchedData(data)
  } catch (error) {
    console.log(error)
  }
}
  ```
异步函数返回一个Promise，所以我们像下面可以继续执行流程:
  ```js
 async fetchData(query) => {
  try {
    const response = await axios.get(`/q?query=${query}`)
    const data = response.data
    return data
  } catch (error) {
    console.log(error)
  }
}
fetchData(query).then(data => {
  this.props.processfetchedData(data)
})
  ```
  你可以看到这段代码在(Babel REPL)生效。请注意，这个例子中，Axios库被代替的，是通过模拟来做相同功能，而HTTP请求通过setTimout代替：  
  ```js  
  let axios = {  // mocks
  get: function(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({data: x})
    }, 2000)
  })
}}
let query = 'mangos'
async function fetchData(query) {
  try {
    const response = await axios.get(`/q?query=${query}`)
    const data = response.data
    return data
  } catch (error) {
    console.log(error)
  }
}
fetchData(query).then(data => {
  console.log(data) // Got data 2s later... Can use data!
})
  ```
 async/await,我们的代码执行异步看起来像执行同步一样  
