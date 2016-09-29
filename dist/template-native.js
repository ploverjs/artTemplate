/*!art-template-for-plover - Template Engine | http://aui.github.com/artTemplate/*/
!function(){function a(a){return a.replace(u,"").replace(v,",").replace(w,"").replace(x,"").replace(y,"").split(z)}function b(a){return"'"+a.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"}function c(c,d){function e(a){return m+=a.split(/\n/).length-1,k&&(a=a.replace(/((\r\n)|\n|\r)\s+/g,"\n").replace(/<!--[\w\W]*?-->/g,"")),a&&(a=r[1]+b(a)+r[2]+"\n"),a}function f(b){var c=m;if(j?b=j(b,d):g&&(b=b.replace(/\n/g,function(){return m++,"$line="+m+";"})),0===b.indexOf("=")){var e=l&&!/^=[=#]/.test(b);if(b=b.replace(/^=[=#]?|[\s;]*$/g,""),e){var f=b.replace(/\s*\([^\)]+\)/,"");o[f]||/^(include|print)$/.test(f)||(b=d.inspect?"$escape("+b+",$$__ctx)":"$escape("+b+")")}else b=d.inspect?"$string("+b+",$$__ctx)":"$string("+b+")";b=r[1]+b+r[2]}return g&&(b="$line="+c+";"+b),s(a(b),function(a){if(a&&!n[a]){var b;b="print"===a?v:"include"===a?x:o[a]?"$utils."+a:p[a]?"$helpers."+a:"$data."+a,y+=a+"="+b+",",n[a]=!0}}),b+"\n"}var g=d.debug,h=d.openTag,i=d.closeTag,j=d.parser,k=d.compress,l=d.escape,m=1,n={$data:1,$filename:1,$utils:1,$helpers:1,$out:1,$line:1,$$__ctx:1},q="".trim,r=q?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],t="var $$__ctx={data:$data,filename:$filename,get:function(){return $out},set:function(){$out=out}};\n",u=q?"$out+=text;return $out;":"$out.push(text);",v="function(){var text=''.concat.apply('',arguments);"+u+"}",w=d.inspect?"return $utils.$include(filename,data,$$__ctx);":"return $utils.$include(filename,data||$data,$filename);",x="function(filename,data){"+w+"}",y="'use strict';var $utils=this,$helpers=$utils.$helpers,"+(g?"$line=0,":""),z=r[0];d.inspect&&(z+="\n"+t);var A=(r[3],d.inspect?"return $utils.$output("+r[3]+", $$__ctx);":"return $utils.$output("+r[3]+");"),B=(new Date).getTime(),C="##OPEN_TAG_"+B,D=new RegExp(C,"g"),E="##CLOSE_TAG_"+B,F=new RegExp(E,"g");c=c.replace(/\\\{\{/g,C).replace(/\\\}\}/g,E),s(c.split(h),function(a){a=a.split(i);var b=a[0],c=a[1];1===a.length?z+=e(b):(z+=f(b),c&&(z+=e(c)))}),z=z.replace(D,"{{").replace(F,"}}");var G=y+z+A;g&&(G="try{"+G+"}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:"+b(c)+".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try{return new Function("$data","$filename",G)}catch(a){throw a.temp="function anonymous($data,$filename) {"+G+"}",a}}var d=function(a,b){return"string"==typeof b?r(b,{filename:a}):g(a,b)};d.version="3.5.1",d.config=function(a,b){e[a]=b};var e=d.defaults={openTag:"<%",closeTag:"%>",escape:!0,cache:!0,compress:!1,parser:null},f=d.cache={};d.render=function(a,b){return r(a,b)};var g=d.renderFile=function(a,b){var c=d.get(a)||q({filename:a,name:"Render Error",message:"Template not found"});return b?c(b):c};d.get=function(a){var b;if(f[a])b=f[a];else if("object"==typeof document){var c=document.getElementById(a);if(c){var d=(c.value||c.innerHTML).replace(/^\s*|\s*$/g,"");b=r(d,{filename:a})}}return b};var h=function(a,b){return"string"!=typeof a&&(b=typeof a,"number"===b?a+="":a="function"===b?h(a.call(a)):""),a},i={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},j=function(a){return i[a]},k=function(a){return h(a).replace(/&(?![\w#]+;)|[<>"']/g,j)},l=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},m=function(a,b){var c,d;if(l(a))for(c=0,d=a.length;c<d;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)},n=function(a){return a},o=d.utils={$helpers:{},$include:g,$string:h,$escape:k,$each:m,$output:n};d.helper=function(a,b){p[a]=b};var p=d.helpers=o.$helpers;d.onerror=function(a){var b="Template Error\n\n";for(var c in a)b+="<"+c+">\n"+a[c]+"\n\n";"object"==typeof console&&console.error(b)};var q=function(a){return d.onerror(a),function(){return"{Template Error}"}},r=d.compile=function(a,b){function g(a,b){return k.call(j,a,b)}b=b||{};for(var h in e)void 0===b[h]&&(b[h]=e[h]);var i=b.filename,j=b.utils||d.utils;try{var k=c(a,b)}catch(a){return a.filename=i||"anonymous",a.name="Syntax Error",q(a)}return g.toString=function(){return k.toString()},i&&b.cache&&(f[i]=g),g},s=o.$each,t="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",u=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,v=/[^\w$]+/g,w=new RegExp(["\\b"+t.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),x=/^\d[^,]*|,\d[^,]*/g,y=/^,+|,+$/g,z=/^$|,+/;"undefined"!=typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define?define(function(){return d}):this.template=d}();