(this.webpackJsonpsimplecalendar=this.webpackJsonpsimplecalendar||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),s=n.n(r),i=(n(9),n(4)),d=(n(10),n(0));var l=function(e){var t=function(e){return("00"+e).slice(-2)},n=t(e.date.getHours()),c=t(e.date.getMinutes());return Object(d.jsxs)("div",{className:"_row",id:"_clock",children:[Object(d.jsx)("div",{children:n}),Object(d.jsx)("div",{children:c})]})};var j=function(e){var t=function(e){return("00"+e).slice(-2)},n=t(e.date.getMonth()+1),c=t(e.date.getDay());return Object(d.jsxs)("div",{className:"_row",id:"_textdate",children:[Object(d.jsx)("div",{children:n}),Object(d.jsx)("div",{children:c})]})};var o=function(e){for(var t=e.date,n=t.getFullYear(),c=t.getMonth(),a=t.getDate(),r=[[],[]],s=0,i=r;s<i.length;s++){for(var l=i[s],j=new Date(n,c,1),o=new Date(n,c+1,0),u=1-j.getDay(),v=0;v<6;v++){for(var h=[],b=0;b<7;b++)h.push(Object(d.jsx)("div",{className:"_day",id:u==a?"_today":"",children:u>0&&u<=o.getDate()?u:""})),u++;l.push(Object(d.jsx)("div",{className:"_week",children:h}))}c++}return Object(d.jsxs)("div",{className:"_row",id:"_calendar",children:[Object(d.jsx)("div",{className:"_col",id:"_thismonth",children:Object(d.jsx)("div",{className:"_calendarbody",children:r[0]})}),Object(d.jsx)("div",{className:"_col",id:"_nextmonth",children:Object(d.jsx)("div",{className:"_calendarbody",children:r[1]})})]})};var u=function(){var e=a.a.useState(new Date),t=Object(i.a)(e,2),n=t[0],c=t[1];return a.a.useEffect((function(){var e=setInterval((function(){c(new Date)}),1e3);return function(){clearInterval(e)}}),[n]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(l,{date:n}),Object(d.jsx)(j,{date:n}),Object(d.jsx)(o,{date:n})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),v()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.8d9330bb.chunk.js.map