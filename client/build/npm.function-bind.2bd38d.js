(self.webpackChunkbarbershop=self.webpackChunkbarbershop||[]).push([[2472],{17648:function(t){"use strict";var n="Function.prototype.bind called on incompatible ",o=Array.prototype.slice,r=Object.prototype.toString,e="[object Function]";t.exports=function(t){var p=this;if("function"!=typeof p||r.call(p)!==e)throw new TypeError(n+p);for(var i,c=o.call(arguments,1),a=function(){if(this instanceof i){var n=p.apply(this,c.concat(o.call(arguments)));return Object(n)===n?n:this}return p.apply(t,c.concat(o.call(arguments)))},u=Math.max(0,p.length-c.length),l=[],s=0;s<u;s++)l.push("$"+s);if(i=Function("binder","return function ("+l.join(",")+"){ return binder.apply(this,arguments); }")(a),p.prototype){var f=function(){};f.prototype=p.prototype,i.prototype=new f,f.prototype=null}return i}},58612:function(t,n,o){"use strict";var r=o(17648);t.exports=Function.prototype.bind||r}}]);