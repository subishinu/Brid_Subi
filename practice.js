function sum(...args)  //rest parameter
{
    let sum=0;
    for(let arg of args)
        {
            sum+=arg;
            //console.log(sum);
        } 
        return sum;
}

let res = sum (23,45,12,15);
console.log("Sum is : "+res);


//to extract only what's needed from an array: //spread operator

const num1=[11,22,3,7,8];
const num2=[4,5,6];
const combined=[...num2,...num1];
console.log(combined);
const [one,two,...pending] = num1;
console.log("first one :"+one+"\nSecond :"+two+"\nPending numbers :"+pending);

//on objects
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  
  // Check the result object in the console:
  console.log(myUpdatedVehicle);




  //ternary operator

  marks=27;
  let result = (marks<30)? "Unsatisfactory" :(marks<60)? "Average" : (marks<80)?"Good performance" : "Excellent";
  console.log("Result : "+result);


  //template literals

  function Display_msg(msg)
  {
    return(`Hello ${msg}!!!`);
  }

  let mssg = Display_msg `Dev`;
  console.log(mssg);

  //filter
  const ages = [32, 33, 12, 40];

function checkAge(age) {
  return age > 31;
}

 console.log(ages.filter(checkAge));


 //map
 const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Square);
console.log(newArr);

function Square(num)
{
    return num*num;
}

let str = 'Click the button to convert to camelCase';

function camelCase(str) {
    // Converting all characters to lowercase
    let ans = str.toLowerCase();

    // Splitting the string into words and transforming to camelCase
    return ans.split(" ").map((word, index) => {
        if (index === 0) {
            return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join("");
}

function gfg_Run() {
    console.log(camelCase(str));
}

gfg_Run();

const strdb = 'hello'
let arr = strdb.split('')
const double = arr.map(i => i += i).join('')

console.log(double)