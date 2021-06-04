
var buton1 = document.getElementById("restart");
var buton2 = document.getElementById("ghicit");
var input = document.getElementById("inp");
var refr = document.getElementById("refresh");
var img;
var nume;
var myVar;

var random_colors_array = ['red', 'black', 'blue', 'magenta', 'green', 'purple', 'gray'];
var random_sizes_array = ['75px', '12', '80px', '65px', '37px', '108px'];

var myInterv = setInterval(setColor, 1000);

function setColor() {
  var elem = random_colors_array[Math.floor(Math.random()*random_colors_array.length)];
  var x = document.getElementById("ttl");
  x.style.color = elem
}

 var myInterv2 = setInterval(setSize, 500);

function setSize() {
  var elem = random_sizes_array[Math.floor(Math.random()*random_sizes_array.length)];
  var x = document.getElementById("ttl");
  x.style.paddingLeft = elem;
}


var text = document.getElementById("text");
text.style.display = "none";
input.addEventListener("keyup", function(event) {

if (event.getModifierState("CapsLock")) {
    text.style.display = "block";
  } else {
    text.style.display = "none"
  }
});

var rpd = document.getElementById("rpd");
rpd.style.display = "none";
input.addEventListener("keypress", function(event){
    rpd.style.display = "block";
});





var vieti = 3;
var scor = 0;
var random_images_array = ['silvia.jpg', 'rechinu.jpg','dacia.jpg', 'samurai.jpg', 'rangerraptor.jpg', 'e36e28.jpg', 'gti.jpg' ];





var Marci = new Array();
Marci['silvia.jpg'] = "nissan";
Marci['rechinu.jpg'] = "bmw";
Marci['dacia.jpg'] = "dacia";
Marci['samurai.jpg'] = "suzuki";
Marci['rangerraptor.jpg'] = "ford";
Marci['e36e28.jpg'] = "bmw";
Marci['gti.jpg'] = "volkswagen";


refr.onclick = function refresh() {
    let reg = "[a-zA-Z]";
    nume = prompt("Introduceti numele:");
    if(nume.match(reg)){
    vieti = 3;
    scor = 0;
    var random_images_array = ['silvia.jpg', 'rechinu.jpg','dacia.jpg', 'samurai.jpg', 'rangerraptor.jpg', 'e36e28.jpg', 'gti.jpg' ];


    buton1.style.visibility = "visible";
    document.getElementById("marca").innerHTML = ' ';
    document.getElementById("vieti").innerHTML = '<span id="vieti">Vieti:' + vieti + '</span>';
    }
}

buton1.onclick = function getRandomImage() {
    clearTimeout(myVar);

    num = Math.floor(Math.random() * random_images_array.length);
    if (random_images_array.length > 0) {
        img = random_images_array[num];
        if (vieti > 0)
            myVar = setTimeout(function() {

                document.getElementById("marca").visibility = "visible";
                document.getElementById("marca").innerHTML = 'Gresit!';
                vieti = vieti - 1;
                buton2.style.visibility = "hidden";
                input.style.visibility = "hidden";
                document.getElementById("vieti").innerHTML = '<span id="vieti">Vieti:' + vieti + '</span>';

                if (vieti == 0)
                    aipierdut().call();

            }, 7000);
    } else {
        img = 'placeholder.png';
        vieti = -1;
    }
    document.getElementById("marca").innerHTML = ' ';

    if (vieti == 0) {
        aipierdut.call();
        clearTimeout(myVar);
    } else if (vieti == -1) {
        buton2.style.visibility = "hidden";
        input.style.visibility = "hidden";
        document.getElementById("marca").innerHTML = 'Joc terminat! Scor: ';
        document.getElementById("marca").innerHTML += scor;
        document.getElementById("vieti").style.visibility = "hidden";

        var paragraf = document.createElement("p");
        paragraf.innerHTML = nume + " - " + scor+" puncte";
        document.getElementById("scoruri").appendChild(paragraf);

        clearTimeout(myVar);

    } else if (vieti >= 1) {
        buton1.style.visibility = "visible";
        buton2.style.visibility = "visible";
        input.style.visibility = "visible";
        document.getElementById("vieti").style.visibility = "visible";
    }

    document.getElementById("vieti").innerHTML = '<span id="vieti">Vieti:' + vieti + '</span>';
    var imgStr = '<img src="' + img + '" alt = "" style="height: auto; width: 200px;">';
    document.getElementById("imagine").innerHTML = imgStr;
    random_images_array.splice(num, 1);

}

function aipierdut() {

    document.getElementById("marca").innerHTML = 'Ai pierdut! Scor: ';
    document.getElementById("marca").innerHTML += scor;

    buton1.style.visibility = "hidden";
    document.getElementById("vieti").style.visibility = "hidden";

    var paragraf = document.createElement("p");
    paragraf.innerHTML = nume + " -  " + scor+ " puncte";
    document.getElementById("scoruri").appendChild(paragraf);


    clearTimeout(myVar);


}


buton2.onclick = function afisare() {

    var nr = input.value;
    

    if (Marci[img] == nr) {
        clearTimeout(myVar);
        document.getElementById("marca").innerHTML = 'Corect!';
        buton2.style.visibility = "hidden";
        input.style.visibility = "hidden";
        scor = scor + 1;
    } else {
        document.getElementById("marca").innerHTML = 'Gresit!';
        vieti = vieti - 1;
    }
    
    input.value = '';
    document.getElementById("vieti").innerHTML = '<span id="vieti">Vieti:' + vieti + '</span>';

    if (vieti == 0) {


        buton1.style.visibility = "hidden";
        buton2.style.visibility = "hidden";
        input.style.visibility = "hidden";
        document.getElementById("marca").innerHTML = 'Ai pierdut! Scor: ';
        document.getElementById("marca").innerHTML += scor;
        document.getElementById("vieti").style.visibility = "hidden";

        clearTimeout(myVar);

        var paragraf = document.createElement("p");
        paragraf.innerHTML = nume + " - " + scor + " puncte";
        document.getElementById("scoruri").appendChild(paragraf);
    }
}


function whichElement(e) {
    var targ;
    if (!e) {
        var e = window.event;
    }
    if (e.target) {
        targ = e.target;
    } else if (e.srcElement) {
        targ = e.srcElement;
    }
    var tname;
    tname = targ.getAttribute("href");
    alert("Redirectionare catre " + tname);
    window.location.href = tname;
}

function hide(e) {
    e.currentTarget.style.visibility = 'hidden';
}

function func1(event) {
    alert("Zona imagine");
    if (document.getElementById("check").checked) {
        event.stopPropagation();
        document.getElementById("check").checked = false;
    }
}

function func2() {
    alert("Zona joc");
}

