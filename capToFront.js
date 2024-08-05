function capTosmall(str){
    let capital=str.split("").filter(char => char >= 'A' && char <= 'Z').join("");

    let small=str.split("").filter(char => char >='a' && char <= 'z').join("");

    return capital+small
  }

  let a=("sUbiTHa KuNnatH");
  let b=capTosmall(a);
  console.log(b);



//   function capToFront(str) {
//     let capitals = '';
//     let lowercase = '';
  
//     for (let char of str) {
//       if (char === char.toUpperCase()) {
//         capitals += char;
//       } else {
//         lowercase += char;
//       }
//     }
  
//     return capitals + lowercase;
// }
// console.log(capToFront("sUbiTHa KuNnAtH"));