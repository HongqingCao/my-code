# React_Toilet
#react-native 找厕所APP小程序 （安卓版）


## 项目运行
服务端：
#### npm install
#### npm start
客户端：
#### npm install
#### react-native start
#### react-native run-android
#### 模拟器（或者真机）：adb devices
#### 如果是夜神模拟器要先：adb connect 127.0.0.1:62001
#### 然后摇一摇，设置Debug Server 地址为本ip+端口号
（具体可以参考：https://blog.csdn.net/yubo_725/article/details/73574111）
                          

## 服务端

获取几个模块列表服务接口:  
       
#### /data/read?type=cookies        
#### /data/read?type=it      
#### /data/read?type=manager        
#### /data/read?type=sanwen       

## 获取首页配置:  
     
#### /data/read?type=config       


## 客户端

##### 地图中自动搜索附近2KM以内的卫生间，提供卫生间基础信息，以及路线导航规划。       
          
#### 文章阅读，包含推荐文章和分类                            
#### 当地的实时天气      

###ps:本项目仅用于学习使用
