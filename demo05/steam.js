
//读取

var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('test.js');

readerStream.setEncoding('UTF8');

readerStream.on('data',function(chunk){
	data += chunk;
});

readerStream.on('end',function(){
	console.log(data)
})

readerStream.on('error',function(err){
	console.log(err.stack)
})

console.log('ok')
