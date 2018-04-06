var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var newName = 'Marian';

var allNames = femaleNames.concat(maleNames);
console.log(allNames);

if (allNames.indexOf(newName) === -1) {
  var addNewNameToAllNames = allNames.push('Marian');
  console.log(allNames);
}
else {
  console.log("your allNames table has a name from the newName table");
}
