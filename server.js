// Integração do Express com a camada store.js
import express from "express";
import { lerMensagens, salvarMensagens } from "./store.js";

const app = express();
const PORTA = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor da Sprint 04 está funcionando!");
});

// Lista as mensagens salvas no arquivo JSON
app.get("/mensagens", async (req, res) => {
  try {
    res.json(await lerMensagens());
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro na leitura" });
  }
});

// Rota didática para testar a gravação
app.get("/exemplo-salvar", async (req, res) => {
  try {
    const lista = await lerMensagens();
    lista.push({
      id: Date.now(),
      usuario: "Aluno",
      texto: "Mensagem gravada no disco!"
    });

    await salvarMensagens(lista);
    res.json({ gravado: true, total: lista.length });
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Falha ao gravar" });
  }
});

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
