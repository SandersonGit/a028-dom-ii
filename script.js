

function adicionaItem(event) {
	const btn = document.getElementById("container");
	const elemento = document.createElement("article");
	const novoElemento = document.createTextNode("");
	event.preventDefault();
	elemento.appendChild(novoElemento);
	elemento.setAttribute("class", "item");
	elemento.setAttribute("onclick", "removeItem(event)");
	btn.insertAdjacentElement("beforeend", elemento);
}

const removeItem = (event) => {
    event.target.remove()
}