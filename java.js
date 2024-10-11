let rachaActual = 0;
let habitSeleccionado = '';
let habitoSeleccionado = false; 

function registrarHabitoDiario() {
  const habitSelect = document.getElementById('habit-select');
  const habitOptions = document.getElementById('habit-options');

  if (!habitoSeleccionado) {
    habitSeleccionado = habitSelect.value;
    habitoSeleccionado = true;
    habitOptions.style.display = 'none';
    mostrarPopup(); 
  }
}

function completado() {
  const popupElement = document.getElementById('popup');

  rachaActual++;
  actualizarRacha();
  reiniciarPopup();
  deshabilitarHabitos();
}

function noCompletado() {
  reiniciarPopup();
  reiniciarRacha();
  habilitarHabitos();
}

function reiniciarPopup() {
  const popupElement = document.getElementById('popup');
  popupElement.style.display = 'none';
  
  habitSeleccionado = '';
  habitoSeleccionado = false;
}

function reiniciarRacha() {
  rachaActual = 0;
  actualizarRacha();
}

function habilitarHabitos() {
  const habitOptions = document.getElementById('habit-options');
  habitOptions.style.display = 'block';
}

function deshabilitarHabitos() {
  const habitOptions = document.getElementById('habit-options');
  habitOptions.style.display = 'none';
}

function mostrarPopup() {
  const popupElement = document.getElementById('popup');
  popupElement.style.display = 'flex';
}

function actualizarRacha() {
  const rachaCountElement = document.getElementById('racha-count');
  rachaCountElement.textContent = rachaActual;
}

function mostrarOpciones() {
  alert('Mostrar opciones de hábitos y racha aquí');
  mostrarContador(); 
}

function mostrarContador() {
  const reasonForm = document.getElementById('reason-form');
  const buttonsContainer = document.getElementById('buttons-container');
  const continueBtn = document.getElementById('continue-button');
}

reasonForm.style.display = 'none';
buttonsContainer.style.display = 'none';
continueBtn.style.display = 'block';

function setAlert() {
  const habit = document.getElementById('habit-select').value;
  const time = document.getElementById('time').value;

  if (habit && time) {
    const [hour, minute] = time.split(':');
    const now = new Date();
    const alertTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, 0, 0);

    if (alertTime < now) {
      alertTime.setDate(alertTime.getDate() + 1); // Set for the next day if time is in the past
    }

    const timeDifference = alertTime.getTime() - now.getTime();

    setTimeout(() => {
      alert(`¡Es hora de ${habit === 'dieta' ? 'Dieta Saludable' : habit === 'horario' ? 'Dormir Bien' : 'Hacer Ejercicio'}!`);
    }, timeDifference);

    alert(`Alerta configurada para ${habit === 'dieta' ? 'Dieta Saludable' : habit === 'horario' ? 'Dormir Bien' : 'Hacer Ejercicio'} a las ${time}.`);
  } else {
    alert('Por favor, selecciona un hábito y una hora.');
  }
}
