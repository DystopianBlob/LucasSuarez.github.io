let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/invader.png') {
      miImage.setAttribute('src','images/invaderZim.png');
    } else {
      miImage.setAttribute('src', 'images/invader.png');
    }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if (!miNombre) {
      estableceNombreUsuario();
    } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Lali-hoo,' + miNombre + '!';
   }
}
if (!localStorage.getItem('nombre')) {
  estableceNombreUsuario();
}
else {
  let nombreAlmacenado = localStorage.getItem('nombre');
  miTitulo.textContent = 'Lali-hoo,' + nombreAlmacenado + '!';
}
miBoton.onclick = function(){
  estableceNombreUsuario();
}
