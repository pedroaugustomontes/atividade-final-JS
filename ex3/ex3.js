document.addEventListener('DOMContentLoaded', function () {
  const imagens = document.querySelectorAll('.miniatura');
  const modal = document.getElementById('modal');
  const imagemGrande = document.getElementById('imagemGrande');
  const fechar = document.getElementById('fechar');
  const setaEsquerda = document.getElementById('setaEsquerda');
  const setaDireita = document.getElementById('setaDireita');

  let indiceAtual;

  imagens.forEach((img, index) => {
    img.addEventListener('click', function () {
      abrirModal(index);
    });
  });

  fechar.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  setaEsquerda.addEventListener('click', function () {
    mostrarImagem(indiceAtual - 1);
  });

  setaDireita.addEventListener('click', function () {
    mostrarImagem(indiceAtual + 1);
  });

  function abrirModal(index) {
    modal.style.display = 'flex';
    mostrarImagem(index);
  }

  function mostrarImagem(index) {
    if (index < 0) {
      index = imagens.length - 1;
    } else if (index >= imagens.length) {
      index = 0;
    }
    indiceAtual = index;
    imagemGrande.src = imagens[index].src;
  }
});
