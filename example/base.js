/*
*/

var S = require('../lib/kissy').KISSY;

KISSY.ready(function(S) {
    // 自定义类
    function myClass(config) {
        myClass.superclass.constructor.call(this, config);
    }

    // 继承 Base
    S.extend(myClass, S.Base);

    // 增加属性
    myClass.ATTRS = {
        size: {
            value: 0,
            setter: function(v) {
                if (S.isString(v) && v.indexOf('inch')!== -1) {
                    return parseFloat(v)*10/3;
                }
                return parseFloat(v);
            },
            getter: function(v) {
                return v;
            }
        }
    };

    var cls = new myClass();

    // 绑定事件
    cls.on('afterSizeChange', function(ev){
        S.log('change '+ ev.attrName + ': '+ev.prevVal+' --> '+ev.newVal);
    });

    // 设置属性
    cls.set('size', 20);

    // 获取属性
    S.log(cls.get('size'));

    // 重置
    cls.reset();
    S.log(cls.get('size'));
});

