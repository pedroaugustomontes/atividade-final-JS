document.addEventListener('DOMContentLoaded', function () {
  const produtos = [
    { id: 1, nome: 'Produto 1', preco: 10.0 },
    { id: 2, nome: 'Produto 2', preco: 20.0 },
    { id: 3, nome: 'Produto 3', preco: 15.0 },
    // Adicione mais produtos conforme necessário
  ];

  const carrinho = [];
  const tabelaCarrinho = document
    .getElementById('tabelaCarrinho')
    .getElementsByTagName('tbody')[0];
  const totalCompra = document.getElementById('totalCompra');

  document.querySelectorAll('.adicionar-carrinho').forEach((botao) => {
    botao.addEventListener('click', function () {
      const idProduto = this.parentElement.getAttribute('data-id');
      adicionarAoCarrinho(idProduto);
    });
  });

  function adicionarAoCarrinho(idProduto) {
    const produto = produtos.find((p) => p.id == idProduto);
    const itemCarrinho = carrinho.find((item) => item.produto.id == idProduto);

    if (itemCarrinho) {
      itemCarrinho.quantidade++;
    } else {
      carrinho.push({ produto, quantidade: 1 });
    }

    atualizarCarrinho();
  }

  function removerDoCarrinho(idProduto) {
    const index = carrinho.findIndex((item) => item.produto.id == idProduto);
    if (index !== -1) {
      carrinho.splice(index, 1);
    }

    atualizarCarrinho();
  }

  function atualizarQuantidade(idProduto, novaQuantidade) {
    const itemCarrinho = carrinho.find((item) => item.produto.id == idProduto);
    if (itemCarrinho) {
      itemCarrinho.quantidade = novaQuantidade;
    }

    atualizarCarrinho();
  }

  function atualizarCarrinho() {
    tabelaCarrinho.innerHTML = '';
    let total = 0;

    carrinho.forEach((item) => {
      const row = tabelaCarrinho.insertRow();
      const cellNome = row.insertCell(0);
      const cellQuantidade = row.insertCell(1);
      const cellPreco = row.insertCell(2);
      const cellTotal = row.insertCell(3);
      const cellAcao = row.insertCell(4);

      cellNome.textContent = item.produto.nome;

      const inputQuantidade = document.createElement('input');
      inputQuantidade.type = 'number';
      inputQuantidade.min = 1;
      inputQuantidade.value = item.quantidade;
      inputQuantidade.className = 'input-quantidade';
      inputQuantidade.addEventListener('change', function () {
        atualizarQuantidade(item.produto.id, parseInt(this.value));
      });
      cellQuantidade.appendChild(inputQuantidade);

      cellPreco.textContent = `R$ ${item.produto.preco.toFixed(2)}`;
      cellTotal.textContent = `R$ ${(item.produto.preco * item.quantidade).toFixed(2)}`;
      total += item.produto.preco * item.quantidade;

      const botaoRemover = document.createElement('button');
      botaoRemover.textContent = 'Remover';
      botaoRemover.className = 'botao-remover';
      botaoRemover.addEventListener('click', function () {
        removerDoCarrinho(item.produto.id);
      });
      cellAcao.appendChild(botaoRemover);
    });

    totalCompra.textContent = total.toFixed(2);
  }
});
