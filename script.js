document.addEventListener('DOMContentLoaded', () => {
    // Pega aquí el contenido de tu archivo JSON
    const data = [{"año":1,"periodo":1,"materias":[{"id":"b5d06eeb-3636-445a-a68e-f50dbc512918","nombre":"ICSE","tipo":"ninguno","requisitos":[]},{"id":"c37d6521-9d83-45fb-890e-fbea75fbf21f","nombre":"Pensamiento Computacional","tipo":"ninguno","requisitos":[]}]},{"año":1,"periodo":2,"materias":[{"id":"26d1b610-75aa-4d53-bef1-9b3a276fe88c","nombre":"Física","tipo":"ninguno","requisitos":[]},{"id":"dd7d851c-6e9b-4000-9758-135ae55400b2","nombre":"Analisis Matematico A","tipo":"ninguno","requisitos":[]}]},{"año":2,"periodo":1,"materias":[{"id":"0231f570-acea-4930-a04f-d72aa3375166","nombre":"Álgebra A","tipo":"ninguno","requisitos":[]}]},{"año":2,"periodo":2,"materias":[{"id":"449b7846-8f4d-4f08-b6fe-26aa82d028eb","nombre":"IPC","tipo":"ninguno","requisitos":[]}]},{"año":3,"periodo":1,"materias":[{"id":"36c2fbe0-0874-46ab-96de-266c4fc52c02","nombre":"Álgebra I","tipo":"ninguno","requisitos":["b5d06eeb-3636-445a-a68e-f50dbc512918","c37d6521-9d83-45fb-890e-fbea75fbf21f","26d1b610-75aa-4d53-bef1-9b3a276fe88c","dd7d851c-6e9b-4000-9758-135ae55400b2","0231f570-acea-4930-a04f-d72aa3375166","449b7846-8f4d-4f08-b6fe-26aa82d028eb"]},{"id":"26b3f6d9-2083-46ae-bdd3-cbb4874c02e8","nombre":"Introducción a la Programación","tipo":"ninguno","requisitos":["b5d06eeb-3636-445a-a68e-f50dbc512918","c37d6521-9d83-45fb-890e-fbea75fbf21f","26d1b610-75aa-4d53-bef1-9b3a276fe88c","dd7d851c-6e9b-4000-9758-135ae55400b2","0231f570-acea-4930-a04f-d72aa3375166","449b7846-8f4d-4f08-b6fe-26aa82d028eb"]}]},{"año":3,"periodo":2,"materias":[{"id":"b89cb7b5-b6f4-4b79-97d7-20017b13a1f8","nombre":"Análisis I","tipo":"ninguno","requisitos":["b5d06eeb-3636-445a-a68e-f50dbc512918","c37d6521-9d83-45fb-890e-fbea75fbf21f","26d1b610-75aa-4d53-bef1-9b3a276fe88c","dd7d851c-6e9b-4000-9758-135ae55400b2","0231f570-acea-4930-a04f-d72aa3375166","449b7846-8f4d-4f08-b6fe-26aa82d028eb"]},{"id":"c0efba75-51e6-47d2-8354-cb720eeca700","nombre":"Algoritmos y Estructuras de Datos","tipo":"ninguno","requisitos":["26b3f6d9-2083-46ae-bdd3-cbb4874c02e8","36c2fbe0-0874-46ab-96de-266c4fc52c02"]}]},{"año":4,"periodo":1,"materias":[{"id":"b9c46fbe-d90b-4735-a9aa-fdf111bd3cd1","nombre":"Técnicas de Diseño de Algoritmos","tipo":"ninguno","requisitos":["c0efba75-51e6-47d2-8354-cb720eeca700"]},{"id":"e8f2f764-0646-442e-80d0-bad22d19e1d2","nombre":"Sistemas Digitales","tipo":"ninguno","requisitos":["26b3f6d9-2083-46ae-bdd3-cbb4874c02e8"]},{"id":"a9516b96-6645-4c45-9d5e-49134f1b1b02","nombre":"Paradigmas de Programación","tipo":"ninguno","requisitos":["c0efba75-51e6-47d2-8354-cb720eeca700"]}]},{"año":4,"periodo":2,"materias":[{"id":"1ea32e1b-d8e5-419c-90a2-42320ab82cf9","nombre":"Lenguajes Formales, Autómatas y Computabilidad","tipo":"ninguno","requisitos":["c0efba75-51e6-47d2-8354-cb720eeca700"]},{"id":"a8977f5f-c271-4a89-9b9a-cb938b84c5aa","nombre":"Arquitectura y Organización de Computadores","tipo":"ninguno","requisitos":["e8f2f764-0646-442e-80d0-bad22d19e1d2"]},{"id":"a50d7df5-587b-4c4e-b214-f3ddee676ee5","nombre":"Ingeniería de Software","tipo":"ninguno","requisitos":["a9516b96-6645-4c45-9d5e-49134f1b1b02"]}]},{"año":5,"periodo":1,"materias":[{"id":"fc369ddc-e8b2-4499-b650-43b33cefa5ae","nombre":"Álgebra Lineal Computacional","tipo":"ninguno","requisitos":["c0efba75-51e6-47d2-8354-cb720eeca700"]},{"id":"b3adc00a-9f97-46ee-9c2a-8351a1044db1","nombre":"Complejidad Computacional","tipo":"ninguno","requisitos":["b9c46fbe-d90b-4735-a9aa-fdf111bd3cd1","1ea32e1b-d8e5-419c-90a2-42320ab82cf9"]},{"id":"7c00558d-37d3-48c0-9998-5c4e362d7b80","nombre":"Sistemas Operativos","tipo":"ninguno","requisitos":["a8977f5f-c271-4a89-9b9a-cb938b84c5aa"]}]},{"año":5,"periodo":2,"materias":[{"id":"9b8dd63c-5bde-4a1d-b172-47b9d79218ea","nombre":"Estadística Computacional","tipo":"ninguno","requisitos":["b89cb7b5-b6f4-4b79-97d7-20017b13a1f8"]},{"id":"cdf520fe-67c2-40e1-8c93-303abe694527","nombre":"Optativas","tipo":"ninguno","requisitos":[]},{"id":"ebb92007-93a3-48fb-8378-da0a79130fde","nombre":"Almacenamiento y Recuperación de la Información","tipo":"ninguno","requisitos":["a50d7df5-587b-4c4e-b214-f3ddee676ee5"]}]},{"año":6,"periodo":1,"materias":[{"id":"c9333b2a-8f10-4d47-a0aa-9fa5bb7d8fb6","nombre":"Optativas 2","tipo":"ninguno","requisitos":[]},{"id":"5cf62c9d-995f-4fbc-bd4f-9fde27918d5f","nombre":"Redes de Comunicaciones y Cómputo Distribuido","tipo":"ninguno","requisitos":["9b8dd63c-5bde-4a1d-b172-47b9d79218ea","b9c46fbe-d90b-4735-a9aa-fdf111bd3cd1","7c00558d-37d3-48c0-9998-5c4e362d7b80"]},{"id":"b7deb058-bf99-43d4-842a-51ba47005f80","nombre":"Programación Concurrente y Paralela","tipo":"ninguno","requisitos":["7c00558d-37d3-48c0-9998-5c4e362d7b80","a9516b96-6645-4c45-9d5e-49134f1b1b02"]}]},{"año":6,"periodo":2,"materias":[{"id":"d60b27a8-de06-4a9f-a2d2-cc7b5525ff19","nombre":"Seminario sobre Tecnología y Sociedad","tipo":"ninguno","requisitos":[]},{"id":"b2e0bde9-29b7-4edd-bedc-049f1c411913","nombre":"Optativas 3","tipo":"ninguno","requisitos":[]},{"id":"1052fc5d-2cff-4520-a8ac-8b2800b1c203","nombre":"Tesis","tipo":"ninguno","requisitos":[]}]}];

    const container = document.getElementById('malla-container');
    const todasLasMaterias = new Map();
    data.forEach(periodo => periodo.materias.forEach(materia => todasLasMaterias.set(materia.id, materia)));

    // 1. Agrupar periodos por año
    const periodosPorAno = data.reduce((acc, periodo) => {
        const ano = periodo.año;
        if (!acc[ano]) {
            acc[ano] = [];
        }
        acc[ano].push(periodo);
        return acc;
    }, {});

    // 2. Crear la estructura de la malla por años
    Object.keys(periodosPorAno).sort((a,b) => a - b).forEach(ano => {
        const yearContainer = document.createElement('div');
        yearContainer.classList.add('year-container');
        yearContainer.innerHTML = `<h2 class="year-header">Año ${ano}</h2>`;

        const periodsContainer = document.createElement('div');
        periodsContainer.classList.add('periods-container');
        
        periodosPorAno[ano].forEach(periodoData => {
            const periodoDiv = document.createElement('div');
            periodoDiv.classList.add('periodo');
            periodoDiv.innerHTML = `<h2>Período ${periodoData.periodo}</h2>`;

            periodoData.materias.forEach(materia => {
                const materiaDiv = document.createElement('div');
                materiaDiv.classList.add('materia');
                materiaDiv.textContent = materia.nombre;
                materiaDiv.dataset.id = materia.id;
                materiaDiv.addEventListener('click', () => toggleCompleted(materia.id));
                periodoDiv.appendChild(materiaDiv);
            });
            periodsContainer.appendChild(periodoDiv);
        });
        
        yearContainer.appendChild(periodsContainer);
        container.appendChild(yearContainer);
    });

    function toggleCompleted(id) {
        const materiaDiv = document.querySelector(`[data-id="${id}"]`);
        const isAvailable = materiaDiv.classList.contains('available');
        const isCompleted = materiaDiv.classList.contains('completed');

        // 3. Permitir el click solo si está disponible o ya completada (para deshacer)
        if (isAvailable || isCompleted) {
            materiaDiv.classList.toggle('completed');
            updateMalla();
        }
    }

    function updateMalla() {
        const completedIds = new Set(
            Array.from(document.querySelectorAll('.materia.completed')).map(m => m.dataset.id)
        );

        todasLasMaterias.forEach(materia => {
            const materiaDiv = document.querySelector(`[data-id="${materia.id}"]`);
            
            // 4. Lógica de disponibilidad corregida
            if (!materiaDiv.classList.contains('completed')) {
                const requisitos = materia.requisitos || [];
                // 'every' devuelve true para arrays vacíos, lo cual es perfecto.
                const allPrereqsMet = requisitos.every(reqId => completedIds.has(reqId));
                
                if (allPrereqsMet) {
                    materiaDiv.classList.add('available');
                } else {
                    materiaDiv.classList.remove('available');
                }
            } else {
                // Una materia completada ya no debe estar "disponible"
                materiaDiv.classList.remove('available');
            }
        });
    }

    // Llamada inicial para establecer el estado base
    updateMalla();
});
