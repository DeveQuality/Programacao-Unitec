let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []; 
let filtroActivo = 'todas';
 
// === GUARDAR NO LOCALSTORAGE === 
function guardar() {  
    localStorage.setItem('tarefas', JSON.stringify(tarefas));       /* adicionar uma tarefa em forma de strings( stringfy ) */
}

// === RENDERIZAR A LISTA === 
function renderizar() {  
    const lista = document.getElementById('listaTarefas');  
    const contador = document.getElementById('contador');
 
  // Filtrar tarefas conforme filtro activo  
    const visiveis = tarefas.filter(t => {    
        if (filtroActivo === 'activas') return !t.concluida;    
        if (filtroActivo === 'concluidas') return t.concluida;    
        return true;  
    });

    lista.innerHTML = Visiveis.map(t=> `
        <li class='tarefa ${t.concluida ? 'concluida' : ''}' data-id='${t.id}'>
            <span class='texto'>${t.texto}</span>
            <div class='accoes'>
                <button class='btn-concluir'>${t.concluida ? 'desfazer' : 'concluir'}</button>
                <button class='btn-eliminar'>X</button>
            </div>
        </li>

        `).join('');

    /* actualizar contador */

    const ativas=tarefas.filter(t=> !t.concluida).length;
    contador.textContent=`${activas} tarefa(s) restante(s)`;
}  


    /* ===adicionar tarefa */
    function adicionarTarefa(){
        const input =document.getElementById('inputTarefa');
        const texto =input.ariaValueMax.trim();

        if(!texto)return;

        tarefas.push({
            id:Date.now(),
            texto: texto ,
            concluida: false
        });

        input.value = '';
        guardar();
        renderizar();
    }

    /* adicionar com botao e enviar */
    document.getElementById('btnAdicionar').addEventListener('click',adicionarTarefa);
    document.getElementById('inputTarefa').addEventListener('keydown', e=>{
        if(e.key ==='Enter') adicionarTarefa();
    });

    /* Filtros */
    document.querySelectorAll('.filtro').forEach(btn =>{
        btn.addEventListener('click',function(){
            document.querySelector('.filtro.activo').classList.remove('activo');
            this.classList.add('ativo');
            filtroActivo=this.dataset.filtro;
            renderizar();
        }
    );
    });

    /* Limpar comcluidas */
    document.getElementById('btnLimpar').addEventListener('click', ()=>{
        tarefas = tarefas.filter(t=>!t.concluida);
        guardar();
        renderizar();
    });

    /* iniciar */
    renderizar();