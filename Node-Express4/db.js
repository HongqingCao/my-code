const repos = require('./data');
const fs = require('fs');

module.exports ={
	//持久化写入，保存
	store(){
		fs.writeFileSync(__dirname+'/data.json', JSON.stringify(repos));//_dirname获得当前文件所在目录的完整目录名
	},
	get(index){
		return repos[index];
	},
	get list(){
		return repos;
	},
	add(article){
		repos.push(article);
		this.store();
	},
	del(index){
		repos.splice(index,1);
		this.store();
	},
	update(index,newArticle){
		repos.splice(index,1,newArticle);
		this.store();
	}
}