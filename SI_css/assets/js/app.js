!function(t)
{
    function e(e)
    {
        for(var s,r,a=e[0],l=e[1],c=e[2],u=0,p=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;
        for(s in l)
            Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);
        for(d&&d(e);p.length;) p.shift()();
            return n.push.apply(n,c||[]),i()
        }
        function i()
        {
            for (var t,e=0;e<n.length;e++)
                {
                    for (var i=n[e],s=!0,a=1;a<i.length;a++)
                        {
                            var l=i[a];0!==o[l]&&(s=!1)
                        }
                    s&&(n.splice(e--,1),t=r(r.s=i[0]))}
                        return t
                    }
                    var s={},o={0:0},n=[];
                    function r(e)
                    {
                        if(s[e])return s[e].exports;
                        var i=s[e]={i:e,l:!1,exports:{}
                    };
                    return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}
                    r.m=t,r.c=s,r.d=function(t,e,i)
                    {
                        r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t)
                        {"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e)
                        {
                            if(1&e&&(t=r(t)),8&e)
                                return t;
                            if(4&e&&"object"==typeof t&&t&&t.__esModule)
                                return t;
                        var i=Object.create(null);
                        if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)
                            for(var s in t) r.d(i,s,function(e){return t[e]}.bind(null,s));
                                return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=e,a=a.slice();
                                for(var c=0;c<a.length;c++)e(a[c]);
                                var d=l;n.push([3,1]),i()}([function(t,e,i){var s=i(1),o=i(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var n={insert:"head",singleton:!1};s(o,n);t.exports=o.locals||{}},,function(t,e,i){},function(t,e,i){"use strict";i.r(e);var s={view:"dataview",scroll:!0,css:"cartList",borderless:!0,xCount:3,type:{height:242,type:"tiles",width:"auto",template:t=>"\n\t\t\t\t<div class='overall'>\n\t\t\t\t\t<div class='overall_left'>\n\t\t\t\t\t\t<div class=\"itemImg\" style=\"background-image: url("+t.src+');"></div>\n\t\t\t\t\t\t<div class="'+(t.inStock?"text_success":"text_danger")+'">'+(t.inStock?"In Stock":"Out of Stock")+"</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='overall_right'>\n\t\t\t\t\t\t<div><strong>"+t.title+"</strong></div>\n\t\t\t\t\t\t<div>Price: $"+t.cost+"</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='edit_item'><i class='mdi mdi-pencil'></i></div>\n\t\t\t\t</div>\n\t\t\t",on_click:{edit_item:(t,e)=>(webix.message("Click edit button in item id: "+e),!1)}},data:[{id:1,title:"Shoes 1",inStock:!0,cost:45,src:"./assets/img/Shoes_1.png"},{id:2,title:"Shoes 2",inStock:!0,cost:62,src:"./assets/img/Shoes_2.png"},{id:3,title:"Shoes 3",inStock:!0,cost:53,src:"./assets/img/Shoes_3.png"},{id:4,title:"Shoes 4",inStock:!1,cost:45,src:"./assets/img/Shoes_4.png"},{id:5,title:"Shoes 5",inStock:!0,cost:62,src:"./assets/img/Shoes_3.png"},{id:6,title:"Shoes 6",inStock:!1,cost:53,src:"./assets/img/Shoes_2.png"},{id:7,title:"Shoes 7",inStock:!0,cost:52,src:"./assets/img/Shoes_2.png"},{id:8,title:"Shoes 8",inStock:!0,cost:64,src:"./assets/img/Shoes_1.png"},{id:9,title:"Shoes 9",inStock:!0,cost:48,src:"./assets/img/Shoes_4.png"}]},o={view:"toolbar",margin:10,paddingX:16,paddingY:6,cols:[{view:"label",label:"Мои заказы",height:44},{},{view:"button",autowidth:!0,label:"Добавить",css:"webix_primary"},{view:"combo",label:"Отсортировать по",labelWidth:250,value:"All",options:["All","20","40"]}]},n={view:"menu",layout:"y",css:"leftMenu",select:!0,type:{height:44},on:{onAfterRender(){this.select(1)}},data:[{id:"1",value:"My products",icon:"mdi mdi-format-list-bulleted"},{id:"2",value:"Скидки",icon:"mdi mdi-brightness-percent"},{id:"3",value:"Обсуждения",icon:"mdi mdi-wechat"},{id:"4",value:"Редактировать профиль",icon:"mdi mdi-account-edit"},{id:"5",value:"Выход",icon:"mdi mdi-logout"}]},r={css:"cartBox",padding:10,rows:[{view:"template",data:{name:"Любое имя",src:"./assets/img/user.png",balance:"4032 руб."},css:"userCart",height:180,borderless:!0,template:t=>'\n\t\t\t\t\t<div class="avatarImg" style="background-image: url('+t.src+');"></div>\n\t\t\t\t\t<div class="avatarContent userName">\n\t\t\t\t\t\t<span>'+t.name+'</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="avatarContent">\n\t\t\t\t\t\t<span>'+t.balance+"</span>\n\t\t\t\t\t</div>\n\t\t\t\t"},{view:"combo",label:"История покупок",labelWidth:115,value:"All Time",options:["All Time","Last Week"]}]};i(0);webix.ready(()=>{!webix.env.touch&&webix.env.scrollSize&&webix.CustomScroll&&webix.CustomScroll.init(),webix.ui({type:"space",cols:[{},{width:1420,css:"grey",cols:[{width:250,rows:[r,n]},{rows:[o,s]}]},{}]})})}]);