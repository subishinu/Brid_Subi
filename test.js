function ageMembers(family) {

  const ages = family.map(member => member.age);
  

  const minAge = Math.min(...ages);
  const maxAge = Math.max(...ages);
  const ageDifference = maxAge - minAge;
  
  return [minAge, maxAge, ageDifference];
}

console.log(ageMembers([
  { name: "John", age: 15 },
  { name: "Steve", age: 50 },
  { name: "alan", age: 35 },
  { name: "abu", age: 55 },
  { name: "sonu", age: 66 },
]));