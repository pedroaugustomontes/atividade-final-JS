document.addEventListener('DOMContentLoaded', function () {
  const novaTarefaInput = document.getElementById('novaTarefa');
  const adicionarTarefaBtn = document.getElementById('adicionarTarefa');
  const listaTarefas = document.getElementById('listaTarefas');

  adicionarTarefaBtn.addEventListener('click', adicionarTarefa);

  function adicionarTarefa() {
    const descricaoTarefa = novaTarefaInput.value.trim();
    if (descricaoTarefa !== '') {
      const li = document.createElement('li');
      li.className = 'tarefa';

      const span = document.createElement('span');
      span.textContent = descricaoTarefa;
      span.className = 'descricao';

      const editarBtn = document.createElement('button');
      editarBtn.textContent = 'Editar';
      editarBtn.className = 'botao editar';
      editarBtn.addEventListener('click', editarTarefa);

      const concluirBtn = document.createElement('button');
      concluirBtn.textContent = 'Concluir';
      concluirBtn.className = 'botao concluir';
      concluirBtn.addEventListener('click', concluirTarefa);

      const removerBtn = document.createElement('button');
      removerBtn.textContent = 'Remover';
      removerBtn.className = 'botao remover';
      removerBtn.addEventListener('click', removerTarefa);

      li.appendChild(span);
      li.appendChild(editarBtn);
      li.appendChild(concluirBtn);
      li.appendChild(removerBtn);
      listaTarefas.appendChild(li);

      novaTarefaInput.value = '';
    }
  }

  function editarTarefa(event) {
    const tarefa = event.target.parentElement;
    const descricao = tarefa.querySelector('.descricao');
    const novaDescricao = prompt('Editar tarefa:', descricao.textContent);
    if (novaDescricao !== null) {
      descricao.textContent = novaDescricao.trim();
    }
  }

  function concluirTarefa(event) {
    const tarefa = event.target.parentElement;
    const descricao = tarefa.querySelector('.descricao');
    descricao.classList.toggle('tarefaConcluida');
  }

  function removerTarefa(event) {
    const tarefa = event.target.parentElement;
    listaTarefas.removeChild(tarefa);
  }
});
