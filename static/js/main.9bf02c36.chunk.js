(this["webpackJsonptraining-react"]=this["webpackJsonptraining-react"]||[]).push([[0],{127:function(e,t,n){},424:function(e,t,n){},430:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n(17),r=n.n(a),s=(n(127),n(50)),i=n(51),o=n(53),h=n(52),l=(n(128),n(1)),u=function(e){var t=e.name;return Object(l.jsxs)("div",{className:"bg-pink dib pa3 br3 ma2 grow bw2 shadow-5 tc",children:[Object(l.jsx)("img",{alt:"face",src:"https://robohash.org/set_set4/".concat(t,"?size=250x250"),className:"card-img-top"}),Object(l.jsx)("div",{children:Object(l.jsx)("h2",{children:t})})]})},j=function(e){var t=e.catNames;return Object(l.jsx)("div",{children:t.map((function(e,n){return Object(l.jsx)(u,{name:t[n].name},n)}))})},d=function(e){var t=e.searchChange;return Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"pa3 ba b--orange bg-lightest-blue",type:"search",placeholder:"Search Kittens",onChange:t})})},b=(n(424),n(425),function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll",border:"1px black solid",height:"500px"},children:e.children})}),f=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:"Miaou ! > d\xe9sol\xe9 il y a une erreur"}):this.props.children}}]),n}(c.Component),m=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={catNames:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({catNames:t})}))}},{key:"render",value:function(){var e=this.state,t=e.catNames,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"KITTeN FRieNDS"}),Object(l.jsx)(d,{searchChange:this.onSearchChange}),Object(l.jsx)(b,{children:Object(l.jsx)(f,{children:Object(l.jsx)(j,{catNames:c})})})]}):Object(l.jsx)("h1",{className:"f1",children:"LoAdinG"})}}]),n}(c.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,431)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(429);r.a.render(Object(l.jsx)(m,{}),document.getElementById("root")),p()}},[[430,1,2]]]);
//# sourceMappingURL=main.9bf02c36.chunk.js.map