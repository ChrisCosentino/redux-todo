(this["webpackJsonpredux-todo"]=this["webpackJsonpredux-todo"]||[]).push([[0],{18:function(t,e,n){t.exports=n(29)},29:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(4),c=n.n(a),u=n(2),d=n(5),i=n(10),l=n(16),f=n(13),m=n.n(f),p=Object(u.b)((function(t){return{todo:t.todo}}),{addTodo:function(t){return function(e){e({type:"ADD_TODO",payload:{id:m()(),text:t}})}}})((function(t){var e=t.addTodo,n=Object(o.useState)({todo:""}),a=Object(l.a)(n,2),c=a[0],u=a[1],f=c.todo;return r.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault(),e(f),t.target.reset()}(t)}},r.a.createElement("input",{type:"text",name:"todo",onChange:function(t){return function(t){return u(Object(i.a)(Object(i.a)({},c),{},Object(d.a)({},t.target.name,t.target.value)))}(t)},required:!0}),r.a.createElement("button",{type:"submit"},"Add Todo"))})),s=n(1),O=n(14),b=n(15),E=n(17),v=[],j=Object(s.combineReducers)({todos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0,n=e.type,o=e.payload;switch(n){case"ADD_TODO":return[].concat(Object(E.a)(t),[o]);case"COMPLETE_TODO":return t.filter((function(t){return t.id!==o.id}));default:return t}}}),y=[b.a],T=Object(s.createStore)(j,{},Object(O.composeWithDevTools)(s.applyMiddleware.apply(void 0,y))),D=Object(u.b)(null,{completeTodo:function(t){return function(e){e({type:"COMPLETE_TODO",payload:{id:t}})}}})((function(t){var e=t.todo,n=t.completeTodo;return r.a.createElement("li",{onClick:function(t){return function(t){t.preventDefault(),n(e.id)}(t)}},e.text)})),h=Object(u.b)((function(t){return{todos:t.todos}}))((function(t){var e=t.todos;return r.a.createElement("div",null,r.a.createElement("ul",null,e.map((function(t){return r.a.createElement(D,{key:t.id,todo:t})}))))})),g=function(){return r.a.createElement(u.a,{store:T},r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(h,null)),"**After adding a todo, click on it to remove it from the list")};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.8aceb192.chunk.js.map