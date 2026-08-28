const inc = document.querySelector("#ini");
const vsts = document.querySelector("#Ves");
const frml = document.querySelector("#traForm");
const detalle = document.querySelector("#D");
const resv = document.querySelector("#Resrv");
const bRes = document.querySelector(".Ver");
const form = document.querySelector("#formRe");
const categ = document.querySelector(".cate");
let tllEl = "S";

function oculP() {
	inc.style.display = "none";
	vsts.style.display = "none";
	frml.style.display = "none";
	detalle.style.display = "none";
	resv.style.display = "none";
	categ.style.display = "none";
	bRes.style.display = "block";
}

document.addEventListener("click", (evento) => {
	if (evento.target.closest(".V")) {
		evento.preventDefault();
		oculP();
		inc.style.display = "block";
		categ.style.display = "flex";
		form.style.display = "none";
	}
});

function mstCat(catalogo) {
	oculP();
	catalogo.style.display = "block";
}

document.querySelector("#btnVes").addEventListener("click", () => mstCat(vsts));
document.querySelector("#btnTra").addEventListener("click", () => mstCat(frml));

bRes.addEventListener("click", () => {
	oculP();
	resv.style.display = "block";
	bRes.style.display = "none";
});

const btnRes = document.querySelector(".Res");

function reinTll() {
	tllEl = "S";
	document.querySelectorAll(".tallas button").forEach((boton) => {
		boton.classList.remove("elegida");
		boton.disabled = true;
	});
}

reinTll();

document.querySelectorAll(".prod").forEach((producto) => {
	producto.addEventListener("click", () => {
		oculP();
		detalle.style.display = "grid";
		document.querySelector("#DNom").textContent = producto.dataset.nombre;
		document.querySelector("#DPre").textContent = producto.dataset.precio;
		document.querySelector("#DColor").textContent = producto.dataset.color;
		document.querySelector("#deIma").src = producto.querySelector("img").src;
		form.style.display = "none";
		btnRes.style.display = "block";
		reinTll();
	});
});

document.querySelectorAll(".tallas button").forEach((boton) => {
	boton.addEventListener("click", () => {
		if (boton.disabled) return;
		tllEl = boton.textContent;
		document.querySelectorAll(".tallas button").forEach((item) => item.classList.remove("elegida"));
		boton.classList.add("elegida");
	});
});

btnRes.addEventListener("click", () => {
	document.querySelectorAll(".tallas button").forEach((boton) => (boton.disabled = false));
	btnRes.style.display = "none";
	form.style.display = "flex";
});

form.addEventListener("submit", (evento) => {
	evento.preventDefault();
	const resrGu = obtRsrv();
	if (resrGu.length >= 10) {
		alert("Solo se guarda un maximo de 10 reservas");
		return;
	}

	const r = {
		co: document.querySelector("#core").value,
		ce: document.querySelector("#cel").value,
		fe: document.querySelector("#fe").value,
		ves: document.querySelector("#DNom").textContent,
		tll: tllEl,
		col: document.querySelector("#DColor").textContent
	};
	resrGu.push(r);
	localStorage.setItem("reservas", JSON.stringify(resrGu));
	moRsv(resrGu);
	form.reset();
	form.style.display = "none";
	btnRes.style.display = "block";
	reinTll();
	inc.style.display = "block";
	categ.style.display = "flex";
	detalle.style.display = "none";
});

function esRsrVal(reserva) {
	return reserva && ["co", "ce", "fe", "ves", "tll"].every((clave) => reserva[clave] !== undefined);
}

function obtRsrv() {
	const resrGu = localStorage.getItem("reservas");
	if (resrGu) {
		const rsv = JSON.parse(resrGu).filter(esRsrVal).slice(0, 10);
		localStorage.setItem("reservas", JSON.stringify(rsv));
		return rsv;
	}

	const resrAnt = localStorage.getItem("reserva");
	if (resrAnt) {
		const antigua = JSON.parse(resrAnt);
		const resv = esRsrVal(antigua) ? [antigua] : [];
		localStorage.setItem("reservas", JSON.stringify(resv));
		return resv;
	}

	return [];
}

function moRsv(reservas) {
	if (reservas.length === 0) {
		document.querySelector("#reVac").style.display = "block";
		document.querySelector("#resG").style.display = "none";
		return;
	}

	document.querySelector("#reVac").style.display = "none";
	document.querySelector("#resG").style.display = "block";
	document.querySelector("#resG").innerHTML = reservas.map((reserva) => `
		<div class="reserva-item">
			<strong>${reserva.ves}</strong><br>
			Talla: ${reserva.tll}<br>
			Correo: ${reserva.co}<br>
			Celular: ${reserva.ce}<br>
			Recogida: ${reserva.fe}
		</div>
	`).join("");
}

moRsv(obtRsrv());
