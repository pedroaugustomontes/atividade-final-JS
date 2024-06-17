document.addEventListener('DOMContentLoaded', function () {
  const dados = [
    {
      especie: 'Baleia Azul',
      tamanho: 30,
      peso: 180000,
      habitat: 'Oceano Antártico',
    },
    {
      especie: 'Baleia Jubarte',
      tamanho: 16,
      peso: 36000,
      habitat: 'Oceano Atlântico',
    },
    {
      especie: 'Baleia Cinzenta',
      tamanho: 14,
      peso: 32000,
      habitat: 'Oceano Pacífico',
    },
    { especie: 'Orca', tamanho: 9, peso: 5500, habitat: 'Oceano Ártico' },
    {
      especie: 'Baleia Minke',
      tamanho: 10,
      peso: 9000,
      habitat: 'Oceano Atlântico',
    },
    // Adicione mais dados conforme necessário
  ];

  const tabela = document
    .getElementById('tabelaDados')
    .getElementsByTagName('tbody')[0];
  const filtroEspecie = document.getElementById('filtroEspecie');
  const filtroTamanho = document.getElementById('filtroTamanho');
  const filtroPeso = document.getElementById('filtroPeso');
  const filtroHabitat = document.getElementById('filtroHabitat');
  let ordemAscendente = true;

  function renderizarTabela(dadosFiltrados) {
    tabela.innerHTML = '';
    dadosFiltrados.forEach((dado) => {
      const row = tabela.insertRow();
      const cellEspecie = row.insertCell(0);
      const cellTamanho = row.insertCell(1);
      const cellPeso = row.insertCell(2);
      const cellHabitat = row.insertCell(3);
      cellEspecie.textContent = dado.especie;
      cellTamanho.textContent = dado.tamanho;
      cellPeso.textContent = dado.peso;
      cellHabitat.textContent = dado.habitat;
    });
  }

  function filtrarDados() {
    const especieFiltro = filtroEspecie.value.toLowerCase();
    const tamanhoFiltro = filtroTamanho.value;
    const pesoFiltro = filtroPeso.value;
    const habitatFiltro = filtroHabitat.value.toLowerCase();

    const dadosFiltrados = dados.filter((dado) => {
      const especieCondicao = dado.especie
        .toLowerCase()
        .includes(especieFiltro);
      const tamanhoCondicao =
        tamanhoFiltro === '' || dado.tamanho.toString() === tamanhoFiltro;
      const pesoCondicao =
        pesoFiltro === '' || dado.peso.toString() === pesoFiltro;
      const habitatCondicao = dado.habitat
        .toLowerCase()
        .includes(habitatFiltro);
      return (
        especieCondicao && tamanhoCondicao && pesoCondicao && habitatCondicao
      );
    });
    renderizarTabela(dadosFiltrados);
  }

  function ordenarDados(coluna) {
    const dadosOrdenados = [...dados].sort((a, b) => {
      if (a[coluna] < b[coluna]) return ordemAscendente ? -1 : 1;
      if (a[coluna] > b[coluna]) return ordemAscendente ? 1 : -1;
      return 0;
    });
    ordemAscendente = !ordemAscendente;
    renderizarTabela(dadosOrdenados);
  }

  filtroEspecie.addEventListener('input', filtrarDados);
  filtroTamanho.addEventListener('input', filtrarDados);
  filtroPeso.addEventListener('input', filtrarDados);
  filtroHabitat.addEventListener('input', filtrarDados);

  document.querySelectorAll('th').forEach((th) => {
    th.addEventListener('click', () =>
      ordenarDados(th.getAttribute('data-coluna'))
    );
  });

  renderizarTabela(dados);
});
