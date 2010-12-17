
KISSY.add({
	'spage':{
		fullpath:'simplepage.js'
	}
}).use('spage',function(S){
	/* window.p is for ssjs */
	window.p = new S.Spage(S.all('#Hook .item'),'Page',{
		step:4,

		selected_class:'on'
	});
	if(!S.SSJS){
		p.render({index:Number(window.location.hash.replace('#page=','')),});
	}
});