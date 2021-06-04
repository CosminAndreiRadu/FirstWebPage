
document.getElementById("btn").classList.add("btn");
function myFunction() {
    
    var elem = document.querySelector(".btn");
    var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
    document.getElementById("demo").innerHTML = "Cod culoare:  " + theCSSprop;
}

var span = document.getElementById('ceas');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);