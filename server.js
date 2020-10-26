var express=require('express');
var app=express();
var fs=require('fs');
const port = 8080;

app.get('',function(req,res){
		fs.readFile(__dirname + "/" + "text.json", 'utf8', function(err, data){
			console.log(data);
			const obj = JSON.parse(data);
			res.send(obj.text);
		});
		
})


var server=app.listen(port, function(){
	console.log('Server listening on http://localhost:' + port);	
})