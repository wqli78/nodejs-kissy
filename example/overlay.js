
var S = require('../lib/kissy').KISSY;

var http = require('http'),
	fs = require('fs');

S.use('overlay',function(S) {

	new S.Dialog({
		content: '再怎么滚, 我都不会动~',
		fixed: true
	}).show();
	var dialog = new S.Dialog({
		containerCls: 'dialog4',
		width: 400,
		height: 300,
		header: 'this is title',
		footer: 'footer',
		content: 'content',
		mask: false,
		align: {
			node: '.constrain',
			points: ['bc', 'cc']
		},
		constrain: '.constrain',
		draggable: true
	});
	dialog.show();
	new S.Mask();
	S.log(document.outerHTML);


});
