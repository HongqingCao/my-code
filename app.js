'use strict';
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var db = require('./db');

var index = require('./routes/index');
var users = require('./routes/users');
var session = require('express-session')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//TODO:加入会话插件
app.use(session({
  resave:false,//添加这行  
  saveUninitialized: true,//添加这行  
  secret: 'keyboard cat'
}))

app.use(express.static(path.join(__dirname, 'public')));
//
//app.use('/', index);
//app.use('/users', users);
//主页路由
app.get('/',function(req,res){
	//加上登录logined判断
	res.render('index',{list:db.list,logined:req.session.logined})
});

//添加文档选项
app.post('/add',function(req,res){
	db.add({name:req.body.name});
	res.redirect('/');//重定向到首页
});

//删除文档选项
app.get('/del',function(req,res){
	let index = req.query.index;
	db.del(index);
		res.redirect('/');//重定向到首页
});
//通过索引获取当前数据
app.get('/get/:index',function(req,res){
	var index = req.params.index;
	//console.log(index)
  var name = db.get(index);
		res.send(name);//返回一个json对象
});
//更新文档
app.post('/update',function(req,res){
	var index = req.body.index;
	var name = req.body.name;
	db.update(index,{name});
	res.redirect('/');//重定向到首页
});

//登录接口 
app.post('/login',function(req,res){
	let loginName = req.body.loginName;
	let passWord = req.body.passWord;
	if (loginName === 'test' &&passWord === '123456'){
		//会话功能
		req.session.logined = true;
		res.send("success");
	}else{
		res.send("error");
	}
});
//登出
app.get('/logout',function(req,res){
	req.session.logined = false;
	res.redirect('/');//重定向到首页
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
