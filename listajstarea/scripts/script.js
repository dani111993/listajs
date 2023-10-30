// Obtén referencias a los elementos del DOM
const inputTarea = document.getElementById('tarea');
const botonAgregarTarea = document.getElementById('agregarTarea');
const listaTareas = document.getElementById('listaTareas');

// Añade un evento al botón para manejar la adición de tareas
botonAgregarTarea.addEventListener('click', () => {
    // Obtiene el valor del campo de entrada de texto
    const nuevaTarea = inputTarea.value;

    if (nuevaTarea.trim() !== '') {
        // Crea un nuevo elemento de lista (li) para la tarea
        const nuevaTareaElemento = document.createElement('li');
        nuevaTareaElemento.textContent = nuevaTarea;

        // Agrega la nueva tarea a la lista
        listaTareas.appendChild(nuevaTareaElemento);

        // Borra el contenido del campo de entrada de texto
        inputTarea.value = '';
    }
});
