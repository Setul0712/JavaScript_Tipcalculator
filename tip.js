
function myFunction(){
    let amt = document.getElementById("billamt");
let perc = document.getElementById("service");
let actperc = perc.options[perc.selectedIndex];
let people = document.getElementById("people");

console.log('Hiii');
let tip;
console.log(amt.value);
console.log(actperc.value);
console.log(people.value);
tip = amt.value * actperc.value / people.value;
console.log(tip);
alert("tip for each people = " + tip );
}