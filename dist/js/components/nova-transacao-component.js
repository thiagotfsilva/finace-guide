import { conta } from "../types/Conta.js";
import Transacao from "../types/Transacao.js";
import { transformaValorInput, validaNomeMercadoria, validaQuantidade } from "../utils/validators.js";
import ExtratoComponent from "./extrato-component.js";
import SaldoComponent from "./saldo-component.js";
import TransacaoTotalComponent from "./transacao-total-component.js";
const formulario = document.querySelector("#form");
const spanLimparFormulario = document.querySelector("#limpar-formulario");
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
        const selectTransacao = formulario.querySelector("#tipo_transacao");
        const inputNomeMercadoria = formulario.querySelector("#nome_mercadoria");
        const inputQuantidade = formulario.querySelector("#quantidade");
        const inputValor = formulario.querySelector("#valor");
        const tipoTransacao = selectTransacao.value;
        const nomeMercadoria = validaNomeMercadoria(inputNomeMercadoria.value);
        const quantidade = validaQuantidade(inputQuantidade.valueAsNumber);
        const valor = transformaValorInput(inputValor.value); // remove todos os caracteres não numéricos e transforma em número
        console.log(valor);
        const transacao = new Transacao(tipoTransacao, nomeMercadoria, quantidade, valor);
        conta.registraTransacao(transacao);
        SaldoComponent.atualizar();
        TransacaoTotalComponent.atualizar();
        ExtratoComponent.atualizar();
        formulario.reset();
    }
    catch (error) {
        alert(error.message);
    }
});
