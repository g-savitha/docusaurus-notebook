(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(139)),c={id:"js1",title:"Introduction",sidebar_label:"Values & variables"},i={id:"jsbootcamp/js1",title:"Introduction",description:"Values & Variables",source:"@site/docs/jsbootcamp/js1.md",permalink:"/notebook/docs/jsbootcamp/js1",editUrl:"https://github.com/gsavitha95/notebook/tree/master/notes-website/docs/jsbootcamp/js1.md",sidebar_label:"Values & variables",sidebar:"someSidebar",next:{title:"Values & Variables contd.",permalink:"/notebook/docs/jsbootcamp/js2"}},l=[{value:"Primitive Types",id:"primitive-types",children:[]},{value:"Number",id:"number",children:[]},{value:"NaN &amp; Infinity",id:"nan--infinity",children:[]},{value:"Unary Operators",id:"unary-operators",children:[]},{value:"Variables &amp; Let",id:"variables--let",children:[]},{value:"Intro to const",id:"intro-to-const",children:[]},{value:"Legacy of Var",id:"legacy-of-var",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"values--variables"},"Values & Variables"),Object(o.b)("hr",null),Object(o.b)("h2",{id:"primitive-types"},"Primitive Types"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Number (+ve, -ve, whole numbers, integers & decimal)"),Object(o.b)("li",{parentName:"ol"},"String"),Object(o.b)("li",{parentName:"ol"},"Boolean"),Object(o.b)("li",{parentName:"ol"},"Null"),Object(o.b)("li",{parentName:"ol"},"Undefined"),Object(o.b)("li",{parentName:"ol"},"Symbol & BigInt")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"number"},"Number"),Object(o.b)("p",null,"50, 7, 33.7, 82.0, -777.8"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"50 + 5; //55\n90 - 1; //89\n111 * 7; //777\n400 / 25; //16\n27 % 2; //1\n2 ** 3; //8\n10 / 3; //3.33333 ... 5 (Irrational number -> we have millions of 3s compiler automatically appends 5 & gives o/p)\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"nan--infinity"},"NaN & Infinity"),Object(o.b)("p",null,"NaN(Not a number) -> a numeric value that represents something that is not a number"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"0 / 0; //NaN\n1 + NaN; //NaN\n1 / 0; //Infinity\n1 / 0; //-Infinity\n0 / 0; //NaN\n0 / -0; //NaN\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"unary-operators"},"Unary Operators"),Object(o.b)("p",null,"+= , -=, ++, --,","*","=,/=, %=, -, +"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("h3",Object(a.a)({parentName:"li"},{id:"unary-negation--"}),"Unary negation (-)"),Object(o.b)("p",{parentName:"li"},"The unary negation operator precedes its operand and negates it."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'Syntax: -x;\n\nExamples: var x = 3;\ny = -x; // y = -3, x = 3\n\n// Unary negation operator can convert non-numbers into a number\nvar x = "4";\ny = -x; // y = -4\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("h3",Object(a.a)({parentName:"li"},{id:"unary-plus-"}),"Unary plus (+)"),Object(o.b)("p",{parentName:"li"},"The unary plus operator precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already. Although unary negation (-) also can convert non-numbers, unary plus is the fastest and preferred way of converting something into a number, because it does not perform any other operations on the number. It can convert string representations of integers and floats, as well as the non-string values true, false, and null. Integers in both decimal and hexadecimal (0x-prefixed) formats are supported. Negative numbers are supported (though not for hex). If it cannot parse a particular value, it will evaluate to NaN"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'Syntax: +x;\n\nExamples: +3 + // 3\n"3" + // 3\ntrue + // 1\nfalse + // 0\nnull + // 0\n  function (val) {\n    return val;\n  }; // NaN\n')))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"variables--let"},"Variables & Let"),Object(o.b)("p",null,"Variables are of two types - let & const"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"Syntax : let someName = value;\n\nExamples:\nlet hens = 4;\nhens -1; //3 -> this doesnt change the value stored in hens\nhens; //4\nhens--; //4 (post decrement -> value will be updated in next line) -> this does change the value\nhens; //3\nhens = hens-1; //2 -> this does\nhens //2\nlet avg = 98.7\nlet avg = 0 // Syntax error : avg already declared\n\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Note : Name the variables using camel case\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"intro-to-const"},"Intro to const"),Object(o.b)("p",null,"Const works just like let, except you cannot change the value"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Once you learn about arrays and objects you'll see where const makes more sense than let"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const hens = 4;\nhens = 20; //error\n\nconst age = 17;\nage = age + 1; //error\n\nconst pi = 3.14;\nconst minHeight = 60;\nconst count = 10;\nlet count = 3; //Error: You cant have variable with same name even though one is const and other is let\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"legacy-of-var"},"Legacy of Var"),Object(o.b)("p",null,"Before let and const, var was the only way to declare variables"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var dist = 7.4;\n")))}b.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?r.a.createElement(d,i(i({ref:t},s),{},{components:n})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);