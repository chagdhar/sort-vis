(this["webpackJsonpsort-vis"]=this["webpackJsonpsort-vis"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),i=(n(12),n(13),n(3)),s=n(4),u=n(6),l=n(5),m=(n(14),function(e){return Math.floor(window.innerWidth/e/3)}(50)),d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={array:[],barnum:50},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.resetArray(),console.log("compoonent mounted")}},{key:"resetArray",value:function(){for(var e,t,n=[],a=0;a<this.state.barnum;a++)n[a]=(e=50,t=500,Math.floor(Math.random()*(t-e+1)+e));this.setState({array:n})}},{key:"bubbleSort",value:function(){this.state.array;for(var e=this.state.barnum,t=document.getElementsByClassName("bar"),n=e;n>0;n--)for(var a=0;a<n-1;a++)setTimeout((function(e){t[e].style.backgroundColor="indigo",t[e+1].style.backgroundColor="indigo"}),1e3)}},{key:"render",value:function(){var e=this,t=this.state.array;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},t.map((function(e,t){return r.a.createElement("div",{className:"bar",key:t,style:{backgroundColor:"red",height:"".concat(e,"px"),width:"".concat(m,"px"),margin:"".concat(m,"px"),borderRadius:"".concat(m,"px")}})}))),r.a.createElement("div",{className:"menu"},r.a.createElement("button",{class:"btn",onClick:function(){return e.resetArray()}},"Generate New Array"),r.a.createElement("button",{class:"btn",onClick:function(){return e.bubbleSort()}},"BUBBLE SORT")))}}]),n}(r.a.Component);var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.fafa8adf.chunk.js.map