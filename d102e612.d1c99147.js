(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(6),c=(n(0),n(139)),r=n(141),s={id:"js14",title:"Asynchronous code",sidebar_label:"Asynchronous code"},i={id:"jsbootcamp/js14",title:"Asynchronous code",description:"The call stack",source:"@site/docs/jsbootcamp/js14.mdx",permalink:"/notebook/docs/jsbootcamp/js14",editUrl:"https://github.com/savithagollamudi/notebook/tree/master/notes-website/docs/jsbootcamp/js14.mdx",sidebar_label:"Asynchronous code",sidebar:"someSidebar",previous:{title:"Communication With Events",permalink:"/notebook/docs/jsbootcamp/js13"},next:{title:"Callback Hell",permalink:"/notebook/docs/jsbootcamp/js19"}},l=[{value:"The call stack",id:"the-call-stack",children:[]},{value:"JS is single threaded",id:"js-is-single-threaded",children:[]},{value:"How Asynchronous callbacks work?",id:"how-asynchronous-callbacks-work",children:[{value:"But how does browser do that?",id:"but-how-does-browser-do-that",children:[]},{value:"concurrency and the event loop",id:"concurrency-and-the-event-loop",children:[]},{value:"event loop",id:"event-loop",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"the-call-stack"},"The call stack"),Object(c.b)("img",{alt:"call stack",src:Object(r.a)("assets/callstack.png")}),Object(c.b)("p",null,"Call stack is a tool or feature of a JS, helps JS to keep track of where ",Object(c.b)("inlineCode",{parentName:"p"},"it")," is in your code. If you have multiple functions and some of those may call other functions, using call stack mechanism JS interpreter keeps track of its place. Its how JS knows which function is currently being run and which functions are not done yet. (Last in First Out.)"),Object(c.b)("img",{alt:"call stack",src:Object(r.a)("assets/csworking.png")}),Object(c.b)("p",null,"Visualized way:"),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://miro.medium.com/max/1200/1*B2v5_pqD-zbzJNOhAc-A2A.gif",alt:"callstack"}))),Object(c.b)("h2",{id:"js-is-single-threaded"},"JS is single threaded"),Object(c.b)("p",null,"At any given point in time, that single JS thread is running atmost one line of JS code. Its not multi tasking, it does one thing at a time."),Object(c.b)("p",null,"User may not be able to do another task until one is completed."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'console.log("first");\nalert("hi");\nconsole.log("second");\n')),Object(c.b)("p",null,"you wont get output of 2nd console.log until alert hi is closed.\nWhen we try to access data from a database or an api or trying to save something or to set timer, we cant let user to keep on waiting until we get the data. we have a work around for this ",Object(c.b)("strong",{parentName:"p"},"Asynchronous callbacks.")),Object(c.b)("h2",{id:"how-asynchronous-callbacks-work"},"How Asynchronous callbacks work?"),Object(c.b)("p",null,"For the processes that take time we pass a callback function and those functions will be executed at the appropriate time."),Object(c.b)("p",null,"Set timer for 3 seconds."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'console.log("first");\nsetTimeout(() => {\n  console.log("I print after 3 sec");\n}, 3000);\nconsole.log("second");\n')),Object(c.b)("p",null,"But how does JS know to set a timer for 3 seconds if it can only do 1 thing at a time? how does it remember to wait for 3 seconds and call that fn after 3 sec?"),Object(c.b)("p",null,"The trick here is ",Object(c.b)("strong",{parentName:"p"},"The browser does the work"),". JS is not same as our browser, it is a language that is implemented in our browser. Generally ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("em",{parentName:"strong"},"browsers"))," like chrome, safari and IE ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("em",{parentName:"strong"},"are written in a different programming language"))," (C++ here for those 3)."),Object(c.b)("p",null,"Browser itself is capable of doing certain tasks, where JS sucks at or things that take time are handed off to the browser."),Object(c.b)("div",{className:"admonition admonition-important alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"JS is not keeping track of timer , it is not sending an API request. ",Object(c.b)("strong",{parentName:"p"},"The browser actually handles it")))),Object(c.b)("h3",{id:"but-how-does-browser-do-that"},"But how does browser do that?"),Object(c.b)("p",null,"Browsers come with web API that are able to handle certain tasks in the background(like making requests or setTimeOut). The JS call stack recognizes these web API functions and passes themoff to the browser to take care of. Once the browser finishes those tasks they return and are pushed onto the stack as callback."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'console.log("first"); // ran by javascript\n//js passes entire setTimeOut to be run by C++ or the language in which browser is implemented in.\n//and continues executing next line of code\nsetTimeout(function () {\n  console.log("I print after 3 sec");\n}, 3000);\nconsole.log("second"); // ran by javascript\n')),Object(c.b)("p",null,"Once the browser finishes of setTimeOut it asks JS to run that callback . It places that callback on the call stack so that JS knows to run that function. JS doesnt keep the time. Same thing with making req, JS doesnt make the req itself the browser and the web api do."),Object(c.b)("h3",{id:"concurrency-and-the-event-loop"},"concurrency and the event loop"),Object(c.b)("p",null,"The reason why we can do things concurrently is that browser is more than just runtime."),Object(c.b)("img",{alt:"Async code behind the scenes",src:Object(r.a)("assets/asyncArchitecture.png")}),Object(c.b)("p",null,"This diagram basically looks identical to Node, instead of Web apis we have c++ apis(coz browser is implemented in c++) and the threading being hidden from us is by c++."),Object(c.b)("img",{alt:"concurrency",src:Object(r.a)("assets/concurrency1.png")}),Object(c.b)("p",null,"The setTimeOut api is provided by browser. It doesnt live in V8 source, its the extra we are getting in the environment we are running the javascript"),Object(c.b)("img",{alt:"concurrency",src:Object(r.a)("assets/concurrency2.png")}),Object(c.b)("p",null,"Now that setTimeOut is out of call stack we can execute other lines of code."),Object(c.b)("img",{alt:"concurrency",src:Object(r.a)("assets/concurrency3.png")}),Object(c.b)("p",null,"The timer in web api cant just start modifying our code, it cant chuck stuff on to the stack when its ready if it did, it would randomly appear in middle of the queue. So any of the ",Object(c.b)("inlineCode",{parentName:"p"},"webapis pushes the callbacks onto task queue")," when its done."),Object(c.b)("h3",{id:"event-loop"},"event loop"),Object(c.b)("p",null,"Event loop has the one simple job. Its job is to look at the stack and look at the task queue. ",Object(c.b)("strong",{parentName:"p"},"If the stack is empty"),",it takes the first thing on the queue and pushes it onto the stack which effectively runs it."),Object(c.b)("div",{className:"admonition admonition-important alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Event loop pushes the callback onto stack, only when its empty."))),Object(c.b)("img",{alt:"event loop",src:Object(r.a)("assets/event1.png")}),Object(c.b)("img",{alt:"Event loop",src:Object(r.a)("assets/event2.png")}),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"AJAX requests, DOM, Event Listeners, setTimeOut etc are handled by Web APIs. ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API"}),"list of web apis")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"check video on ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=8aGhZQkoFbQ&feature=youtu.be"}),"event loops")," for more info.")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"To visualize how things work check this ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D"}),"tool"))))}p.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,h=p["".concat(r,".").concat(u)]||p[u]||d[u]||c;return n?o.a.createElement(h,s(s({ref:t},l),{},{components:n})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<c;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},140:function(e,t,n){"use strict";var a=n(0),o=n(34);t.a=function(){return Object(a.useContext)(o.a)}},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(140);function o(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);