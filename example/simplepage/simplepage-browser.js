
var S = require('../../lib/kissy').KISSY,
	fs = require('fs'),
	http = require('http');

S.use('spage',function(S){
	http.createServer(function (req, res) {
		fs.readFile(__dirname + '/data.html', encoding="utf-8", function(err, html_data) {
			fs.readFile(__dirname + '/logic.js', encoding="utf-8", function(err, js_logic) {
				fs.readFile(__dirname + '/simplepage.js', encoding="utf-8", function(err, js_file) {
					document.docType = '<!DOCTYPE html>';
					document.body.innerHTML = html_data+'<script>'+js_file+js_logic+'</script>';
					/*
					var mod = "(function(KISSY) { " + js_data + " return KISSY; })",
								fn = process.compile(mod, file);
					*/

					
						
					res.writeHead(200, {
						'Content-Type': 'text/html',
						'Accept-Charset':'utf-8'}
					);
					res.end(document.outerHTML);

					
					
				});
			});
		});
	}).listen(81);
	S.log('访问：http://localhost:81');

});