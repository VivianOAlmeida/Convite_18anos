document.getElementById('abrir').onclick = () => {

  const tipo = document.getElementById('tipo').value;
      if (tipo === 'familia') location.href = 'convite_familia.html';
      else location.href = 'convite_amigos.html';
};