function showExercise(exerciseId) {
    // Obtener el contenido de los ejercicios para el rango de peso seleccionado
    const exerciseContent = exercises[exerciseId];
    
    // Mostrar el contenido en el modal
    const modalContent = document.getElementById('modal-exercise-content');
    modalContent.innerHTML = exerciseContent;
    
    // Mostrar el modal
    const modal = document.getElementById('exercise-modal');
    modal.style.display = 'block';
}

function closeModal() {
    // Ocultar el modal
    const modal = document.getElementById('exercise-modal');
    modal.style.display = 'none';
}

// Rutinas de ejercicio para cada rango de peso
const exercises = {
    "exercises1": `
        <h2>Rutina para personas entre 50kg y 70kg</h2>
        <p><strong>Objetivo:</strong> Aumentar la masa muscular y mejorar la fuerza.</p>
        <p><strong>Frecuencia:</strong> 4-5 días por semana.</p>
        <p><strong>Calentamiento:</strong> 10 minutos de cardio ligero (caminata rápida o bicicleta).</p>
        <h3>Día 1: Piernas y Glúteos</h3>
        <ul>
            <li>Sentadillas con peso: 4 series de 8-10 repeticiones.</li>
            <li>Prensa de piernas: 4 series de 8-10 repeticiones.</li>
            <li>Zancadas con mancuernas: 3 series de 10 repeticiones por pierna.</li>
            <li>Elevación de talones (pantorrillas): 4 series de 12-15 repeticiones.</li>
        </ul>
        <h3>Día 2: Espalda y Bíceps</h3>
        <ul>
            <li>Peso muerto: 4 series de 6-8 repeticiones.</li>
            <li>Remo con barra: 4 series de 8-10 repeticiones.</li>
            <li>Dominadas (o jalones en polea si no puedes hacer dominadas): 4 series de 8-10 repeticiones.</li>
            <li>Curl de bíceps con barra: 4 series de 10-12 repeticiones.</li>
        </ul>
        <h3>Día 3: Pecho y Tríceps</h3>
        <ul>
            <li>Press de banca: 4 series de 8-10 repeticiones.</li>
            <li>Press inclinado con mancuernas: 4 series de 8-10 repeticiones.</li>
            <li>Fondos en paralelas: 3 series de 8-10 repeticiones.</li>
            <li>Extensiones de tríceps en polea: 4 series de 10-12 repeticiones.</li>
        </ul>
        <h3>Día 4: Hombros y Abdomen</h3>
        <ul>
            <li>Press militar con barra: 4 series de 8-10 repeticiones.</li>
            <li>Elevaciones laterales con mancuernas: 3 series de 10-12 repeticiones.</li>
            <li>Elevaciones frontales con mancuernas: 3 series de 10-12 repeticiones.</li>
            <li>Abdominales en plancha: 3 series de 30-60 segundos.</li>
        </ul>
        <h3>Día 5: Cardio ligero o descanso activo</h3>
    `,
    "exercises2": `
        <h2>Rutina para personas entre 70kg y 90kg</h2>
        <p><strong>Objetivo:</strong> Mantener el peso corporal, tonificar los músculos y mejorar la resistencia.</p>
        <p><strong>Frecuencia:</strong> 4-5 días por semana.</p>
        <p><strong>Calentamiento:</strong> 10-15 minutos de cardio moderado (trotar, bicicleta).</p>
        <h3>Día 1: Full Body (Cuerpo Completo)</h3>
        <ul>
            <li>Sentadillas: 4 series de 12 repeticiones.</li>
            <li>Press de banca: 4 series de 12 repeticiones.</li>
            <li>Remo con mancuernas: 4 series de 12 repeticiones.</li>
            <li>Fondos en paralelas: 4 series de 12 repeticiones.</li>
            <li>Abdominales (crunches): 4 series de 15-20 repeticiones.</li>
        </ul>
        <h3>Día 2: Cardio + Core</h3>
        <ul>
            <li>30-40 minutos de cardio (correr, nadar, bicicleta).</li>
            <li>Planchas: 3 series de 1 minuto.</li>
            <li>Elevación de piernas: 4 series de 15 repeticiones.</li>
        </ul>
        <h3>Día 3: Circuito de fuerza y resistencia</h3>
        <ul>
            <li>Burpees: 15 repeticiones.</li>
            <li>Saltos de caja: 15 repeticiones.</li>
            <li>Kettlebell swings: 20 repeticiones.</li>
            <li>Flexiones: 15-20 repeticiones.</li>
        </ul>
        <h3>Día 4: Descanso activo (caminar, yoga) o cardio ligero</h3>
        <h3>Día 5: Cuerpo Completo (enfocado en resistencia)</h3>
        <ul>
            <li>Peso muerto rumano: 4 series de 15 repeticiones.</li>
            <li>Press inclinado con mancuernas: 4 series de 15 repeticiones.</li>
            <li>Zancadas: 3 series de 15 repeticiones por pierna.</li>
            <li>Press militar con mancuernas: 3 series de 12-15 repeticiones.</li>
        </ul>
    `,
    "exercises3": `
        <h2>Rutina para personas entre 90kg y 110kg</h2>
        <p><strong>Objetivo:</strong> Mejorar la condición física general, reducir la grasa corporal y tonificar los músculos.</p>
        <p><strong>Frecuencia:</strong> 5-6 días por semana.</p>
        <p><strong>Calentamiento:</strong> 15-20 minutos de cardio (caminata rápida, elíptica, bicicleta).</p>
        <h3>Día 1: Cardio HIIT (Entrenamiento de Intervalos de Alta Intensidad)</h3>
        <ul>
            <li>5-10 minutos de calentamiento.</li>
            <li>20 minutos de HIIT:
                <ul>
                    <li>30 segundos de sprint / 30 segundos de caminata (alternar).</li>
                </ul>
            </li>
            <li>5 minutos de enfriamiento.</li>
        </ul>
        <h3>Día 2: Fuerza (Circuito de cuerpo completo)</h3>
        <ul>
            <li>Sentadillas con peso corporal: 20 repeticiones.</li>
            <li>Flexiones: 15-20 repeticiones.</li>
            <li>Peso muerto con mancuernas: 15 repeticiones.</li>
            <li>Kettlebell swings: 20 repeticiones.</li>
            <li>Planchas: 1 minuto.</li>
        </ul>
        <h3>Día 3: Cardio (Sesión larga)</h3>
        <ul>
            <li>45-60 minutos de cardio (correr, ciclismo, natación).</li>
        </ul>
        <h3>Día 4: Entrenamiento de Fuerza</h3>
        <ul>
            <li>Sentadillas con barra: 4 series de 8-10 repeticiones.</li>
            <li>Press de banca: 4 series de 8-10 repeticiones.</li>
            <li>Remo con barra: 4 series de 8-10 repeticiones.</li>
            <li>Abdominales (crunches): 4 series de 15-20 repeticiones.</li>
        </ul>
        <h3>Día 5: Cardio HIIT o circuito de fuerza</h3>
        <h3>Día 6: Cardio moderado o descanso activo (yoga, caminar)</h3>
    `,
};
