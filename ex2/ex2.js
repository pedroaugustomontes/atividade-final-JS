document.addEventListener('DOMContentLoaded', function () {
  const formularioDinamico = document.getElementById('formularioDinamico');
  const adicionarCampoBtn = document.getElementById('adicionarCampo');
  const adicionarCheckboxBtn = document.getElementById('adicionarCheckbox');

  adicionarCampoBtn.addEventListener('click', adicionarCampoTexto);
  adicionarCheckboxBtn.addEventListener('click', adicionarCheckbox);

  function adicionarCampoTexto() {
    const div = document.createElement('div');
    div.className = 'campo';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Digite aqui';

    const botaoRemover = document.createElement('button');
    botaoRemover.className = 'botaoRemover';
    botaoRemover.textContent = 'Remover';
    botaoRemover.addEventListener('click', removerCampo);

    div.appendChild(input);
    div.appendChild(botaoRemover);
    formularioDinamico.appendChild(div);
  }

  function adicionarCheckbox() {
    const div = document.createElement('div');
    div.className = 'campo';

    const input = document.createElement('input');
    input.type = 'checkbox';

    const label = document.createElement('label');
    label.textContent = 'Seleção';

    const botaoRemover = document.createElement('button');
    botaoRemover.className = 'botaoRemover';
    botaoRemover.textContent = 'Remover';
    botaoRemover.addEventListener('click', removerCampo);

    div.appendChild(input);
    div.appendChild(label);
    div.appendChild(botaoRemover);
    formularioDinamico.appendChild(div);
  }

  function removerCampo(event) {
    const campo = event.target.parentElement;
    formularioDinamico.removeChild(campo);
  }
});
