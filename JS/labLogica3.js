var colors = ["green", "red", "blue", "yellow", "pink"];

for (i = 1; i <= colors.length; i ++ ){
	var ding = document.createElement("button");
	ding.id="button"+i ;
	ding.innerHTML = "Button"+i ;
	ding.style.backgroundColor = colors[(i-1)];
	ding.setAttribute("onclick", "change("+i+")");
	document.getElementById("container").appendChild(ding);
}
function change(ding){
			document.body.style.backgroundColor = colors[(ding-1)];
}
