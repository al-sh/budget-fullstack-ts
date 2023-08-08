"use strict";(self.webpackChunkbudget_react=self.webpackChunkbudget_react||[]).push([[423],{423:function(n,t,e){e.r(t);var r=e(9439),a=e(5861),c=e(7757),o=e.n(c),i=e(1299),s=e(4964),u=e(2791),l=e(336),d=e(6987),p=e(145),f=e(184),h=function(n,t,e){var r=document.createElement("a"),a=new Blob([n],{type:e});r.href=URL.createObjectURL(a),r.download=t,r.click(),URL.revokeObjectURL(r.href)},v=function(){var n=(0,a.Z)(o().mark((function n(t,e){var r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new FormData,e&&r.append("fileData",e),a=(0,d.a)(),n.next=5,a.send({endpoint:t,method:"POST",isFile:!0,data:r});case 5:n.sent;case 6:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}();t.default=function(){var n=(0,u.useState)(void 0),t=(0,r.Z)(n,2),e=t[0],c=t[1],g=(0,d.a)(),x=function(){var n=(0,a.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=e,!n.t0){n.next=4;break}return n.next=4,v(l.q.SYNC+"/upload/categories",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),S=function(){var n=(0,a.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=e,!n.t0){n.next=4;break}return n.next=4,v(l.q.SYNC+"/upload/accounts",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),w=function(){var n=(0,a.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=e,!n.t0){n.next=4;break}return n.next=4,v(l.q.SYNC+"/upload/transactions",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),m=function(){var n=(0,a.Z)(o().mark((function n(){var t,e,r,a,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={accounts:JSON.parse(localStorage.accounts),categories:JSON.parse(localStorage.categories),transactions:JSON.parse(localStorage.transactions)},n.next=3,g.send({endpoint:l.q.SYNC+"/upload/all/raw",method:"POST",data:a});case 3:c=n.sent,i.Z.info({message:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0448\u0438\u0431\u043e\u043a: ".concat(c.errors.length," \n ")+"\u0418\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0441\u0447\u0435\u0442\u043e\u0432: ".concat(null===(t=c.imported)||void 0===t?void 0:t.accounts," \n")+"\u0418\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439: ".concat(null===(e=c.imported)||void 0===e?void 0:e.categories," \n")+"\u0418\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439: ".concat(null===(r=c.imported)||void 0===r?void 0:r.transactions)});case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),k=function(){var n=(0,a.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=e,!n.t0){n.next=4;break}return n.next=4,v(l.q.SYNC+"/upload/all/file",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),j=function(){var n=(0,a.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.send({endpoint:l.q.SYNC+"/download/all",method:"GET"});case 2:t=n.sent,console.log(t),localStorage.accounts=JSON.stringify(t.accounts),localStorage.categories=JSON.stringify(t.categories),localStorage.transactions=JSON.stringify(t.transactions);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{children:"\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f"}),(0,f.jsx)("input",{type:"file",id:"file",name:"file",onChange:function(n){n.target.files&&n.target.files[0]&&c(n.target.files[0])}}),(0,f.jsx)("h3",{children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),(0,f.jsx)("div",{children:(0,f.jsx)(s.Z,{onClick:x,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"})}),(0,f.jsx)("h3",{style:{marginTop:30},children:"\u0421\u0447\u0435\u0442\u0430"}),(0,f.jsx)("div",{children:(0,f.jsx)("span",{children:(0,f.jsx)(s.Z,{onClick:S,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"})})}),(0,f.jsx)("h3",{style:{marginTop:30},children:"\u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438"}),(0,f.jsx)("div",{children:(0,f.jsx)(s.Z,{onClick:w,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"})}),(0,f.jsx)("h3",{style:{marginTop:30},children:"\u0412\u0441\u0451 \u0441\u0440\u0430\u0437\u0443 - \u0444\u0430\u0439\u043b\u044b"}),(0,f.jsxs)("div",{children:[(0,f.jsx)(s.Z,{onClick:(0,a.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.send({endpoint:l.q.SYNC+"/download/all",method:"GET"});case 2:t=n.sent,h(JSON.stringify(t),"budget_".concat((0,p.SD)(new Date),".json"),"text/plain");case 4:case"end":return n.stop()}}),n)}))),children:"\u0412\u044b\u0433\u0440\u0443\u0437\u0438\u0442\u044c"}),(0,f.jsx)(s.Z,{onClick:k,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"})]}),(0,f.jsx)("h3",{style:{marginTop:30},children:"\u0412\u0441\u0451 \u0441\u0440\u0430\u0437\u0443 - storage"}),(0,f.jsxs)("div",{children:[(0,f.jsx)(s.Z,{onClick:m,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),(0,f.jsx)(s.Z,{onClick:j,children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c"})]})]})}},336:function(n,t,e){e.d(t,{q:function(){return r}});var r={ACCOUNTS:"accounts",AUTH:"auth",CATEGORIES:"categories",SYNC:"sync",STATISTICS:"statistics",TRANSACTIONS:"transactions"}},6987:function(n,t,e){e.d(t,{a:function(){return f}});var r=e(5861),a=e(5671),c=e(3144),o=e(7757),i=e.n(o),s=e(4569),u=e.n(s),l=e(4674),d=e(1569),p=function(){function n(){var t=this;(0,a.Z)(this,n),this.path="".concat(window.location.origin,"/api"),this.send=function(){var n=(0,r.Z)(i().mark((function n(e){var r,a,c,o,s,p,f;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.endpoint,a=e.method,c=e.data,o=e.query,s=e.isFile,p="".concat(t.path,"/").concat(r),f={Auth:(0,l.c)().getItem("token"),UserId:(0,l.c)().getItem("userId")},s&&(f["Content-Type"]="multipart/form-data"),n.abrupt("return",new Promise((function(n,t){u()({data:c,headers:f,method:a,params:o,url:p}).then((function(t){n(t.data)})).catch((function(n){var e;console.log(n.response),n.response&&401===(null===(e=n.response)||void 0===e?void 0:e.status)&&(console.log("redirected to login"),window.location.href="".concat(window.location.origin).concat(d._1.SETTINGS.LOGIN)),t(n)}))})));case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),console.log("ApiService create. path:",this.path)}return(0,c.Z)(n,null,[{key:"getInstance",value:function(){return n.instance||(console.log("ApiService - create"),n.instance=new n),n.instance}}]),n}();p.instance=void 0;var f=function(){return p.getInstance()}}}]);
//# sourceMappingURL=423.2c97b9de.chunk.js.map