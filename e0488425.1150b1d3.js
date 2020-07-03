(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(6),c=(n(0),n(139)),i=n(141),r={id:"js13",title:"Communication With Events",sidebar_label:"Event handling"},s={id:"jsbootcamp/js13",title:"Communication With Events",description:"Intro to DOM Events",source:"@site/docs/jsbootcamp/js13.mdx",permalink:"/notebook/docs/jsbootcamp/js13",editUrl:"https://github.com/gsavitha95/notebook/tree/master/notes-website/docs/jsbootcamp/js13.mdx",sidebar_label:"Event handling",sidebar:"someSidebar",previous:{title:"Manipulating the DOM",permalink:"/notebook/docs/jsbootcamp/js18"},next:{title:"Asynchronous code",permalink:"/notebook/docs/jsbootcamp/js14"}},l=[{value:"Intro to DOM Events",id:"intro-to-dom-events",children:[]},{value:"2 ways not to add events",id:"2-ways-not-to-add-events",children:[]},{value:"addEventListener",id:"addeventlistener",children:[]},{value:"Events on Multiple Elements",id:"events-on-multiple-elements",children:[]},{value:"Event Object",id:"event-object",children:[]},{value:"Key Events",id:"key-events",children:[{value:"keydown",id:"keydown",children:[]},{value:"keyup",id:"keyup",children:[]},{value:"keypress",id:"keypress",children:[]},{value:"Exercise",id:"exercise",children:[]}]},{value:"FormEvents &amp; preventDefault",id:"formevents--preventdefault",children:[{value:"preventDefault",id:"preventdefault",children:[]}]},{value:"input and change Events",id:"input-and-change-events",children:[{value:"input",id:"input",children:[]},{value:"change",id:"change",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"intro-to-dom-events"},"Intro to DOM Events"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Events")," - Responding to user inputs and actions"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Types of events"),":"),Object(c.b)("img",{alt:"Docusaurus with Keytar",src:Object(i.a)("assets/eventsintro.png")}),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"All events follow a similar pattern"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Pattern"),":"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"The thing"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Event type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Code to run"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"button"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"click"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"change the color")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"input"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"hits return"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"get the search results")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"image"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"mouseover"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"display img caption")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"for more info visit ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Events"}),"MDN Event reference"))),Object(c.b)("h2",{id:"2-ways-not-to-add-events"},"2 ways not to add events"),Object(c.b)("p",null,"Here we will explore 2 different syntaxes which we should not use"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"all events start with ",Object(c.b)("inlineCode",{parentName:"p"},"on")," word.\n",Object(c.b)("inlineCode",{parentName:"p"},"onEventName = doSomething"))),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"First type actually involves inline html scripting, which is not recommended. It just clutters the markup.")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<button onmouseover="alert(\'You hovered over me!\')">click me!</button>\n<form>\n  <input\n    type="range"\n    min="50"\n    max="100"\n    onclick="console.log(\'clicked the input\')"\n  />\n</form>\n')),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},"We first select an element in Javascript and then do inline html scripting")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'<button id="clicker">CLicker!</button>;\n\nconst clicker = document.querySelector("#clicker");\n\nclicker.onclick = function () {\n  console.log("You clicked me");\n};\nclicker.ondblclick = function () {\n  console.log("Double click");\n};\n\nclicker.onclick = function () {\n  alert("hello");\n};\n//now we lost the previous data.\n//Onclick is considered just like any other property\n')),Object(c.b)("p",null,"if you want to have multiple events to a single element use ",Object(c.b)("inlineCode",{parentName:"p"},"addEventListener")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"addeventlistener"},"addEventListener"),Object(c.b)("p",null,"Specify the event type and a callback to run"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'//Syntax:\nbtn.addEventListener("eventType", function () {}); // the function will execute when the event occurs\n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"we dont use onclick or onmouseover here. we just pass click and mouseover as parameters to addEventListener function")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const button = document.querySelector("h1");\nbutton.addEventListener("click", () => {\n  alert("You clicked");\n});\n\nbutton.addEventListener("click", () => {\n  console.log("Output in console");\n}); // we get both things as output for one event. one inconsole and other as alert\nbutton.addEventListener("mouseover", function () {\n  button.innerText = "Dont hover on me";\n}); // we are permanently changing the innerText, the text doesnt go back to its prev state\n// to get the text to its prev state. there is another event called `mouseout` use that.\nbutton.addEventListener("mouseout", function () {\n  button.innerText = "CLick me!";\n}); // bnow text changes back to prev state\n')),Object(c.b)("p",null,"addEventListener() is great, because it is just one method and it will attach to any type of event listener you want(click, double click, mouseover etc...)"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"if you see ",Object(c.b)("inlineCode",{parentName:"p"},"button.onclick")," property, it is not attached to anything. It returns null as output"))),Object(c.b)("div",{className:"admonition admonition-important alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"dont use arrow functions as call backs, because sometimes we want to access ",Object(c.b)("inlineCode",{parentName:"p"},"this")," inside the function. and arrow functions doesnt do well with ",Object(c.b)("inlineCode",{parentName:"p"},"this")))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"events-on-multiple-elements"},"Events on Multiple Elements"),Object(c.b)("p",null,"This is the important topic of event handling. We know how to add multiple events to a single element. how about multiple elements having a single event? How do we take every button on page and add a click event?"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"select a group of items u want to add events to"),Object(c.b)("li",{parentName:"ol"},"loop over them and add eventlistener to each")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"this")," refers to individual object onto which we are listening over when adding multiple events")),Object(c.b)("p",null,"Exercise:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'\n<body>\n<h1>Pick a color</h1>\n<section class="boxes" id="container"></section>\n<script src="app.js"><\/script>\n</body>\n//CSS file\n#container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.box {\n  width: 200px;\n  height: 200px;\n}\nh1 {\n  text-align: center;\n}\n\nconst colors = ["red","yellow","orange","green","blue","purple","indigo","violet"];\nconst boxes = document.querySelector("#container");\nconst heading = document.querySelector("h1");\nconst pickAColor = function () {\n  console.log(this);\n  heading.style.color = this.style.backgroundColor;\n};\n\nfor (let color of colors) {\n  const box = document.createElement("div");\n  box.style.backgroundColor = color;\n  box.classList.add("box");\n  boxes.appendChild(box);\n  box.addEventListener("click", pickAColor);\n}\n\n')),Object(c.b)("div",{className:"admonition admonition-important alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"So when the function pickAColor is called, ie., when we click on a box, we are never executing pickAColor ourselves, its being called for us. An Event object is passed to it"),Object(c.b)("p",{parentName:"div"},Object(c.b)("inlineCode",{parentName:"p"},"Event object")," is automatically called every time we are not capturing it"))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"event-object"},"Event Object"),Object(c.b)("p",null,"Contains information about a particular event"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const pickAColor = function (evt) {\n  console.log(evt); //MouseEvent Object is returned\n};\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'document.body.addEventListener("keypress", function (e) {\n  console.log(e);\n}); //RT: KeyboardEvent\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"KeyboardEvent")," - Conatins info about the key we pressed and othe useful info about keys"),Object(c.b)("hr",null),Object(c.b)("h2",{id:"key-events"},"Key Events"),Object(c.b)("p",null,"There are atleast 3 types of keyevents."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Keyup, keydown, keypress")),Object(c.b)("h3",{id:"keydown"},"keydown"),Object(c.b)("p",null,"A Key has been pressed."),Object(c.b)("p",null,"When u hold or press any key it is considered as keydown event."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"keydown runs for any potential keys whether they actually change the input or not"))),Object(c.b)("p",null,"All key presses are considered as keydown events.\neg: alt/option, cmd, ctrl, caps, all alphabets, space, shift, tab etc."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<input type="text" id="username" placeholder="username" type="text" />\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const username = document.querySelector("#username");\n//we would want event object, because it contain info about which key is pressed\nusername.addEventListener("keydown", function (e) {\n  console.log("KEY DOWN");\n});\n')),Object(c.b)("h3",{id:"keyup"},"keyup"),Object(c.b)("p",null,"A key has been released."),Object(c.b)("p",null,"For all keys, first a keydown event is fired followed by a keyup."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"keyup only occurs when u release a key"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const username = document.querySelector("#username");\n\nusername.addEventListener("keydown", function (e) {\n  console.log("KEY DOWN");\n});\nusername.addEventListener("keyup", function (e) {\n  console.log("KEY UP");\n});\n')),Object(c.b)("h3",{id:"keypress"},"keypress"),Object(c.b)("p",null,"A key that normally produces a character value has been pressed.\nIf the key is not a modifier key, the keypress event is sent"),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This event is obsolete and differs from browser to browser, better not to use it much"))),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},Object(c.b)("strong",{parentName:"p"},"Special cases"),":\nSome keys toggle the state of an indicator light; these include keys such as ",Object(c.b)("inlineCode",{parentName:"p"},"Caps Lock"),", ",Object(c.b)("inlineCode",{parentName:"p"},"Num Lock"),", and ",Object(c.b)("inlineCode",{parentName:"p"},"Scroll Lock"),". On Windows and Linux, these keys dispatch only the ",Object(c.b)("inlineCode",{parentName:"p"},"keydown and keyup events"),". However, a limitation of the macOS event model causes ",Object(c.b)("inlineCode",{parentName:"p"},"Caps Lock")," to dispatch only the ",Object(c.b)("inlineCode",{parentName:"p"},"keydown")," event"))),Object(c.b)("p",null,"When ypu type a key K in the input. The order of key sequenes would be ",Object(c.b)("inlineCode",{parentName:"p"},"Keydown, keypress, keyup")),Object(c.b)("p",null,"When you press something like shift we only get keydown and keyup"),Object(c.b)("p",null,"Capital letter -> Shift + Letter -> KeyDown(2) , keypress, keyup(2) -> keydown and keyup for both shift and letter"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"keypress only works when we have changing input. like aplhabets, doesnt work with arrows, caps, shift, tab, cmd etc."),Object(c.b)("p",{parentName:"div"},"But when you hit return, it is considered as a keypress"))),Object(c.b)("h3",{id:"exercise"},"Exercise"),Object(c.b)("p",null,"Lets make a todo list"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<h1>Shopping list</h1>\n<input type="text" name="" id="addItem" placeholder="add items in your list" />\n<ul id="items"></ul>\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const input = document.querySelector("#addItem");\nconst ulItems = document.querySelector("#items");\n\ninput.addEventListener("keypress", function (e) {\n  // doesnt allow spaces in the beginning\n  if (e.which === 32 && !this.value.length) {\n    e.preventDefault();\n  }\n  if (e.key === "Enter") {\n    if (!this.value) return;\n    const item = document.createElement("li");\n    item.innerText = this.value;\n    console.log(item);\n    this.value = "";\n    ulItems.appendChild(item);\n  }\n});\n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"For more on events ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Events"}),"WEBApi - MDN"))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"formevents--preventdefault"},"FormEvents & preventDefault"),Object(c.b)("p",null,"When we press submit, we get navigated to other page or the page gets refreshed if we dont specify any url in action."),Object(c.b)("p",null,"Lets say we want to stop the form from getting refreshed when we submit."),Object(c.b)("p",null,"capture the submit event and stop it from its default behaviour."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<form id="signup">\n  <input type="text" placeholder="credit card" id="cc" />\n  <label>\n    I agree to T&C\n    <input type="checkbox" id="terms" />\n  </label>\n  <select id="veggies">\n    <option value="brinjal">Brinjal</option>\n    <option value="tomato">Tomato</option>\n    <option value="onion">Onion</option>\n  </select>\n  <button type="submit">Submit</button>\n</form>\n')),Object(c.b)("h3",{id:"preventdefault"},"preventDefault"),Object(c.b)("p",null,"Default behaviour is prevented"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const form = document.querySelector("#signup");\nform.addEventListener("submit", function (e) {\n  e.preventDefault(); //when this is executed default behaviour is prevented\n});\n')),Object(c.b)("p",null,"Now this leaves us free to now extract data from the submit event. If we wanted all data at once and send it to an api using AJAX or using a client side request, we can do that. We have flexibility to do something woth the data and we can still capture the submit event. What's nice about doing this way as opposed to capturing each input as it changes every single time is we dont need to attach a bunch of event listeners for every input, by adding a submit event listener there's just one event we are waiting for, we tell it not to behave, normally it behaves and then we can extract our data in that function."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const creditCardInput = document.querySelector("#cc");\nconst termszcheckBox = document.querySelector("#terms");\nconst veggiesSelect = document.querySelector("#veggies");\nconst form = document.querySelector("#signup");\nform.addEventListener("submit", function (e) {\n  console.log("cc", creditCardInput.value); //cc 12343434535\n  console.log("terms", termszcheckBox.checked); // terms true\n  // we get the value from value attribute, eg: we get brinjal as output instead of Brinjal\n  console.log("veggiesSelect", veggiesSelect.value); //veggiesSelect tomato\n  e.preventDefault();\n});\n')),Object(c.b)("p",null,"We are accessing data from the form. After accessing these values , we can generally send form data to DB or append something to page using form data\nWe can put preventDefault() at the top of the function, it still works the same"),Object(c.b)("hr",null),Object(c.b)("h2",{id:"input-and-change-events"},"input and change Events"),Object(c.b)("h3",{id:"input"},"input"),Object(c.b)("p",null,"This event is triggered whenever an input changes .We can actually listen to all 3 above inputs(textbox, checkbox and select) at once using a single event type."),Object(c.b)("p",null,"Our goal is to create a datastructure which automatically updates whenever a user enters value in input, instead of waitiing for user to submit(like from the above section)"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'creditCardInput.addEventListener("input", (e) => {\n  console.log("CC Changed", e); // the event is triggered whenever we type something in the input box\n});\n')),Object(c.b)("p",null,"Storing value to an object as soon as user changes the input. These events trigger before user clicks submit."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const formData = {};\ncreditCardInput.addEventListener("input", (e) => {\n  console.log("CC Changed", e);\n  //formData[\'cc\'] = creditCardInput.value; -> hard coding. instead use event object properties to get value\n  formData["cc"] = e.target.value;\n});\nveggiesSelect.addEventListener("input", (e) => {\n  console.log("veggie change", e);\n  formData["veggie"] = e.target.value;\n});\ntermszcheckBox.addEventListener("input", (e) => {\n  console.log("terms changed", e);\n  formData["terms"] = e.target.checked;\n});\n')),Object(c.b)("p",null,"Refactor the above code.\nadd a ",Object(c.b)("inlineCode",{parentName:"p"},"name")," attribute to each html input"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<input type="text" placeholder="credit card" id="cc" name="creditcard" />\n<label>\n  I agree to T&C\n  <input type="checkbox" id="terms" name="agreeToterms" />\n</label>\n<select id="veggies" name="selectedVeggie">\n  <option value="brinjal">Brinjal</option>\n  <option value="tomato">Tomato</option>\n  <option value="onion">Onion</option>\n</select>\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'for (let input of [creditCardInput, termszcheckBox, veggiesSelect]) {\n  input.addEventListener("input", (e) => {\n    if (e.target.type === "checkbox")\n      formData[e.target.name] = e.target.checked;\n    else formData[e.target.name] = e.target.value;\n  });\n}\n// more sophisticated code\nfor (let input of [creditCardInput, termszcheckBox, veggiesSelect]) {\n  input.addEventListener("input", ({ target }) => {\n    // destructure event object since we only use target\n    // destructure more coz we use only these 4 properties in target\n    const [name, type, value, checked] = target;\n    formData[name] = type === "checkbox" ? checked : value;\n  });\n}\n')),Object(c.b)("p",null,"We can add multiple events under single event listener as long as we have ",Object(c.b)("inlineCode",{parentName:"p"},"name")," attribute."),Object(c.b)("h3",{id:"change"},"change"),Object(c.b)("p",null,"if we change the above event type to change it will still behave the same except for the textbox. Textbox input change wont trigger until we lose focus over it or press return key after entering complete data or focus it, unlike input where it triggers event for every single key typed(every single letter changed in text box)."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'for (let input of [creditCardInput, termszcheckBox, veggiesSelect]) {\n  input.addEventListener("change", ({ target }) => {\n    // destructure event object since we only use target\n    // destructure more coz we use only these 4 properties in target\n    const [name, type, value, checked] = target;\n    formData[name] = type === "checkbox" ? checked : value;\n  });\n}\n')),Object(c.b)("p",null,"This type of pattern (using name attribute) is pretty common especially if we get to something like ",Object(c.b)("strong",{parentName:"p"},"react")," and some of the other frameworks or libraries out there. We use ",Object(c.b)("strong",{parentName:"p"},"name of an input as a key to store the value from that input")," under, to create a nice object that contains all of our form data at once."))}p.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||c;return n?o.a.createElement(m,r(r({ref:t},l),{},{components:n})):o.a.createElement(m,r({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var l=2;l<c;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},140:function(e,t,n){"use strict";var a=n(0),o=n(34);t.a=function(){return Object(a.useContext)(o.a)}},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(140);function o(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);