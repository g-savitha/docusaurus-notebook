(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(2),r=n(6),a=(n(0),n(139)),c=n(141),s={id:"js17",title:"Prototypes, classes & The New operator",sidebar_label:"Prototypes"},i={id:"jsbootcamp/js17",title:"Prototypes, classes & The New operator",description:"Prototypes introduction",source:"@site/docs/jsbootcamp/js17.mdx",permalink:"/notebook/docs/jsbootcamp/js17",editUrl:"https://github.com/gsavitha95/notebook/tree/master/notes-website/docs/jsbootcamp/js17.mdx",sidebar_label:"Prototypes",sidebar:"someSidebar",previous:{title:"Async and Await",permalink:"/notebook/docs/jsbootcamp/js16"}},l=[{value:"Prototypes introduction",id:"prototypes-introduction",children:[{value:"<code>__proto__</code> vs Object.Prototype",id:"__proto__-vs-objectprototype",children:[]}]},{value:"Factory Functions",id:"factory-functions",children:[]},{value:"Constructor functions",id:"constructor-functions",children:[{value:"new keyword",id:"new-keyword",children:[]}]},{value:"JS Classes - Syntactical Sugar",id:"js-classes---syntactical-sugar",children:[]},{value:"Extends, super, subclasses",id:"extends-super-subclasses",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"prototypes-introduction"},"Prototypes introduction"),Object(a.b)("h4",{id:"what-on-earth-are-prototypes"},"What on earth are prototypes?"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"MDN :")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Prototypes are the mechanism by which JavaScript objects inherit features from one another.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"JavaScript is often described as a prototype-based language \u2014 to provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from.")),Object(a.b)("p",null,"What does this mean?"),Object(a.b)("p",null,"Lets take an eample of Array"),Object(a.b)("img",{alt:"arrm",src:Object(c.a)("assets/arrmethods.png")}),Object(a.b)("p",null,"all the methods which we use all the time start with Array.prototype"),Object(a.b)("img",{alt:"arrss1",src:Object(c.a)("assets/arrss1.png")}),Object(a.b)("p",null,"If we look at this array, we dont see any methods over here.."),Object(a.b)("p",null,"Lets define our own method laugh."),Object(a.b)("img",{alt:"arrss2",src:Object(c.a)("assets/arrss2.png")}),Object(a.b)("p",null,"We have a method laugh. When we call push(), we dont see push under our methods.\nBut push is under ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"__proto__"))),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"__proto__")," is a property that references the array prototype. Prototype is a template object, for in this case arrays. It contains a bunch of methods typically, that all arrays will have access to. Rather than defininig individually for every single array a seperate copy is made. All arrays share a single property called ",Object(a.b)("inlineCode",{parentName:"p"},"__proto__"),". Prototype is a blue print object."),Object(a.b)("p",null,"If you look at ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype")," you have list of all the methods arrays have access to."),Object(a.b)("p",null,"We can create our own objects and set its prototype to Array.prototype, now we'll have access to those array methods in our version of the array."),Object(a.b)("p",null,"Add our methods to any Object's prototype:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'String.prototype.angry = () => {\n  alert("GO AWAY!!");\n};\n\nconst cat = "blue";\ncat.angry();\n\n/*\nString.prototype\nString {"", angry: \u0192, constructor: \u0192, anchor: \u0192, big: \u0192, \u2026}\nangry: () => { alert("GO AWAY!!"); } // we have our method added to String\nanchor: \u0192 anchor()\nbig: \u0192 big()\nblink: \u0192 blink()\nbold: \u0192 bold()\ncharAt: \u0192 charAt()\ncharCodeAt: \u0192 charCodeAt()\ncodePointAt: \u0192 codePointAt()\nconcat: \u0192 concat()\nconstructor: \u0192 String()*/\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'String.prototype.yell = function () {\n  console.log(this);\n};\n\n"hello".yell();\n// output:\n// hello -> here `this` refers to our string\n\nString.prototype.yell = function () {\n  console.log(this.toUpperCase());\n};\n//HELLO\nString.prototype.yell = function () {\n  return `OMG!!!${this.toUpperCase()}!!!`;\n};\n\n"get away".yell();\n\n//OMG!!!GET AWAY!!!\n')),Object(a.b)("p",null,"We can override existing methods"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'Array.prototype.pop = function () {\n  return "Sorry i cant pop off that element";\n};\n\n[1, 2, 3].pop();\n//Sorry i cant pop off that element;\n')),Object(a.b)("h3",{id:"__proto__-vs-objectprototype"},Object(a.b)("inlineCode",{parentName:"h3"},"__proto__")," vs Object.Prototype"),Object(a.b)("p",null,"Object.Prototype here Array.Prototype is an actual object where we add methods or the properties to. This is the template object"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"__proto__")," is a reference to the Prototype ","[Array.Prototype object]",", its a property name under a particular array or String or object."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"MDN:")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"It's important to understand that there is a distinction between an object's prototype (available via Object.getPrototypeOf(obj), or via the deprecated ",Object(a.b)("inlineCode",{parentName:"p"},"__proto__")," property) and the prototype property on constructor functions.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The former is the property on each instance, and the latter is the property on the constructor. That is, Object.getPrototypeOf(new Foobar()) refers to the same object as Foobar.prototype")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"factory-functions"},"Factory Functions"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'function hex(r, g, b) {\n  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);\n}\n\nfunction rgb(r, g, b) {\n  return `(${r}, ${g}, ${b})`;\n}\n')),Object(a.b)("p",null,"Lets write a factory function, which would make an object that automatically had a hex method and an rgb method."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'//convert rgb to hex\nfunction makeColor(r, g, b) {\n  const color = {};\n  color.r = r;\n  color.g = g;\n  color.b = b;\n  //since we store these methods in an object we  dont need to pass the parameters\n  //object already have r,g,b values.. we can use them\n  color.rgb = function () {\n    const { r, g, b } = this;\n    return `(${r}, ${g}, ${b})`;\n  };\n  color.hex = function () {\n    const { r, g, b } = this;\n    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);\n  };\n  return color;\n}\nconst firstColor = makeColor(35, 255, 150);\nfirstColor.hex();\n')),Object(a.b)("img",{alt:"factoryfunc",src:Object(c.a)("assets/factoryfunc.png")}),Object(a.b)("p",null,"If you observe, functions hex and rgb are add to only this object. they are not added to the prototype."),Object(a.b)("p",null,"A unique copy is added to each color object. Each color has its own rgb functions. We necessarily dont need to have a unique copy of method to each object, we can reuse the one from prototype"),Object(a.b)("p",null,"This method is not as ideal as it could be."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"constructor-functions"},"Constructor functions"),Object(a.b)("p",null,"Why constructor functions are used instead of factory functions?"),Object(a.b)("p",null,"Problem with factory functions?"),Object(a.b)("p",null,"Objects have their own copy of functions"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'const firstColor = makeColor(35, 255, 150);\nfirstColor.hex();\n\nconst black = makeColor(0, 0, 0);\nblack.hex();\n\nblack.hex === firstColor.hex; // false -> both are not referencing to same method.\n//hex method is unique for each object\n\n//example2\n"hi".slice === "bye".slice; //true\n//here both string refer to same method. Hence we get true\n//methods are not created uniquely for each string over here - instead they are defined over prototype\n')),Object(a.b)("p",null,"This is where construction function comes in"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Starts with a caps value."),Object(a.b)("li",{parentName:"ol"},"Doesn't have a return type."),Object(a.b)("li",{parentName:"ol"},"Gets invoked when called with ",Object(a.b)("strong",{parentName:"li"},"new")," operator.")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"function Color(r, g, b) {\n  this.r = r;\n  this.g = g;\n  this.b = b;\n  console.log(this); //window scope -> nearest object\n}\n")),Object(a.b)("h3",{id:"new-keyword"},"new keyword"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Creates a blank, plain JavaScript object;"),Object(a.b)("li",{parentName:"ul"},"Links (sets the constructor of) this object to another object;"),Object(a.b)("li",{parentName:"ul"},"Passes the newly created object from Step 1 as the ",Object(a.b)("inlineCode",{parentName:"li"},"this")," context;"),Object(a.b)("li",{parentName:"ul"},"Returns ",Object(a.b)("inlineCode",{parentName:"li"},"this")," if the function doesn't return an object.")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"new Color(255, 40, 100);\n//internally performs all the above 4 operations.\n")),Object(a.b)("p",null,"If you look at ",Object(a.b)("inlineCode",{parentName:"p"},"__proto__")," we have a constructor property set to color."),Object(a.b)("p",null,"Now we can add the methods to prototype."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'Color.prototype.rgb = function () {\n  const { r, g, b } = this;\n  return `(${r}, ${g}, ${b})`;\n};\n// we have access to `this` inside  the function\n\nColor.prototype.hex = function () {\n  const { r, g, b } = this;\n  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);\n};\n\nconst color1 = new Color(255, 40, 100);\nconst color2 = new Color(50, 90, 115);\n//this will be set to color1 and color2\n\ncolor1.hex === color2.hex; //true\n')),Object(a.b)("img",{alt:"constructorfn",src:Object(c.a)("assets/constructorfn.png")}),Object(a.b)("p",null,"Now if you observe hex and rgb are under ",Object(a.b)("inlineCode",{parentName:"p"},"__proto__")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"If you didn't write the ",Object(a.b)("inlineCode",{parentName:"p"},"new")," operator, ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"the Constructor Function would be invoked like any Regular Function")),", without creating an Object. In this case, the value of ",Object(a.b)("inlineCode",{parentName:"p"},"this")," is also different."))),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Do not use arrow functions as constructor functions, because they dont have prototype property and also we cant access ",Object(a.b)("inlineCode",{parentName:"p"},"this")," in arrow functions"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"For in depth information refer ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#Using_prototypes_in_JavaScript"}),"Prototype Chain and Inheritance"))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"js-classes---syntactical-sugar"},"JS Classes - Syntactical Sugar"),Object(a.b)("p",null,"Lets see an even better way of writing the above logic"),Object(a.b)("p",null,"Using class, we dont need to add constructor functions manually."),Object(a.b)("p",null,"We always add a constructor in every class. Constructor gets called immediately whenever we invoke with ",Object(a.b)("inlineCode",{parentName:"p"},"new")," operator."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'class Color {\n  constructor(r, g, b, name) {\n    this.r = r;\n    this.g = g;\n    this.b = b;\n    this.name = name;\n  }\n  innerRGB() {\n    const { r, g, b } = this;\n    return `${r}, ${g}, ${b})`;\n  }\n  rgb() {\n    return `rgb(${this.innerRGB()})`;\n  }\n  rgba(a = 1.0) {\n    return `rgba(${this.innerRGB()}, ${a})`;\n  }\n  hex() {\n    const { r, g, b } = this;\n    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);\n  }\n}\n\nconst red = new Color(255, 67, 89, "tomato");\nconst white = new Color(255, 255, 255, "white");\n')),Object(a.b)("hr",null),Object(a.b)("h2",{id:"extends-super-subclasses"},"Extends, super, subclasses"),Object(a.b)("p",null,"Extends:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'class Pet {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n  eat() {\n    return `${this.name} is eating`;\n  }\n}\n\nclass Cat extends Pet {\n  meow() {\n    return "Meow";\n  }\n}\n\nclass Dog extends Pet {\n  bark() {\n    return "Woof";\n  }\n}\n\nconst wyatt = new Dog("wyatt", 9);\nconst monty = new Cat("monty", 10);\nmonty.eat(); // monty is eating\nwyatt.eat(); //wyatt scarfs his food -> takes its own version of eat, when its not there, looks for super class\n')),Object(a.b)("p",null,"Super:"),Object(a.b)("p",null,"Lets say my cat has an extra property livesleft"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'class Pet {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n  eat() {\n    return `${this.name} is eating`;\n  }\n}\n\nclass Cat extends Pet {\n  constructor(name, age, livesLeft = 9) {\n    this.name = name;\n    this.age = age;\n    this.livesLeft = livesLeft;\n  }\n  meow() {\n    return "Meow";\n  }\n}\n')),Object(a.b)("p",null,"Insetad of duplicating use super."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'class Cat extends Pet {\n  constructor(name, age, livesLeft = 9) {\n    super(name, age); // calls the constructor of parent class\n    //super is a refernce to super class\n    this.livesLeft = livesLeft;\n  }\n  meow() {\n    return "Meow";\n  }\n}\n')))}p.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=b(n),h=o,d=p["".concat(c,".").concat(h)]||p[h]||u[h]||a;return n?r.a.createElement(d,s(s({ref:t},l),{},{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},140:function(e,t,n){"use strict";var o=n(0),r=n(34);t.a=function(){return Object(o.useContext)(r.a)}},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(140);function r(e){const{siteConfig:t}=Object(o.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);