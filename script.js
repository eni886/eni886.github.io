var displayScript = document.getE;ementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (sriptBtn){
  scriptBtn.addEventListener("click", generateScript);
}
function generateScript(){
  var name = document.getElementById("Eco-Businesses").value;
  var location = document.getElementById("Home").value;
  var learning = document.getElementById("learning").value;

displayScript.innerHTML = "hi" + name + "i live in" + location + ". i wanna ask u to... because.." + learning + ". please support....";
}
var factList = [
  "Brief information of Eco-Business 1",
  "Brief information of Eco-Business 2",
  "Brief information of Eco-Business 3",
  "Brief information of Eco-Business 4",
];

var fact = document.getElementById("fact");
var myBtn = document.getElementById("myButton");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click",   displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
