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

*/