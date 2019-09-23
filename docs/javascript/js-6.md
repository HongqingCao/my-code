
# JS常见笔试题

## 实现一个数组里面有1000条数据每条数据都是它的索引值

  ```js
    var arr1 = new Array(100);
	for(var i=0;i<arr1.length;i++){
		arr1[i] = i;
	}
	console.log(arr1);
  ```
## 实现add(2)(3)  
 
  ```js
function add(x){
	var sum = x;
	var tmp = function(y){
		sum = sum +y;
		return sum;
	}
	return tmp;
}
  ```	
 > 其实是函数柯里化，如果是无限加add(2)(3)(4)... 
 
  ```js
var add = function(a) {
  var sum = a ;
  var addMore = function(b) {
    sum += b;
    return addMore;   //addMore函数每次累加后返回自身，继续累加后面的执行参数。
  };
  
  addMore.toString = function() {
        return sum; //改写addMore闭包函数的toString方法，返回sum值
    };

  return addMore;     //获取第一个参数赋值给sum后，返回addMore函数。
}
  ```

 
## 打印结果

```js
var foo = 10 + '20'; 
console.log(10 + 1 + '20')
 console.log('20' + 1 + 2)
   ```
   

 ```js
['1','2a','3','4'].map(parseInt)打印结果
//[1, NaN, NaN, NaN]
   ```
  
   ```js
var a = 10;
(function(){
	var a = 200;
})();
 console.log(a)
 //a=10
   ```
  
## 判断x是否为整数
方法一、typeof 

```js
function isInteger(obj) {
 return typeof obj === 'number' && obj%1 === 0
}
isInteger('') // false
isInteger('3') // false
isInteger(true) // false
isInteger([]) // false
    ```
	
方法二、Math.floor判断

```js
function isInteger(obj) {
 return typeof obj === 'number' && obj%1 === 0
}
isInteger('') // false
isInteger('3') // false
isInteger(true) // false
isInteger([]) // false
    ```
  
方法三、通过parseInt判断

```js
function isInteger(obj) {
 return parseInt(obj, 10) === obj
}

isInteger(3) // true
isInteger(3.3) // false
isInteger('') // false
isInteger('3') // false
isInteger(true) // false
isInteger([]) // false、

//很不错，但也有一个缺点
isInteger(1000000000000000000000) // false
    ```
方法四、ES6提供了Number.isInteger

```js
Number.isInteger(3) // true
Number.isInteger(3.1) // false
Number.isInteger('') // false
Number.isInteger('3') // false
Number.isInteger(true) // false
Number.isInteger([]) // false
    ```


方法五、通过位运算判断

```js
function isInteger(obj) {
 return (obj | 0) === obj
}

isInteger(3) // true
isInteger(3.3) // false
isInteger('') // false
isInteger('3') // false
isInteger(true) // false
isInteger([]) // false
    ```

## 要求实现如下代码：[1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]

```js
function a(arr){
	let arrs = arr;
	
	let len = arrs.length;
	
	for(let i=0; i<len;i++){
		arrs.push(arr[i]);
	}
	console.log(arrs)
	return arrs
}
a(arr)
    ```
 es6
 
 ```js
 let arrs = [...arr,...arr]
    ```
	
## 问题：下面两个 alert 的结果是什么？	

 ```js
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
//第一个helloworld
//第二个报错
 
    ```
	
## 数组排序
1、val1-val2从小到大

 ```js
 var array = [1,4,-8,-3,6,12,9,8];
function compare1(val1,val2){
    return val1-val2;
};
array.sort(compare1);
console.log(array);
 
 ```
 如果val1-val2 > 0,则a和b交换位置。当然这样写出来的话是升序排列。如果要降序排则把val1-val2改成val2-val1就可以实现，就是说val2大于val1，则val2和val1交换位置，把大的值排前面
 
 
 2、sort()方法用于对数组的排序，并返回数组。基本用法为：arr.sort();默认为升序排列 
 
 
 ```js
 var arr = [5,3,1,6,4,3,2];
arr.sort(); // [1, 2, 3, 3, 4, 5, 6]
 ```
 一样如果要从大到小
 
 
```js
var arr = [5,3,1,6,4,3,2];
arr.reserse(); // [1, 2, 3, 3, 4, 5, 6
```

如果是string的话则不能用 a-b


```js
var arr = ["A","cds","esadf","As"];
arr.sort(function(a,b){
    if(a > b){
        return 1;
    }
}); // ["A", "As", "cds", "esadf"]
```


## 插入排序

```js
function insert(arr) { 　
　var s; 　
　for (var i = 1; i < arr.length; i++) { 　
　　　for (var j = i; j > 0; j--) { 　　
　　　　if (arr[j] < arr[j - 1]) { 　　　　　
　　　s=arr[j]; 　　　　
　　　　arr[j]=arr[j-1] 　　　　　　　
　arr[j-1]=s console.log(arr) //可以打印出来每一个改变的步骤 　　　
　　　} 　　
　　} 　
　} 　
 return arr
 } 
console.log(insert([3,3,4,2,1,4,4,3,7,8]))


```

## 冒泡排序


```js
function bubble(arr) {
 var s 
for (var i =0;i<arr.length;i++) { 
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      s = arr[j]; arr[j]=arr[j+1]; 
      arr[j+1]=s; 
     }
   }
 } 
 return arr
 }
 console.log(bubble([1,2,3,4,5,7,8]))

```

## 字符串变数组 

```js
var a = "123";
var b = a.split('');
console.log(b)
```
## 数组打乱 

```js
var arr = [4,1,67,12,45,121,3];
arr.sort(()=>{return (0.5-Math.random())})
console.log(arr)
```



```js
console.log(...[4,8])
//48
console.log([..."sdxzcx"])
// ["s", "d", "x", "z", "c", "x"]

```

## 清空数组 

```js
var ary = [1,2,3,4]; 
ary.splice(0,ary.length);//清空数组 
console.log(ary); // 输出 []，空数组，即被清空了

```


## 删除指定数组元素

```js

var a = [1,2,3,4,5]
//a.splice(2,1)
var b = a[2]
console.log(b)
a[a.indexOf(b)]=null;
a.splice(a.indexOf(null),1)
console.log(a)

```