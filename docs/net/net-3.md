# 存储

## 各种存储方案的简单对比
    1、Cookies：浏览器均支持，容量为4KB
    2、UserData：仅IE支持，容量为64KB  
    3、 Flash：100KB，非HTML原生，需要插件支持
	4、 Google Gears SQLite ：需要插件支持，容量无限制
	5、 LocalStorage：HTML5，容量为5M
	6、 SesstionStorage：HTML5，容量为5M
	7、globalStorage：Firefox独有的，Firefox13开始就不再支持这个方法
 
## Cookie
**特点**  
    1、cookie的大小受限制，cookie大小被限制在4KB，不能接受像大文件或邮件那样的大数据
	2、cookie要在服务器和浏览器之间来回传送，cookie数据始终在同源的http请求中携带（即使不需要）
	3、cookie是服务端生成，客户端进行维护和存储

**Cookie的生成方式**  

生成方式一：http response header中的set-cookie  
生成方式二：js中可以通过document.cookie可以读写cookie//以键值对的形式展示

**Cookie的缺陷**  

1、cookie会被附加在每个HTTP请求中，在HttpRequest 和HttpResponse的header中都是要被传输的，所以无形中增加了一些不必要的流量损失  
cookie是用来维护用户信息的，而域名(domain)下所有请求都会携带cookie，但对于静态文件的请求，携带cookie信息根本没有用，此时可以通过cdn（存储静态文件的）的域名和主站的域名分开来解决  

2、由于在HTTP请求中的Cookie是明文传递的，所以安全性成问题，除非用HTTPS。
可以使用HttpOnly提升Cookie安全性。httponly 不支持读写，浏览器不允许脚本操作document.cookie去更改cookie，一般情况下都应该设置这个为true，这样可以避免被XSS攻击拿到cookie  



## session
   session机制是一种服务器端的机制，服务器使用一种类似于散列表的结构（也可能就是使用散列表）来保存信息


## localStorage

这是一种持久化的存储方式，也就是说如果不手动清除，数据就永远不会过期。它也是采用Key - Value的方式存储数据，底层数据接口是sqlite，按域名将数据分别保存到对应数据库文件里。它能保存更大的数据（IE8上是10MB，Chrome是5MB），同时保存的数据不会再发送给服务器，避免带宽浪费 

**localStorage缺点**

① localStorage大小限制在500万字符左右，各个浏览器不一致  
② localStorage在隐私模式下不可读取  
③ localStorage本质是在读写文件，数据多的话会比较卡  
④ localStorage不能被爬虫爬取，不要用它完全取代URL传参  

## SessionStorage
和服务器端使用的session类似，是一种会话级别的缓存，关闭浏览器会数据会被清除。不过有点特别的是它的作用域是窗口级别的，也就是说不同窗口间的sessionStorage数据不能共享的。

**SessionStorage缺点**
	
① 会话级别的浏览器存储  
② 大小为5M左右  
③仅在客户端使用，不和服务端进行通信  
④ 接口封装较好  
	