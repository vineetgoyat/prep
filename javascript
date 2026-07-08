/*
1. to lock javascript in browser we use console. Console gives:- errors, warnings, custom messages. To write anything on console we use console.log();
// -> single line comment
2. var:- update yes, redeclare yes, initial value undefined
3. let:- update yes, redeclare no, initial value not undefined
4. const:- update no, redeclare no
5. Airthmatic operators:- + , - , * , / , %
6. Datatypes:- Primitive:- immutable data which is at lowest level of this language. object:- key value pair
    to access keys in object:- object['key'] or object.key ; object ko update karna:- object['key'] = newValue; value print karna
    object['key']().
7. nested objects:- user = {
                    name : Vineet;
                    gender : Male;
                    address:
                        1st: India}
8.⁠ ⁠if (ui ==== id) {
    else if (uc === id)
        {else if (uf === id)
            {else {
                console.log("Hi")
            }
        }
            }
        }
9. switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;  
    default:
        console.log("Invalid day");     
}   
10. loops:- for,forof, foreach, while, do while
    foreach;- array.foreach(function(day,month){
    console.log(day,month);})
    }
    foreach:- array.foreach(function(index,element){
    console.log(index,element);})  

11. fat arrow function:- const sum = (a,b) => a+b;

    sum ()=>{
        console.log("Hello");}

12. array methods:- push(), pop(), shift(), unshift(), slice(), splice(), indexOf(), includes(), find(), filter(), map(), reduce()

13. string methods:- length, toUpperCase(), toLowerCase(), trim(), slice(), substring(), replace(), includes(), indexOf(), charAt(), split()

14. object methods:- Object.keys(), Object.values(), Object.entries(), Object.assign(), Object.freeze(), Object.seal()

15. date methods:- Date.now(), Date.parse(), Date.UTC(), Date.getDate(), Date.getDay(), Date.getFullYear(), Date.getHours(), Date.getMilliseconds(), Date.getMinutes(), Date.getMonth(), Date.getSeconds(), Date.getTime()

16. many events can triggered in js, we can customize some of them to fire at ideal time 
  syntax:-
  <!DOCTYPE html>
  <html>
  <head></head>
  <body>
  <button id="test"> click me </button>
    <script>

    var test = document.getElementById("test");

    test.onclick= function(){
    console.log("happy birthday"):
    }


    </script>
  </body>
  </html>

17.template literals:- template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. Template literals are enclosed by the back-tick (` `) (grave accent) character instead of double or single quotes.
  let wish1= 'Porche car';
  let wish2 ='island';
  console.log(`wish list ${wish1},${wish2}`);

18. array
   let arr= [1,1,1,1,1,1,1,1,1,1];

19.typeof we can use here like 
console.log(typeof("hello")); //string
console.log(typeof(123)); //number
typeof is used to check the datatype of any variable or value. It returns a string indicating the type of the unevaluated operand.

20. hoisting:- hoisting jo hota hai voh na variable aur function declarations ko unke scope ke top par move kar deta hai. Iska matlab hai ki aap variables aur functions ko unke declaration se pehle use kar sakte hain. JavaScript mein, variables aur functions ko unke scope ke top par hoist kiya jata hai, lekin sirf unke declarations hi hoist hote hain, na ki unke initializations.
Aapki definition kaafi hadd tak sahi hai aur core concept ko ache se samjhati hai, lekin ismein ek choti si cheez hai jo modern JavaScript (ES6+) ke hisab se thodi adhuri hai.
Aapne bilkul perfect bola ki sirf declarations hoist hote hain, initializations nahi.
Chaliye isko thoda aur accurate banate hain, kyunki interviewers ya standard coding mein var, let, aur const ke beech ka farq poochha jata hai.
Aapki definition mein kya sudhaar chahiye?
Aapne likha: "Iska matlab hai ki aap variables aur functions ko unke declaration se pehle use kar sakte hain."
Yeh baat sirf var aur normal functions par apply hoti hai. Agar aap let aur const ke sath declaration se pehle variable use karenge, toh JavaScript error de dega (ReferenceError).
Ek perfect aur complete definition aisi hogi:
Hoisting JavaScript ka ek aisa behavior hai jahan variable aur function declarations ko execution se pehle unke scope ke top par move kar diya jata hai.
Lekin dhyan rakhne wali baat yeh hai:
Sirf declarations hoist hote hain, initializations (values) nahi.
var aur functions ko aap unke declaration se pehle use kar sakte hain (var aapko undefined dega).
let aur const bhi hoist hote hain, lekin voh ek Temporal Dead Zone (TDZ) mein rehte hain. Isliye unhe declaration se pehle use karne par error aata hai.

21. javascript is object oriented programming language

22. this keyword:- this keyword refers to the object it belongs to. It has different values depending on where it is used:
- In a method, this refers to the owner object.
- Alone, this refers to the global object (in browsers, it's the window object).
- In a function, this refers to the global object (in strict mode, it is undefined).
- In an event, this refers to the element that received the event.
- Methods like call(), apply(), and bind() can refer this to any object.

23. js is high level because it collects garbage automatically so it manages memory, also extract hardware level complexities.
- js is single threaded because it has only one call stack so it only execute one command at a time.
-interpreted : execute line by line at run time, it does not need to be compiled before execution.
-JIT: just in time , it coverts the machine code into the js code just before the execution dynamically.
-pototype based: it is bcz it object interit the properties from other object rather than take it from the blueprints of objects
-multiparadigm: it supports multiple style of programming like :oops, functional, procedural etc.
-dynamic: variables are typed at run time, so that data types can be cahnged during execution.
-non blocking event loops:- offloads the tasks to the kernel of the system so that the main execution will be free to execute without waiting.
24.it handles IO intensive work , it has non blocking event loop, which supports single thread model which queue up the 
25. it use <script> tag to connect html with js file
26. various listeners are there one of them is btn.onclick()=>{}
27.js is used to grab any elements from the DOM.
28.fcn are first class objects in js, so it is a functional programming style language, also it is object oriented programming language bcz it treat everthing as a object, where it also follows the inheritance concept, so it is multiparadigm programming language.
29. it can work asyncronously thanks to promise API, async await, callback functions, event loop, setTimeout(), setInterval() etc.
30. which support async await syntax
31. it can run on server thanks to node.js, which is a runtime environment for js, it can run on any platform like windows, linux, mac etc.
32.interaction style uses file system APIs. can run code on server by pulling up terminal with node command.
33. highly supported by the browsers 
34. chrome has v8 powerful engine which support js.
35.react is build on the top of javascript, react is a library of js.
36. node.js is the runtime environment of js, help us to interact with other servers and write the APIs.
37. node.js also has the same v8 engine as chrome has.
38. DOM document object the most imp. object in javascript, is used to represent the structure of html, it is present in variable document when we load the page, document obj have many element obj.
39. through document obj we can search for various elements - .querySelector()
    through element objects:- we can listen or know the events done by user on the page - .addEventListeners()
    element objects - change the style and appearence of the page - .style, .color
40. function keyword for fcn, Dot (.) for the methods like:- .toUpperCase(), .sort(), .indexOf()
41. fat arrow fcn :- (a,b)=> a+b;
42. ⁠funtion keyword for functions, . for methods (.sort(), .toUpperCase(), .indexOf()).
42.asynchronous js is in which we give the priority to those who require less time of completion.
   synchronous js is in which execution is line by line 
43.a funtion is passed as an argument to another function is called callback fcn.
44.⁠ ⁠html:- labelling of page, answers what question, structure of the page
45. 
*/