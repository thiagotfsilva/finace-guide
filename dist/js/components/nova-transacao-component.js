import { conta } from "../types/Conta.js";
import Transacao from "../types/Transacao.js";
import SaldoComponent from "./saldo-component.js";
const formulario = document.querySelector('#form');
formulario.addEventListener('submit', (event) => {
    try {
        event.preventDefault();
        if (!formulario.checkValidity()) {
            alert('Por favor, preencha todos os campos da transação!');
            return;
        }
        const selectTransacao = formulario.querySelector('#tipo_transacao');
        const inputNomeMercadoria = formulario.querySelector('#nome_mercadoria');
        const inputQuantidade = formulario.querySelector('#quantidade');
        const inputValor = formulario.querySelector('#valor');
        const tipoTransacao = selectTransacao.value;
        const nomeMercadoria = inputNomeMercadoria.value;
        const quantidade = inputQuantidade.valueAsNumber;
        const valor = inputValor.valueAsNumber;
        const transacao = new Transacao(tipoTransacao, nomeMercadoria, quantidade, valor);
        conta.registraTransacao(transacao);
        SaldoComponent.atualizar();
        formulario.reset();
    }
    catch (error) {
        alert(error.message);
    }
});
