var express=require('express');
var app=express();
var mongojs=require('mongojs');
var db=mongojs('bookList',['bookList']);
var bodyParser=require('body-parser')
// app.get('/',function(req,res){
// 	res.send("hello to my app")
// });
//to use static file for examble html "its connect  the server withe fron-end"
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.get('/bookContent',function(req,res){
	console.log("i send Request")
    
    db.bookList.find(function(err,data){
    	console.log("beforeAddIn",data)
        res.json(data)
    })
})
app.post('/bookContent',function(req,res){
	console.log("this is my post",req.body)
	db.bookList.insert(req.body,function(err,data){
		res.json(data)
		console.log("dataPost",data)
	});
});
// app.delete('/bookRemove',function(req,res){
// 	// var id=req.params.id;
// 	console.log("id---------------------------",req.body)
// 	// var db=req.db
// 	db.bookList.remove( {"_id":db.ObjectId(req.params.id)},function(err,data){
// 		if(err){
// 			res.send(err)
// 		}
// 		res.json(data)
// 		console.log("deleted",data)

// 	})
// })

app.listen(3000);
console.log("Hi afaq i love you ");