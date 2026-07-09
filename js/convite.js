import { db, collection, addDoc } from './firebase.js';

const btn = document.getElementById('tocar');
const conteudo = document.getElementById('conteudo');
const musica = document.getElementById('musica');

btn.onclick = async () => {
  await musica.play();
  btn.classList.add('hidden');
  conteudo.classList.remove('hidden');

  confetti({ particleCount: 180, spread: 120 });
};

const acompanha = document.getElementById('acompanha');
const nomeAcompanhante = document.getElementById('nomeAcompanhante');

if (acompanha) {
  acompanha.onchange = () => {
    nomeAcompanhante.classList.toggle('hidden', !acompanha.checked);
  };
}

const formFamilia = document.getElementById('formFamilia');
const formAmigo = document.getElementById('formAmigo');

async function salvar(dados){
  await addDoc(collection(db, 'confirmacoes'), dados);
}

if (formFamilia) {
  formFamilia.onsubmit = async (e) => {
    e.preventDefault();

    await salvar({
      tipo: 'Família',
      nome: document.getElementById('nome').value,
      acompanhante: '',
      data: new Date().toLocaleString()
    });

    document.getElementById('msg').innerText = 'Presença confirmada!';
    confetti({ particleCount: 120, spread: 90 });
    formFamilia.reset();
  };
}

if (formAmigo) {
  formAmigo.onsubmit = async (e) => {
    e.preventDefault();

    await salvar({
      tipo: 'Amigo',
      nome: document.getElementById('nome').value,
      acompanhante: acompanha.checked ? nomeAcompanhante.value : '',
      data: new Date().toLocaleString()
    });

    document.getElementById('msg').innerText = 'Te vejo lá gatita(e)!';
    confetti({ particleCount: 120, spread: 90 });
    formAmigo.reset();
    nomeAcompanhante.classList.add('hidden');
  };
}