document.getElementById('abrir').onclick = () => {

  const tipo = document.getElementById('tipo').value;
      if (tipo === 'familia') location.href = 'convite-familia.html';
      else location.href = 'convite-amigos.html';
};