// Calculadora
function calcularImpacto() {
  const area = parseFloat(document.getElementById('area').value) || 0;
  const cultura = parseFloat(document.getElementById('cultura').value);
  const pratica = parseFloat(document.getElementById('pratica').value);

  const emissao = (area * cultura * pratica).toFixed(1);
  const agua = Math.round(area * 4500 * pratica);

  document.getElementById('resultado').innerHTML = `
    <p><strong>Resultado Estimado:</strong></p>
    <p>Emissões de CO₂e: ${emissao} toneladas/ano</p>
    <p>Consumo de Água: ${agua.toLocaleString('pt-BR')} mil litros/ano</p>
    <p>✅ Com práticas sustentáveis você pode reduzir até 55% do impacto!</p>
  `;
}

// Quiz
const quiz = [
  {
    pergunta: "Qual prática mais contribui para a saúde do solo?",
    opcoes: ["Monocultura", "Rotação de culturas", "Uso intenso de agrotóxicos"],
    correta: 1
  },
  {
    pergunta: "O que significa ILPF?",
    opcoes: ["Integração Lavoura Pecuária Floresta", "Irrigação Localizada", "Insumos de Alta Produtividade"],
    correta: 0
  },
  {
    pergunta: "Qual é uma vantagem do Plantio Direto?",
    opcoes: ["Aumenta erosão", "Sequestra carbono", "Exige mais combustível"],
    correta: 1
  }
];

let perguntaAtual = 0;
let acertos = 0;

function carregarPergunta() {
  const p = quiz[perguntaAtual];
  document.getElementById('pergunta').textContent = p.pergunta;
  const opcoesDiv = document.getElementById('opcoes');
  opcoesDiv.innerHTML = '';

  p.opcoes.forEach((opcao, index) => {
    const btn = document.createElement('button');
    btn.textContent = opcao;
    btn.onclick = () => verificarResposta(index);
    opcoesDiv.appendChild(btn);
    opcoesDiv.appendChild(document.createElement('br'));
  });
}

function verificarResposta(resposta) {
  if (resposta === quiz[perguntaAtual].correta) acertos++;
  
  perguntaAtual++;
  if (perguntaAtual < quiz.length) {
    carregarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  const percent = Math.round((acertos / quiz.length) * 100);
  document.getElementById('pergunta-container').style.display = 'none';
  const res = document.getElementById('resultado-quiz');
  res.style.display = 'block';
  res.innerHTML = `
    <h3>Você acertou ${acertos} de \( {quiz.length} ( \){percent}%)</h3>
    <p>${percent >= 70 ? '🌱 Parabéns! Você entende bem de sustentabilidade.' : '💡 Continue aprendendo sobre o agro sustentável!'}</p>
    <button onclick="location.reload()">Refazer Quiz</button>
  `;
}

// Iniciar quiz
window.onload = function() {
  carregarPergunta();
};
