
//-----------------------------------------------------------------------------------------------
const xa=function(a,b){return a*b};
console.log(xa(4,5));

//------------------------------------------------------------------------------------------------
(function () {
    console.log("Hello! I called myself");
  })();  // self invoking function

//------------------------------------------------------------------------------------------------
  function myFunction(a, b) {
    return a-b;
  }
  let x = myFunction(100,78) * 2; //function as expression
 console.log(x);

//-------------------------------------------------------------------------------------------------
 function sum(...args) {  // rest parameters
    let sum = 0;
    for (let a of args) sum += a;
    return sum;
  }
  
  let res = sum(4, 9, 16, 25, 29, 100, 66, 100, 77);
  console.log(res);
  
//--------------------------------------------------------------------------------------------------
  const Myobj={first_name : "Subitha",
                last_name : "Kunnath",
                full_name : function()     // invoking a function as a method
                {return this.first_name+" "+this.last_name;}
  }
    console.log(Myobj.full_name());
  
//--------------------------------------------------------------------------------------------------
function MyFun(args1,args2)
{
    this.first_name=args1;
    this.last_name=args2;
}
const new_obj= new MyFun("Shinoj","Krishna "); //Invoking a Function with a Function Constructor
console.log(new_obj.last_name);

//---------------------------------------------------------------------------------------------------

const person = { full_name : function()
                        {
                            return this.first_name+" "+this.last_name;
                        }
               }

const person1 = { first_name: "Mary", last_name:"John"}
const person2 = { first_name: "Kennedy", last_name:"Kin"}
console.log(person.full_name.call(person1));// invoke (call) a method with an owner object as an argument (parameter).

//----------------------------------------------------------------------------------------------------

const person_new = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person3 = { firstName: "Mary", lastName:"John"}
  console.log(person_new.fullName.call(person3, "Oslo", "Norway"));//The call() Method with Arguments

  //-----------------------------------------------------------------------------------------------------

  let factorial = (num) => {
                    if (num == 0 || num == 1) 
                        {
                            return 1;
                        }
                    return num*factorial(num-1);     //recursion function
  }
  let n=6;
  console.log(`Factorial of ${n} is : `+factorial(6));

  //------------------------------------------------------------------------------------------------------

  //A callback is a function passed as an argument to another function.
  function myDisplayFun(result)
  {
    console.log("Product is : "+result);
  }

  function myCalculator(num1,num2,myCallback)
  {
    let sum = num1 * num2 ;
    myCallback(sum);
  }

  myCalculator(6,7,myDisplayFun); //here myCallback = myDisplayFun, do not use () with function name

  //-------------------------------------------------------------------------------------------------------

//***********************destructuring in javascript*********************//

const Person_add = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };
  
  // Object Destructuring 
  let {firstName, lastName : Name, country = "US"} = Person_add;
  // or let {firstName, lastName} = Person_add;
  console.log(firstName+"---"+Name+"---"+country);

  //---------------------------------------------------------------------------------------------------------

  //array destructuring
  const fruitsArr=["Mango","Orange","Apple"];
  let [fruit1,fruit2,fruit3] = fruitsArr;
  console.log(fruit1+"*****"+fruit3);
