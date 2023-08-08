"use strict";(self.webpackChunkbudget_react=self.webpackChunkbudget_react||[]).push([[931],{5461:function(e,n,t){t.d(n,{p:function(){return m}});var a=t(168),r=t(5751),l=t(1413),c=t(2791),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},o=t(4291),u=function(e,n){return c.createElement(o.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:n,icon:i}))};u.displayName="DeleteOutlined";var s,d=c.forwardRef(u),f=t(4964),v=t(184),p=function(e){var n=e.onClick;return(0,v.jsx)(f.Z,{onClick:n,type:"primary",htmlType:"submit",icon:(0,v.jsx)(d,{})})},h=r.ZP.div(s||(s=(0,a.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 0.5em;\n"]))),m=function(e){var n=e.onDeleteButtonClick,t=e.text;return(0,v.jsxs)(h,{children:[(0,v.jsx)("span",{children:t}),(0,v.jsx)("span",{children:(0,v.jsx)(p,{onClick:n})})]})}},2306:function(e,n,t){t.d(n,{s:function(){return c}});var a=t(6818),r=(t(2791),t(222)),l=t(184),c=function(e){var n=e.value,t=e.onChange;return(0,l.jsx)(a.Z,{value:n,onChange:t,children:r.c.map((function(e){return(0,l.jsx)(a.Z.Option,{value:e.value,children:e.el},e.value)}))})}},5931:function(e,n,t){t.r(n),t.d(n,{AccountPage:function(){return m},default:function(){return y}});t(2791);var a=t(6871),r=t(7583),l=t(1871),c=t(4829),i=t(135),o=t(4587),u=t(4964),s=t(1569),d=t(145),f=t(5461),v=t(2306),p=t(184),h=function(e){var n=e.account,t=(0,r.x)().useItem,l=(0,a.s0)(),h=t("PUT",{id:n.id,onSuccess:function(){l(s._1.SETTINGS.ACCOUNTS)}}),m=t("DELETE",{id:n.id,onSuccess:function(){l(s._1.SETTINGS.ACCOUNTS)}});return(0,p.jsxs)("div",{children:[(0,p.jsx)(f.p,{text:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0447\u0435\u0442\u0430",onDeleteButtonClick:function(){confirm("\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0447\u0435\u0442? \u041f\u0440\u0438 \u043d\u0430\u043b\u0438\u0447\u0438\u0438 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439 \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043c\u0435\u0447\u0435\u043d \u043a\u0430\u043a \u043d\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439")&&m.mutate({id:n.id})}}),(0,p.jsxs)(c.Z,{name:"basic",labelCol:{span:8},layout:"vertical",wrapperCol:{span:16},initialValues:{initialValue:n.initialValue/100,isActive:null===n||void 0===n||!n.id||n.isActive,name:null!==n&&void 0!==n&&n.id?n.name:"",icon:n.icon},onFinish:function(e){h.mutate(e),l(s._1.SETTINGS.ACCOUNTS)},autoComplete:"off",children:[(0,p.jsx)(c.Z.Item,{label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",rules:[{message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0447\u0435\u0442\u0430",required:!0}],children:(0,p.jsx)(i.Z,{})}),(0,p.jsx)(c.Z.Item,{label:"\u0418\u043a\u043e\u043d\u043a\u0430",name:"icon",children:(0,p.jsx)(v.s,{})}),(0,p.jsx)(c.Z.Item,{label:"\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u0441\u0442\u0430\u0442\u043e\u043a",name:"initialValue",rules:[{message:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u0441\u0442\u0430\u0442\u043e\u043a",required:!0}],children:(0,p.jsx)(i.Z,{})}),(0,p.jsx)(c.Z.Item,{name:"isActive",valuePropName:"checked",children:(0,p.jsx)(o.Z,{children:"\u0410\u043a\u0442\u0438\u0432\u0435\u043d"})}),(0,p.jsxs)("span",{style:{marginLeft:10},children:["\u041e\u0441\u0442\u0430\u0442\u043e\u043a: ",(0,d.lb)(n.rest)]}),(0,p.jsx)(c.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,p.jsx)(u.Z,{type:"primary",htmlType:"submit",disabled:h.isLoading,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]}),h.isLoading&&(0,p.jsx)("div",{children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445..."})]})},m=function(){var e=(0,a.UO)(),n=null!==e&&void 0!==e&&e.accountId?null===e||void 0===e?void 0:e.accountId:"",t=(0,(0,r.x)().useGetOne)(n),c=t.isFetching,i=t.isError,o=t.data;return(0,p.jsxs)(p.Fragment,{children:[c&&(0,p.jsx)(l.a,{}),i&&!c&&(0,p.jsx)("div",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0441\u0447\u0435\u0442\u0430"}),!c&&!i&&o&&(0,p.jsx)(h,{account:o})]})},y=m},4587:function(e,n,t){t.d(n,{Z:function(){return S}});var a=t(4942),r=t(7462),l=t(2791),c=t(1694),i=t.n(c),o=t(4925),u=t(1413),s=t(5671),d=t(3144),f=t(136),v=t(8557),p=function(e){(0,f.Z)(t,e);var n=(0,v.Z)(t);function t(e){var a;(0,s.Z)(this,t),(a=n.call(this,e)).handleChange=function(e){var n=a.props,t=n.disabled,r=n.onChange;t||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:(0,u.Z)((0,u.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return(0,d.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,c=n.className,u=n.style,s=n.name,d=n.id,f=n.type,v=n.disabled,p=n.readOnly,h=n.tabIndex,m=n.onClick,y=n.onFocus,x=n.onBlur,b=n.onKeyDown,C=n.onKeyPress,g=n.onKeyUp,k=n.autoFocus,Z=n.value,j=n.required,O=(0,o.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),E=Object.keys(O).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=O[n]),e}),{}),N=this.state.checked,w=i()(t,c,(e={},(0,a.Z)(e,"".concat(t,"-checked"),N),(0,a.Z)(e,"".concat(t,"-disabled"),v),e));return l.createElement("span",{className:w,style:u},l.createElement("input",(0,r.Z)({name:s,id:d,type:f,required:j,readOnly:p,disabled:v,tabIndex:h,className:"".concat(t,"-input"),checked:!!N,onClick:m,onFocus:y,onBlur:x,onKeyUp:g,onKeyDown:b,onKeyPress:C,onChange:this.handleChange,autoFocus:k,ref:this.saveInput,value:Z},E)),l.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,u.Z)((0,u.Z)({},n),{},{checked:e.checked}):null}}]),t}(l.Component);p.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};var h=p,m=t(3433),y=t(9439),x=t(1818),b=t(3785),C=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},g=l.createContext(null),k=function(e,n){var t=e.defaultValue,c=e.children,o=e.options,u=void 0===o?[]:o,s=e.prefixCls,d=e.className,f=e.style,v=e.onChange,p=C(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),h=l.useContext(b.E_),k=h.getPrefixCls,Z=h.direction,j=l.useState(p.value||t||[]),O=(0,y.Z)(j,2),E=O[0],N=O[1],w=l.useState([]),I=(0,y.Z)(w,2),S=I[0],T=I[1];l.useEffect((function(){"value"in p&&N(p.value||[])}),[p.value]);var K=function(){return u.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},V=k("checkbox",s),D="".concat(V,"-group"),F=(0,x.Z)(p,["value","disabled"]);u&&u.length>0&&(c=K().map((function(e){return l.createElement(P,{prefixCls:V,key:e.value.toString(),disabled:"disabled"in e?e.disabled:p.disabled,value:e.value,checked:-1!==E.indexOf(e.value),onChange:e.onChange,className:"".concat(D,"-item"),style:e.style},e.label)})));var _={toggleOption:function(e){var n=E.indexOf(e.value),t=(0,m.Z)(E);-1===n?t.push(e.value):t.splice(n,1),"value"in p||N(t);var a=K();null===v||void 0===v||v(t.filter((function(e){return-1!==S.indexOf(e)})).sort((function(e,n){return a.findIndex((function(n){return n.value===e}))-a.findIndex((function(e){return e.value===n}))})))},value:E,disabled:p.disabled,name:p.name,registerValue:function(e){T((function(n){return[].concat((0,m.Z)(n),[e])}))},cancelValue:function(e){T((function(n){return n.filter((function(n){return n!==e}))}))}},U=i()(D,(0,a.Z)({},"".concat(D,"-rtl"),"rtl"===Z),d);return l.createElement("div",(0,r.Z)({className:U,style:f},F,{ref:n}),l.createElement(g.Provider,{value:_},c))},Z=l.forwardRef(k),j=l.memo(Z),O=t(4824),E=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},N=function(e,n){var t,c=e.prefixCls,o=e.className,u=e.children,s=e.indeterminate,d=void 0!==s&&s,f=e.style,v=e.onMouseEnter,p=e.onMouseLeave,m=e.skipGroup,y=void 0!==m&&m,x=E(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),C=l.useContext(b.E_),k=C.getPrefixCls,Z=C.direction,j=l.useContext(g),N=l.useRef(x.value);l.useEffect((function(){null===j||void 0===j||j.registerValue(x.value),(0,O.Z)("checked"in x||!!j||!("value"in x),"Checkbox","`value` is not a valid prop, do you mean `checked`?")}),[]),l.useEffect((function(){if(!y)return x.value!==N.current&&(null===j||void 0===j||j.cancelValue(N.current),null===j||void 0===j||j.registerValue(x.value),N.current=x.value),function(){return null===j||void 0===j?void 0:j.cancelValue(x.value)}}),[x.value]);var w=k("checkbox",c),P=(0,r.Z)({},x);j&&!y&&(P.onChange=function(){x.onChange&&x.onChange.apply(x,arguments),j.toggleOption&&j.toggleOption({label:u,value:x.value})},P.name=j.name,P.checked=-1!==j.value.indexOf(x.value),P.disabled=x.disabled||j.disabled);var I=i()((t={},(0,a.Z)(t,"".concat(w,"-wrapper"),!0),(0,a.Z)(t,"".concat(w,"-rtl"),"rtl"===Z),(0,a.Z)(t,"".concat(w,"-wrapper-checked"),P.checked),(0,a.Z)(t,"".concat(w,"-wrapper-disabled"),P.disabled),t),o),S=i()((0,a.Z)({},"".concat(w,"-indeterminate"),d));return l.createElement("label",{className:I,style:f,onMouseEnter:v,onMouseLeave:p},l.createElement(h,(0,r.Z)({},P,{prefixCls:w,className:S,ref:n})),void 0!==u&&l.createElement("span",null,u))},w=l.forwardRef(N);w.displayName="Checkbox";var P=w,I=P;I.Group=j,I.__ANT_CHECKBOX=!0;var S=I}}]);
//# sourceMappingURL=931.f7b6b1c0.chunk.js.map