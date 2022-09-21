let mmr = document.getElementById("tabelinha");

let resultado = document.getElementById("resultado");

function calcular(){

var mmrusu= mmr.value;
console.log(mmrusu);

var mmrtop = "Você é imortal";



/*





*/

var mmrMedalha = ""
var mmrNome = ""

  if(mmrusu <= 690){

mmrMedalha = 690;

mmrNome = "Guardião";

}

else if ( mmrusu > 690 && mmrusu  <= 1590 ){

mmrMedalha = 1590;
mmrNome = "Cruzado";

}


else if (mmrusu  > 1590 && mmrusu  <= 2460 ){


mmrMedalha = 2460;
mmrNome = "Arconte";
}

else if ( mmrusu > 2460 && mmrusu <= 3360 ){

 mmrMedalha = 3360;
mmrNome = "Lenda";
}

else if (  mmrusu  > 3360 &&  mmrusu  <= 4170 ){

mmrMedalha = 4170;
mmrNome = "Ancião";
}

else if (  mmrusu > 4170 &&  mmrusu  <= 5070 ){

mmrMedalha = 5070;
mmrNome = "Divino";
}


else if (  mmrusu  > 5070 &&  mmrusu  <= 5850 ){

mmrMedalha = 5850;
mmrNome = "Imortal";

}

else if(mmrusu > 5850){
 return 

}

else {

}


console.log(mmrMedalha)
console.log(mmrNome)


let mmrConta = parseInt((mmrMedalha - mmrusu ) / 30) ;
console.log( mmrConta + " vitórias (solo) para a medalha " + mmrNome );

document.getElementById("resultado").innerHTML = (mmrConta)

}


/*
+ " vitórias (solo) para a medalha " + mmrNome
*/
