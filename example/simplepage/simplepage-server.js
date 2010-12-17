
var S = require('../../lib/kissy').KISSY,
	fs = require('fs'),
	url = require('url'),
	http = require('http');



S.use('spage',function(S){
	http.createServer(function (req, res) {
		fs.readFile(__dirname + '/data.html', encoding="utf-8", function(err, html_data) {
			fs.readFile(__dirname + '/logic.js', encoding="utf-8", function(err, js_logic) {
				
				var urlInfo = url.parse(req.url, true);
				//后端渲染
				if(typeof urlInfo.query != 'undefined'){
					KISSY.SSJS = 1;
					document.docType = '<!DOCTYPE html>';
					document.body.innerHTML = html_data;
					
					Script = process.binding('evals').Script;
					scriptObj = new Script(js_logic);
					scriptObj.runInThisContext();
					setTimeout(function(){
						if(urlInfo.query){
							window.p.render({index:Number(urlInfo.query.page)});
						}
						res.writeHead(200, {
							'Content-Type': 'text/html',
							'Accept-Charset':'utf-8'}
						);
						res.end(document.outerHTML);
					},500);

				}else{
					//前端渲染
					fs.readFile(__dirname + '/simplepage.js', encoding="utf-8", function(err, js_file) {
						document.docType = '<!DOCTYPE html>';
						document.body.innerHTML = html_data+'<script>'+js_file+js_logic+'</script>';

						res.writeHead(200, {
							'Content-Type': 'text/html',
							'Accept-Charset':'utf-8'}
						);
						res.end(document.outerHTML);
					});
				}					
			
			});	
		});
	}).listen(81);
	S.log('访问：http://localhost:81');

});