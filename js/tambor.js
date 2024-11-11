
// Obtener elementos
const modal1 = document.getElementById("modal1");
const openModalBtn1 = document.getElementById("openModal1");
const closeModalBtn1 = document.querySelector(".close-btn1");

// Función para abrir el modal
openModalBtn1.addEventListener("click", () => {
  modal1.style.display = "flex";
});

// Función para cerrar el modal
closeModalBtn1.addEventListener("click", () => {
  modal1.style.display = "none";
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener("click", (event) => {
  if (event.target === modal1) {
    modal1.style.display = "none";
  }
});







const drums = document.querySelectorAll('.drum');


const keyboardkeys = ["1","3","2","4","5","6","7","8","9"];


function play(drum) {
  const audio = document.getElementById(drum.dataset.note);
  audio.currentTime = 0; // repetir el sodino
  audio.play(); // Reproducir el sonido
}

for(let i = 0; i < drums.length; i++){

    drums[i].addEventListener("touchstart", () => play(drums[i]));

}



document.addEventListener('keydown', e => {
  if(e.repeat) return;

  const key = e.key.toLowerCase();
  
  const keyIndex = keyboardkeys.indexOf(key);

  if(keyIndex > -1) play(drums[keyIndex]);

});




/*esto es para que el tambor se oscuresca cuando se toque porque no hace rato no se oscurecia*/
const drums2 = document.querySelectorAll('.drumkit div');

function activateDrum(drum) {
    drum.classList.add('drum-active');

    const audio = document.getElementById(drum.dataset.note);

    audio.CurrentTime = 0;

    audio.play();
}

//  desactivar el tambor
function deactivateDrum(drum) {
    drum.classList.remove('drum-active'); // Eliminar clase para volver a la normalidad
}

//evento de clic a cada tambor
drums2.forEach(drum => {
    drum.addEventListener('click', () => {
        activateDrum(drum);
        setTimeout(() => deactivateDrum(drum), 200); //se desactiva despues de 200  milisegundio 
    });
});

// Agregar evento de teclado
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase(); //tecla presionada

    
    const keyToDrumMap = {
        '3': document.querySelector('.kick-r'), 
        '1': document.querySelector('.kick'), 
        '2': document.querySelector('.snare'), 
        '5': document.querySelector('.tom1'),  
        '6': document.querySelector('.tom2'),   
        '7': document.querySelector('.tom3'),   
        '4': document.querySelector('.hithat'),  
        '8': document.querySelector('.crash1'), 
        '9': document.querySelector('.crash2')  
    };

    const drum = keyToDrumMap[key];
    if (drum) {
        activateDrum(drum);
        setTimeout(() => deactivateDrum(drum), 200); // Desactivar después de 200 ms
    }
});