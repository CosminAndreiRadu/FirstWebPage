// creez buton

btn = document.createElement('button');
btn.id = "night-mode";
btn.innerText = 'Night-mode';
document.body.insertBefore(btn, document.body.firstChild);
document.getElementById("night-mode").addEventListener("click", modnd);



function modnd(){

    var bg = document.getElementsByClassName("grid-item");

    var i;
    
    var imgs = document.getElementsByTagName("lnk");

    if(btn.id == 'night-mode'){
        for (i = 0; i < bg.length; i++){
            bg[i].style.backgroundColor = "lightgray";}
        for (i = 0; i < imgs.length; i++){
            imgs[i].style.fontSize = "10px";
        }

        btn.parentNode.removeChild(btn);
        
        btn = document.createElement('button');
        btn.id = "day-mode";
        btn.innerText = 'Day-mode';
        document.body.insertBefore(btn, document.body.firstChild);
        document.getElementById("day-mode").addEventListener("click", modnd);


    }else{
        for (i = 0; i < bg.length; i++){
                bg[i].style.backgroundColor = "white";
            }
            btn.parentNode.removeChild(btn);
            
            btn = document.createElement('button');
            btn.id = "night-mode";
            btn.innerText = 'Night-mode';
            document.body.insertBefore(btn, document.body.firstChild);
            document.getElementById("night-mode").addEventListener("click", modnd);
    

    
}

}







// if(btn.id == 'night-mode'){
//     alert("jale");
// }






// function nm(){
// var bg = document.getElementsByClassName("grid-item");

// var i;

// for (i = 0; i < bg.length; i++){
//     bg[i].style.backgroundColor = "lightgray";
// }
// btn.parentNode.removeChild(btn);

// document.body.insertBefore(btn2, document.body.firstChild);
// document.getElementById("day-mode").addEventListener("click", dm);


// }


// function dm(){
//     var bg = document.getElementsByClassName("grid-item");
    
//     var i;
    
//     for (i = 0; i < bg.length; i++){
//         bg[i].style.backgroundColor = "white";
//     }
//     btn.parentNode.removeChild(btn2);
    
//     document.body.insertBefore(btn, document.body.firstChild);
//     document.getElementById("night-mode").addEventListener("click", nm);
    
    
//     }
