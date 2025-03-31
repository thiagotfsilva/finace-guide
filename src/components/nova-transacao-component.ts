import TipoTransacao from "../enum/TipoTransacao.js";
import { conta } from "../types/Conta.js";
import Transacao from "../types/Transacao.js";
import { validaNomeMercadoria, validaQuantidade } from "../utils/validators.js";
import ExtratoComponent from "./extrato-component.js";
import SaldoComponent from "./saldo-component.js";
import TransacaoTotalComponent from "./transacao-total-component.js";

const formulario = document.querySelector("#form") as HTMLFormElement;
const spanLimparFormulario = document.querySelector("#limpar-formulario") as HTMLSpanElement;

spanLimparFormulario.addEventListener("click", () => {
  formulario.reset();
});

formulario.addEventListener("submit", (event) => {
  try {
    event.preventDefault();

    if (!formulario.checkValidity()) {
      alert("Por favor, preencha todos os campos da transação!");
      return;
    }

    const selectTransacao = formulario.querySelector(
      "#tipo_transacao"
    ) as HTMLSelectElement;
    const inputNomeMercadoria = formulario.querySelector(
      "#nome_mercadoria"
    ) as HTMLInputElement;
    const inputQuantidade = formulario.querySelector(
      "#quantidade"
    ) as HTMLInputElement;
    const inputValor = formulario.querySelector("#valor") as HTMLInputElement;

    const tipoTransacao = selectTransacao.value as TipoTransacao;
    const nomeMercadoria = validaNomeMercadoria(inputNomeMercadoria.value);

    const quantidade = validaQuantidade(inputQuantidade.valueAsNumber);
    const valor = inputValor.valueAsNumber;

    const transacao = new Transacao(
      tipoTransacao,
      nomeMercadoria,
      quantidade,
      valor
    );

    conta.registraTransacao(transacao);
    SaldoComponent.atualizar();
    TransacaoTotalComponent.atualizar();
    ExtratoComponent.atualizar();
    formulario.reset();

  } catch (error) {
    alert(error.message);
  }
});
