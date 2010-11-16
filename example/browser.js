
var S = require('../lib/kissy').KISSY,
	sys = require('sys');

S.ready(function(S){


	/* 'window' and 'document' are prepared by KISSY by default */

	/* you can also get 'window' via S.Browser */

    var self = window.self;
    var navigator = window.navigator;
    var location = window.location;

    document.title = 'Example #1';

    //With the local aliases
    var el = document.createElement('div');
    el.id = 'foo';
    el.innerHTML = '<em>This is a test</em> This <strong class="odd">is another</strong> test ';
    document.body.appendChild(el);


    //SCOPED
    var el2 = document.createElement('div');
    el2.id = 'foo2bar';
    el2.innerHTML = '<em class="odd">This is a test</em> This <strong>is another</strong> test ';
    document.body.appendChild(el2);

    sys.puts('getElementByid(foo2bar): ' + document.getElementById('foo2bar'));
    sys.puts('getElementByid(foo): ' + document.getElementById('foo'));
    sys.puts('getElementByTagName(em): ' + document.getElementsByTagName('em'));
    sys.puts('getElementByClassName(odd): ' + document.getElementsByClassName('odd'));

    sys.puts('');
    sys.puts('document.outerHTML: ');
    sys.puts(document.outerHTML);
});


