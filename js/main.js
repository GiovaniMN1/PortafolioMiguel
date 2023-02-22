/*
CODIGO PARA QUITAR EL NAV EN FIJO

let ubicacionPrincipal=window.pageYOffset;
window.onscroll=function () {
	let desplazamiento_actual=window.pageYOffset;
	if (ubicacionPrincipal >= desplazamiento_actual) {
		this.document.getElementById('nav').style.top="0";
	} else {
		this.document.getElementById('nav').style.top="-100px";

	}
	ubicacionPrincipal=desplazamiento_actual;
}
*/


let navegador=document.getElementById('nav')
window.onscroll=function () {
	let ubicacionscroll=window.pageYOffset;
	if (ubicacionscroll>=60) {
		navegador.classList.add('nav_scroll')
		
	} else {
		navegador.classList.remove('nav_scroll')
	}
}

/*ICONO */ 
const button=document.getElementById('icono');
const toggle1=document.getElementById('links');

button.addEventListener('click',()=>{
	toggle1.classList.toggle('links_toggle')
	
})
toggle1.addEventListener('click',()=>{
	toggle1.classList.toggle('links_toggle')
	
})

