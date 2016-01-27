var playerPiece = document.getElementById("playerPiece");
playerPiece.onclick=function(){
    var elem = document.getElementById("die_number");
    elem.innerHTML = "";
    setTimeout(function(){
            die.src= "img/dodecahedron-frame1.png";
            var number = Math.round(Math.random()*2+1);
            playerPosition = playerPosition + number;
            elem.innerHTML = number;
            updatePlayer();
    },100);
    console.log("test");
}

var playerPosition = 0;

function updatePlayer(){
    if (playerPosition > 36)
        playerPosition =36;
    var tdtoLand = "g"+playerPosition;   
    var element = document.getElementById(tdtoLand);
    console.log(element);
    var x = element.getBoundingClientRect().left;
    var y = element.getBoundingClientRect().top;
    var piece = document.getElementById("gamePiece");
    piece.style.top = y+10+"px";
    piece.style.left = x+10+"px";
}

var playerPiece2 = document.getElementById("playerPiece2");
playerPiece2.onclick=function(){
    var elem = document.getElementById("die_number");
    elem.innerHTML = "";
    setTimeout(function(){
            die.src= "img/dodecahedron-frame1.png";
            var number = Math.round(Math.random()*2+1);
            playerPosition2 = playerPosition2 + number;
            elem.innerHTML = number;
            updatePlayer2();
    },100);
    console.log("test");
}

var playerPosition2 = 0;

function updatePlayer2(){
    if (playerPosition2 > 36)
        playerPosition2 =36;
    var tdtoLand = "g"+playerPosition2;   
    var element = document.getElementById(tdtoLand);
    console.log(element);
    var x = element.getBoundingClientRect().left;
    var y = element.getBoundingClientRect().top;
    var piece = document.getElementById("gamePiece2");
    piece.style.top = y+10+"px";
    piece.style.left = x+10+"px";
}
/*
var bodyRect = document.body.getBoundingClientRect(),
    elemRect = element.getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top;
undefined
offset;
691.40625
document.getElementById("gamepiece").style.top = "691px";
"691px"
var offsetx = elemRect.left - bodyRect.left;
undefined
document.getElementById("gamepiece").style.left = offsetx+"px";
"229.5px"
document.getElementById("gamepiece").style.left = offsetx+25+"px";
"254.5px"
document.getElementById("gamepiece").style.top = offset+35+"px";
"726.40625px"
*/