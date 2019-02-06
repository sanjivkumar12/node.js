var bodyParser=require('body-parser');


var data = [{item:'milk'},{item:'suger'},{item:'BB'}];
var urlencodedparser = bodyParser.urlencoded({extended: false});

module.exports = function(app)
{
	
	app.get('/todo',function(req,res){
		
		res.render('todo',{todos:data});
	});
	
	
	app.post('/todo',urlencodedparser,function(req,res){
		data.push(req.body);
		res.json(data);
		
	});
	
	
	app.delete('/todo',function(req,res){
		
		
	});
};