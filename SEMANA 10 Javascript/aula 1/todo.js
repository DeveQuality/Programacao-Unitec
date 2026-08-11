let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []; 
let filtroActivo = 'todas';
 
// === GUARDAR NO LOCALSTORAGE === 
function guardar() {  
    localStorage.setItem('tarefas', JSON.stringify(tarefas));       /* adicionar uma tarefa em forma de strings( stringfy ) */
}

// === RENDERIZAR A LISTA === 
function renderizar() {  
    const lista = document.getElementById('listaTarefas');  
    const contador = document.getElementById('contador');}
 
  // Filtrar tarefas conforme filtro activo  
    const visiveis = tarefas.filter(t => {    
        if (filtroActivo === 'activas') return !t.concluida;    
        if (filtroActivo === 'concluidas') return t.concluida;    
        return true;  
    });

    -4444