// Exercício 1.1 — Serialização
const historicoMensagens = [
  { id: 1, usuario: "Ana", texto: "Bom dia, turma!" },
  { id: 2, usuario: "Pedro", texto: "Servidor online!" }
];

const conteudoSalvar = JSON.stringify(historicoMensagens, null, 2);
console.log(conteudoSalvar);
console.log("Tipo da variável:", typeof conteudoSalvar);

// Exercício 1.2 — Desserialização
const jsonValido = '[{"id": 10, "usuario": "Lucas", "texto": "Teste"}]';
const mensagemRecuperada = JSON.parse(jsonValido);
console.log("Texto recuperado:", mensagemRecuperada[0].texto);

const jsonQuebrado = '[{ id: 10, quebrado: sim ';
try {
  JSON.parse(jsonQuebrado);
} catch (erro) {
  console.error("Alerta: JSON corrompido! Detalhes:", erro.message);
}
