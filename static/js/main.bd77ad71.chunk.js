(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(19)},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),s=n.n(c),o=n(10),i=n(6),u=n(7),l=n(9),d=n(8),p=n(11),m=n(1),f=n.n(m),h=n(2),b=(n(3),function(e){var t=e.item;return r.a.createElement("tr",{className:"App__table_container"},r.a.createElement("td",null,t.id),r.a.createElement("td",{className:"bold"},t.user.name),r.a.createElement("td",null,t.title),r.a.createElement("td",{className:"align-left"},t.title),r.a.createElement("input",{type:"checkbox",checked:t.completed}))}),v=function(e){var t=e.currentTodos;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement("div",{className:"App__container"},r.a.createElement("p",{className:"App__todoItem"},r.a.createElement(b,{item:e})))}))},E=function(){var e=Object(h.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/todos");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(h.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),w=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={listOfTodos:[],isLoaded:!1,isLoading:!1},n.handleClick=Object(h.a)(f.a.mark(function e(){var t,a,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:return t=e.sent,e.next=5,j();case 5:a=e.sent,r=t.map(function(e){return Object(o.a)({},e,{user:a.find(function(t){return t.id===e.userId})})}),n.setState({listOfTodos:r,isLoading:!0}),setTimeout(function(){n.setState({isLoaded:!0,isLoading:!1})},1e3);case 9:case"end":return e.stop()}},e)})),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.isLoaded?r.a.createElement("div",{className:"App"},r.a.createElement(v,{currentTodos:this.state.listOfTodos})):r.a.createElement("button",{type:"button",onClick:this.handleClick},this.state.isLoading?"Loading...":"Load"))}}]),t}(r.a.Component);s.a.render(r.a.createElement(w,null),document.getElementById("root"))},3:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.bd77ad71.chunk.js.map