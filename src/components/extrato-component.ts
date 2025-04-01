import ArmazenadorKey from "../enum/ArmazenadorKey.js";
import TipoTransacao from "../enum/TipoTransacao.js";
import Armazenador from "../types/Armazenador.js";
import { conta } from "../types/Conta.js";
import { formatarMoeda } from "../utils/formater.js";
import SaldoComponent from "./saldo-component.js";
import TransacaoTotalComponent from "./transacao-total-component.js";

const corpoTabela = document.getElementById('table-body') as HTMLTableSectionElement;

atualizarExtrato();

function excluirTransacoes(nomeMercadoria: string): void {
  const transacoes = conta.retornaTransacoes();
  const novalistaTransacoes = transacoes.filter((transacao) => transacao.nomeMercadoria !== nomeMercadoria);
  Armazenador.delete(ArmazenadorKey.TRANSACOES);
  Armazenador.save(ArmazenadorKey.TRANSACOES, novalistaTransacoes);
}

function atualizarExtrato(): void {
  corpoTabela.innerHTML = '';

  const transacoes = conta.retornaTransacoes();

  transacoes.map((transacao) => {
    const linha = document.createElement('tr');
    linha.innerHTML = `
      <th scope="row">${transacao.tipoTransacao === TipoTransacao.COMPRA ? '+' : '-'}</th>
      <td>${transacao.nomeMercadoria}</td>
      <td>${transacao.quantidade}</td>
      <td>${formatarMoeda(transacao.valor)}</td>
      <td><i class="d-none d-lg-block bi bi-trash lixeira"></i></td>
    `;

    const iconeLixeira = linha.querySelector('.lixeira');

    if (iconeLixeira) {
      iconeLixeira.addEventListener('click', (event) => {
        const icone = event.target as HTMLElement;
        const linha = icone.closest('tr'); // encontra o elemento pai mais próximo
        if (linha) {
          linha.remove();
        }
        excluirTransacoes(transacao.nomeMercadoria);
        SaldoComponent.atualizar();
        TransacaoTotalComponent.atualizar();
      });
    }

    corpoTabela.appendChild(linha);
  });

}

const ExtratoComponent = {
  atualizar() {
    atualizarExtrato();
  }
}

export default ExtratoComponent;

