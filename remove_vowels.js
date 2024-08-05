let input = "Subitha kunnath";
let output = "";
let vowels = "aeiouAEIOU";

for (let i = 0; i < input.length; i++) {
    if (vowels.indexOf(input[i]) === -1) {
        output += input[i];
    }
}
console.log(output);
