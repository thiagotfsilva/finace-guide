import TipoTransacao from "../enum/TipoTransacao.js";
import { conta } from "../types/Conta.js";
import Transacao from "../types/Transacao.js";
import SaldoComponent from "./saldo-component.js";

const formulario = document.querySelector('#form') as HTMLFormElement;

formulario.addEventListener('submit', (event) => {
  try {
    event.preventDefault();

    if (!formulario.checkValidity()) {
      alert('Por favor, preencha todos os campos da transação!');
      return;
    }

    const selectTransacao = formulario.querySelector('#tipo_transacao') as HTMLSelectElement;
    const inputNomeMercadoria = formulario.querySelector('#nome_mercadoria') as HTMLInputElement;
    const inputQuantidade = formulario.querySelector('#quantidade') as HTMLInputElement;
    const inputValor = formulario.querySelector('#valor') as HTMLInputElement;

    const tipoTransacao = selectTransacao.value as TipoTransacao;
    const nomeMercadoria = inputNomeMercadoria.value;
    const quantidade = inputQuantidade.valueAsNumber;
    const valor = inputValor.valueAsNumber;

    const transacao = new Transacao(tipoTransacao, nomeMercadoria, quantidade, valor);

    conta.registraTransacao(transacao);
    SaldoComponent.atualizar();
    formulario.reset();

  } catch (error) {
    alert(error.message);
  }
});
