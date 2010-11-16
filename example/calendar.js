
var S = require('../lib/kissy').KISSY;

S.use('calendar',function(S) {

	
	document.body.innerHTML = '<div id="J_calendar"></div>';
	document.docType = '<!DOCTYPE html>';

	new S.Calendar('#J_calendar');

	S.log(document.outerHTML);

});

