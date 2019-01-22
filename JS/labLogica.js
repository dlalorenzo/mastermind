for(i=1; i< 31; i++){ 
    var ding = document.createElement("button");
    ding.id="button"+i ;
    ding.innerHTML = i ;
    ding.setAttribute("onclick", "change(this)"); //this is een gereserveerd woord, vraagt alle gegevens en data op
    document.getElementById("container").appendChild(ding);
}
//function change(e){ //opdracht 1
    //e.style.backgroundColor = "red"
    //console.dir(e) laat alles zien van de innerHTML. alle informatie
    //console.log(e.style.backgroundColor);
//}

function change(element){ //opdracht2+3
    if (element.style.backgroundColor == "red"){
        element.style.backgroundColor = "purple"
        console.log(element.style.backgroundColor);
    } else if (element.style.backgroundColor == "purple"){
        element.style.backgroundColor = "blue"
        console.log(element.style.backgroundColor);
    } else if (element.style.backgroundColor == "blue"){
        element.style.backgroundColor = "black"
        console.log(element.style.backgroundColor);
    } else if(element.style.backgroundColor == 'black'){
        element.outerHTML = "";
    }else{
        element.style.backgroundColor = "red"
        console.log(element.style.backgroundColor);
    }
}

