function showDiet(dietId) {
    // Obtener el contenido de la dieta para la semana y rango de peso seleccionado
    const dietContent = diets[dietId];
    
    // Mostrar el contenido en el modal
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = dietContent;
    
    // Mostrar el modal
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

function closeModal() {
    // Ocultar el modal
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Dietas para cada semana y rango de peso
const diets = {
    "week1-diet1": `
        <h2>Semana 1: Dieta para personas entre 50kg y 70kg</h2>
        <p><strong>Día 1:</strong> Avena con frutas, pollo con arroz integral, y pescado al horno.</p>
        <p><strong>Día 2:</strong> Omelette con espinacas, ensalada de atún, y sopa de verduras.</p>
        <p><strong>Día 3:</strong> Tostadas integrales con aguacate, pechuga de pollo con quinoa, y ensalada de espinacas.</p>
        <p><strong>Día 4:</strong> Batido de proteínas con frutas, ensalada de pollo, y pescado al vapor.</p>
        <p><strong>Día 5:</strong> Yogur con granola, arroz con verduras y pollo a la plancha.</p>
        <p><strong>Día 6:</strong> Avena con nueces, ensalada de atún con aguacate, y sopa de calabaza.</p>
        <p><strong>Día 7:</strong> Omelette de claras con champiñones, pechuga de pavo con patatas, y ensalada de tomate.</p>
    `,
    "week1-diet2": `
        <h2>Semana 1: Dieta para personas entre 70kg y 90kg</h2>
        <p><strong>Día 1:</strong> Batido de proteínas con frutas, quinoa con pollo, y salmón a la plancha.</p>
        <p><strong>Día 2:</strong> Tostadas integrales con aguacate, ensalada de pavo, y sopa de lentejas.</p>
        <p><strong>Día 3:</strong> Yogur con frutos secos, arroz con verduras y filete de ternera.</p>
        <p><strong>Día 4:</strong> Smoothie de frutas, ensalada de pollo, y pescado al horno.</p>
        <p><strong>Día 5:</strong> Avena con pasas, ensalada de atún con aguacate, y pechuga de pollo a la plancha.</p>
        <p><strong>Día 6:</strong> Batido de proteínas, ensalada de quinoa con pavo, y sopa de verduras.</p>
        <p><strong>Día 7:</strong> Tostadas integrales con hummus, filete de pescado con batatas, y ensalada de espinacas.</p>
    `,
    "week1-diet3": `
        <h2>Semana 1: Dieta para personas entre 90kg y 110kg</h2>
        <p><strong>Día 1:</strong> Omelette de claras, pechuga de pavo con batata, y ensalada verde.</p>
        <p><strong>Día 2:</strong> Yogur griego con nueces, pollo al vapor con verduras, y tofu al horno.</p>
        <p><strong>Día 3:</strong> Smoothie verde, ensalada de pavo con aguacate, y pescado con brócoli.</p>
        <p><strong>Día 4:</strong> Tostadas integrales con aguacate, sopa de lentejas, y pollo al horno.</p>
        <p><strong>Día 5:</strong> Avena con frutas, ensalada de pollo, y filete de salmón.</p>
        <p><strong>Día 6:</strong> Yogur con granola, sopa de verduras y tofu a la plancha.</p>
        <p><strong>Día 7:</strong> Batido de proteínas, pechuga de pavo con quinoa, y ensalada de tomate.</p>
    `,
    "week2-diet1": `
        <h2>Semana 2: Dieta para personas entre 50kg y 70kg</h2>
        <p><strong>Día 1:</strong> Tostadas integrales con aguacate, pechuga de pollo con arroz, y pescado al vapor.</p>
        <p><strong>Día 2:</strong> Avena con frutos secos, ensalada de atún, y sopa de verduras.</p>
        <p><strong>Día 3:</strong> Batido de proteínas con frutas, ensalada de pollo, y quinoa con verduras.</p>
        <p><strong>Día 4:</strong> Omelette con espinacas, pechuga de pavo con batatas, y ensalada de espinacas.</p>
        <p><strong>Día 5:</strong> Yogur con granola, arroz integral con verduras, y pollo a la plancha.</p>
        <p><strong>Día 6:</strong> Smoothie de frutas, ensalada de atún con aguacate, y sopa de calabaza.</p>
        <p><strong>Día 7:</strong> Avena con miel, pechuga de pollo con batata, y ensalada de espinacas.</p>
    `,
    "week2-diet2": `
        <h2>Semana 2: Dieta para personas entre 70kg y 90kg</h2>
        <p><strong>Día 1:</strong> Yogur con granola, filete de ternera con quinoa, y pollo al horno.</p>
        <p><strong>Día 2:</strong> Batido de frutas, ensalada de pollo, y pescado con verduras al vapor.</p>
        <p><strong>Día 3:</strong> Omelette con champiñones, ensalada de atún, y quinoa con pavo.</p>
        <p><strong>Día 4:</strong> Smoothie verde, arroz integral con verduras, y pechuga de pollo.</p>
        <p><strong>Día 5:</strong> Avena con frutos secos, ensalada de pavo, y sopa de lentejas.</p>
        <p><strong>Día 6:</strong> Tostadas integrales con aguacate, ensalada de quinoa, y pescado al horno.</p>
        <p><strong>Día 7:</strong> Yogur con frutas, pollo a la plancha con batata, y ensalada de espinacas.</p>
    `,
    "week2-diet3": `
        <h2>Semana 2: Dieta para personas entre 90kg y 110kg</h2>
        <p><strong>Día 1:</strong> Smoothie verde, pechuga de pavo con ensalada, y sopa de lentejas.</p>
        <p><strong>Día 2:</strong> Omelette de verduras, pescado al horno con patatas, y ensalada mixta.</p>
        <p><strong>Día 3:</strong> Batido de proteínas con frutas, quinoa con pollo, y sopa de verduras.</p>
        <p><strong>Día 4:</strong> Tostadas integrales con hummus, ensalada de pollo, y pescado al vapor.</p>
        <p><strong>Día 5:</strong> Avena con miel, ensalada de atún, y tofu a la plancha.</p>
        <p><strong>Día 6:</strong> Yogur con granola, pollo con batatas, y sopa de calabaza.</p>
        <p><strong>Día 7:</strong> Smoothie de frutas, filete de salmón con quinoa, y ensalada verde.</p>
    `,
    "week3-diet1": `
        <h2>Semana 3: Dieta para personas entre 50kg y 70kg</h2>
        <p><strong>Día 1:</strong> Avena con miel, pechuga de pollo con quinoa, y salmón al horno.</p>
        <p><strong>Día 2:</strong> Yogur con frutas, ensalada de pavo, y sopa de calabaza.</p>
        <p><strong>Día 3:</strong> Batido de proteínas, ensalada de pollo, y quinoa con verduras.</p>
        <p><strong>Día 4:</strong> Omelette con espinacas, arroz integral con verduras, y pechuga de pavo.</p>
        <p><strong>Día 5:</strong> Tostadas integrales con aguacate, ensalada de atún, y pollo a la plancha.</p>
        <p><strong>Día 6:</strong> Smoothie verde, ensalada de pollo, y sopa de lentejas.</p>
        <p><strong>Día 7:</strong> Avena con nueces, pechuga de pollo con batata, y ensalada de espinacas.</p>
    `,
    "week3-diet2": `
        <h2>Semana 3: Dieta para personas entre 70kg y 90kg</h2>
        <p><strong>Día 1:</strong> Batido de frutas, pechuga de pollo con quinoa, y ensalada verde.</p>
        <p><strong>Día 2:</strong> Tostadas integrales con aguacate, ensalada de pavo, y sopa de verduras.</p>
        <p><strong>Día 3:</strong> Yogur con granola, filete de ternera con arroz integral, y ensalada de espinacas.</p>
        <p><strong>Día 4:</strong> Smoothie de frutas, ensalada de pollo, y pescado con brócoli.</p>
        <p><strong>Día 5:</strong> Avena con frutos secos, ensalada de atún, y pollo al horno.</p>
        <p><strong>Día 6:</strong> Omelette con espinacas, ensalada de quinoa, y sopa de lentejas.</p>
        <p><strong>Día 7:</strong> Yogur con frutas, filete de salmón con batata, y ensalada de tomate.</p>
    `,
    "week3-diet3": `
        <h2>Semana 3: Dieta para personas entre 90kg y 110kg</h2>
        <p><strong>Día 1:</strong> Smoothie verde, ensalada de pollo, y quinoa con verduras.</p>
        <p><strong>Día 2:</strong> Tostadas integrales con aguacate, sopa de lentejas, y pechuga de pavo.</p>
        <p><strong>Día 3:</strong> Avena con frutas, ensalada de atún, y pescado al horno.</p>
        <p><strong>Día 4:</strong> Batido de proteínas, ensalada de pollo, y sopa de calabaza.</p>
        <p><strong>Día 5:</strong> Yogur con granola, filete de salmón con batata, y ensalada verde.</p>
        <p><strong>Día 6:</strong> Smoothie de frutas, ensalada de quinoa, y pollo al horno.</p>
        <p><strong>Día 7:</strong> Avena con nueces, pechuga de pavo con quinoa, y ensalada de espinacas.</p>
    `,
    "week4-diet1": `
        <h2>Semana 4: Dieta para personas entre 50kg y 70kg</h2>
        <p><strong>Día 1:</strong> Tostadas integrales con aguacate, pechuga de pollo con quinoa, y pescado al horno.</p>
        <p><strong>Día 2:</strong> Avena con frutas, ensalada de atún, y sopa de verduras.</p>
        <p><strong>Día 3:</strong> Batido de proteínas, ensalada de pollo, y arroz integral con verduras.</p>
        <p><strong>Día 4:</strong> Omelette con espinacas, ensalada de pavo, y pechuga de pollo con batatas.</p>
        <p><strong>Día 5:</strong> Yogur con granola, ensalada de atún, y pollo a la plancha.</p>
        <p><strong>Día 6:</strong> Smoothie verde, ensalada de pollo, y sopa de calabaza.</p>
        <p><strong>Día 7:</strong> Avena con nueces, pechuga de pavo con batata, y ensalada de espinacas.</p>
    `,
    "week4-diet2": `
        <h2>Semana 4: Dieta para personas entre 70kg y 90kg</h2>
        <p><strong>Día 1:</strong> Batido de frutas, ensalada de pollo, y quinoa con verduras.</p>
        <p><strong>Día 2:</strong> Tostadas integrales con aguacate, ensalada de pavo, y sopa de verduras.</p>
        <p><strong>Día 3:</strong> Yogur con granola, filete de ternera con arroz integral, y ensalada de espinacas.</p>
        <p><strong>Día 4:</strong> Smoothie de frutas, ensalada de pollo, y pescado con brócoli.</p>
        <p><strong>Día 5:</strong> Avena con frutos secos, ensalada de atún, y pollo al horno.</p>
        <p><strong>Día 6:</strong> Omelette con espinacas, ensalada de quinoa, y sopa de lentejas.</p>
        <p><strong>Día 7:</strong> Yogur con frutas, filete de salmón con batata, y ensalada de tomate.</p>
    `,
    "week4-diet3": `
        <h2>Semana 4: Dieta para personas entre 90kg y 110kg</h2>
        <p><strong>Día 1:</strong> Smoothie verde, ensalada de pollo, y quinoa con verduras.</p>
        <p><strong>Día 2:</strong> Tostadas integrales con aguacate, sopa de lentejas, y pechuga de pavo.</p>
        <p><strong>Día 3:</strong> Avena con frutas, ensalada de atún, y pescado al horno.</p>
        <p><strong>Día 4:</strong> Batido de proteínas, ensalada de pollo, y sopa de calabaza.</p>
        <p><strong>Día 5:</strong> Yogur con granola, filete de salmón con batata, y ensalada verde.</p>
        <p><strong>Día 6:</strong> Smoothie de frutas, ensalada de quinoa, y pollo al horno.</p>
        <p><strong>Día 7:</strong> Avena con nueces, pechuga de pavo con quinoa, y ensalada de espinacas.</p>
    `,
};
