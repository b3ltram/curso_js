/*
	readyState de HMLHttpRequest

	0 - objeto inicializado
	1 - objeto configurado
	2 - headers enviados y recibidos
	3 - descargando informacion
	4 - pedido finalizado
*/


let xhr = new XMLHttpRequest;



xhr.addEventListener ("readystatechange", ()=>{
	if (xhr.readyState == 4){
		//let p = document.createElement("p");
		//p.innerText = xhr.response;
		//document.body.appendChild(p);
		document.body.innerHTML = xhr.response;
	}
})

xhr.open("GET", "archivo.html");

xhr.send();