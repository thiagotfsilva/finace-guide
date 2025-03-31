import TipoTransacao from "../enum/TipoTransacao.js";
import { conta } from "../types/Conta.js";
const corpoTabela = document.getElementById('table-body');
atualizarExtrato();
function atualizarExtrato() {
    corpoTabela.innerHTML = '';
    const transacoes = conta.retornaTransacoes();
    console.log(transacoes);
    transacoes.map((transacao) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
      <th scope="row">${transacao.tipoTransacao === TipoTransacao.COMPRA ? '+' : '-'}</th>
      <td>${transacao.nomeMercadoria}</td>
      <td>${transacao.quantidade}</td>
      <td>R$ ${transacao.valor.toFixed(2)}</td>
      <td><i class="d-none d-lg-block bi bi-trash"></i></td>
    `;
        corpoTabela.appendChild(linha);
    });
}
const ExtratoComponent = {
    atualizar() {
        atualizarExtrato();
    }
};
export default ExtratoComponent;
