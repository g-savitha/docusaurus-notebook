(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),i=(n(0),n(139)),c={id:"js12",title:"Intro to DOM",sidebar_label:"Selecting the DOM"},s={id:"jsbootcamp/js12",title:"Intro to DOM",description:"Introduction",source:"@site/docs/jsbootcamp/js12.md",permalink:"/notebook/docs/jsbootcamp/js12",editUrl:"https://github.com/savithagollamudi/notebook/tree/master/notes-website/docs/jsbootcamp/js12.md",sidebar_label:"Selecting the DOM",sidebar:"someSidebar",previous:{title:"Object Methods and 'This' keyword",permalink:"/notebook/docs/jsbootcamp/js11"},next:{title:"Manipulating the DOM",permalink:"/notebook/docs/jsbootcamp/js18"}},r=[{value:"Document Object",id:"document-object",children:[{value:"Document (root of the tree)",id:"document-root-of-the-tree",children:[]}]},{value:"Methods for selecting DOM Objects",id:"methods-for-selecting-dom-objects",children:[{value:"getElementById()",id:"getelementbyid",children:[]},{value:"getElementsByTagName()",id:"getelementsbytagname",children:[]},{value:"getElementsByClassName()",id:"getelementsbyclassname",children:[]},{value:"querySelector() &amp; querySelectorAll()",id:"queryselector--queryselectorall",children:[]}]}],l={rightToc:r};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"introduction"},"Introduction"),Object(i.b)("p",null,'DOM is a JS representation of a webpage. Its your JS "window " on to the webpage.\nIts a branch of objects that you can interact with, via JS. Browser turns out webpage into bunch of objects.'),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://miro.medium.com/max/1120/1*h5XbI4n8eIKnmaeWPRmKOQ.png",alt:"dom-image"}))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Content inside the tags is the property of object"))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"document-object"},"Document Object"),Object(i.b)("p",null,"DOM is a representation of a document object made with a bunch of objects & they are assembled into a tree."),Object(i.b)("h3",{id:"document-root-of-the-tree"},"Document (root of the tree)"),Object(i.b)("p",null,"Document object is our entry point into the world of DOM. It contains representations of all the content on a page, plus tons of useful methods and properties."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"To see underlying document object"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"console.dir(document); //shows the methods and properties of the doc object\n")),Object(i.b)("p",{parentName:"div"},"If you simply type document in the console. it prints it out the html structure(not very useful)"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"document.all; //contains every single ele on the page -> every single ele is turned into an object.\n//in turn those objects have tons of properties and methods\ndocument.img; //contains all images on the page\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"methods-for-selecting-dom-objects"},"Methods for selecting DOM Objects"),Object(i.b)("p",null,"HTML code"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <title>Dom manipulation</title>\n    <link rel="stylesheet" href="app.css" />\n  </head>\n  <body>\n    <script src="app.js"><\/script>\n    <h1 class="header">My Web page</h1>\n    <p>\n      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore\n      laudantium temporibus, nam perspiciatis corporis eligendi deleniti porro\n      facilis nesciunt. Maiores laboriosam reprehenderit porro sunt consequatur\n      quae cupiditate officiis voluptatem laborum?\n    </p>\n    <p class="special">dfdjfndlkf</p>\n    <p id="main">\n      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus omnis\n      similique itaque! Quas, voluptatum quasi sapiente consectetur cupiditate\n      vel omnis, dolore odit sequi, doloribus deleniti est ipsum quo numquam\n      eius.\n    </p>\n    <form action="">\n      <input type="text" name="" id="" placeholder="text" />\n      <input type="password" name="" id="" placeholder="password" />\n      <input type="submit" />\n    </form>\n    <ul>\n      <li class="special">First</li>\n      <li>2nd</li>\n      <li class="special">3rd</li>\n    </ul>\n    <img\n      src="https://images.unsplash.com/photo-1573920111312-04f1b25c6b85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"\n      alt="bear"\n      id="bear-photo"\n    />\n    <section>\n      <ul>\n        <li>carrots</li>\n        <li class="special">potatoes</li>\n        <li>tomatoes</li>\n      </ul>\n    </section>\n  </body>\n</html>\n')),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getelementbyid"},"getElementById()"),Object(i.b)("p",null,"It takes an ID and finds the matching element that contains the ID on it and it ",Object(i.b)("inlineCode",{parentName:"p"},"returns that object"),"\nSyntax:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"document.getElementByID();\n")),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"We are only supposed to have one ID per page or one of each ID. If have multiple IDs with same name, we get only the first one as matching output."),Object(i.b)("p",{parentName:"div"},"If we dont have a matching id ",Object(i.b)("inlineCode",{parentName:"p"},"null")," is returned"))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Every tag in html is an HTML element."),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"<p>")," proto :HTMLParagraphElement , ",Object(i.b)("inlineCode",{parentName:"p"},"<img>")," proto: HTMLImageElement"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You'll learn more when you get to prototypes, constructor functions and classes.. All you need to know now is there a diff categories of elements on the page and some of them have their own. These are different patterns of objects")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getelementsbytagname"},"getElementsByTagName()"),Object(i.b)("p",null,"Select an element by its type. like all ",Object(i.b)("inlineCode",{parentName:"p"},"<h1>s & all <p>s")," on the page\nSyntax:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'document.getElementsByTagName(); // RT: HTMLCollection\n//example:\ndocument.getElementsByTagName("input"); // RT: HTMLCollection(3) [input,input,input]\n//and each input is :HTMLInputElement\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"RT looks like an array, but its not. Elements returned are stored in a list. Even though we have one element, it is still retuned as a list.\nWe can access elements of it by indices and we can iterate over it like arrays. but we cant apply array methods over it."),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const inputs = document.getElementsByTagName("input"); //  RT: HTMLCollection(3) [input,input,input]\ninputs[0]; // 1st input html element\n//<input type="text" name="" id="" placeholder="text" />\n\ninputs.length; //3\ninputs[3]; //undefined coz we only have 3\ninputs.pop(); //error\ninputs.push(); //error\ninputs.includes(); //error\nfor (let input of inputs) console.log(input); //html elements (but remember they are objects)\n')),Object(i.b)("p",{parentName:"div"},"We only have access to objects methods"))),Object(i.b)("p",null,"To turn ito an array ",Object(i.b)("inlineCode",{parentName:"p"},"use spread operator")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const arr = [...inputs]; //arr has input elements as arr elements\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"//to get values of inputs by iterating\nfor (let ip of inputs) console.log(ip.value); //the values which u entered in the input\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getelementsbyclassname"},"getElementsByClassName()"),Object(i.b)("p",null,"Gets elements by class name. RT : list"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'document.getElementsByClassName("header"); //HTMLCOllection [h1.header]\ndocument.getElementsByClassName("special"); //HTMLCOllection [li.special,li.special,li.special]\n')),Object(i.b)("p",null,"Lets say we want to get only classes of special which are there in ul"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'document.getElementsByTagName("ul "); // this gives an entire list\n//take only first one\nconst ul = document.getElementsByTagName("ul")[0];\n//ul is an object now. it has its own classNames and tagNames methods now\nul.getElementsByClassName("special"); // now we get only elements under ul with special as class name\nul.getElementsByTagName("li"); // we get 3 lis coz we have 3 lis inside [li.special,li,li.special]\n')),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"getElementById() doesnt work this way coz ids are supposed to be unique across the entire document.\nWe dont have access to ul.getElementById()"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"queryselector--queryselectorall"},"querySelector() & querySelectorAll()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A new all in one method to select ",Object(i.b)("inlineCode",{parentName:"li"},"a single element")),Object(i.b)("li",{parentName:"ul"},"Pass in a CSS selector")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'//same like getElementsByTagName but this returns only first element, there comes querySelectorAll() to get all elements\ndocument.querySelector("h1"); //finds first h1 element\ndocument.querySelector("#red"); //finds first element with id as red\ndocument.querySelector(".big"); //finds first element with class as big\ndocument.querySelector(".special"); //paragraph elemtnt\n//lets say u wanted first element with special as class name\ndocument.querySelector("li.special");\ndocument.querySelector("section li.special"); //potatoes\ndocument.querySelector("section ul li.special"); //potatoes\n//selecting base on attributes\ndocument.querySelector(\'input[type="password"]\'); // password input\n')),Object(i.b)("p",null,"It can replicate functionality of all the above methods. The way it works is we pass a CSS selector"),Object(i.b)("h4",{id:"queryselectorall"},"querySelectorAll()"),Object(i.b)("p",null,"same idea, but returns a ",Object(i.b)("inlineCode",{parentName:"p"},"a collection")," of matching elements"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'document.querySelectorAll(".special"); //RT : NodeList [p.special], [li.special], [li.special], [li.special]\ndocument.querySelectorAll("input"); //RT: NodeList [input,input,input]\n')),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Note that We are getting return type as NodeList we got HTMLCollection for getElementsByTagName() & getElementsByClassName()\nNodeList is another array like obj"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"query selector is bit less performant compared to getElement methods")))}b.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,u=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?o.a.createElement(u,s(s({ref:t},l),{},{components:n})):o.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<i;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);