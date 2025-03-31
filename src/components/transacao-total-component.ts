import TipoTransacao from "../enum/TipoTransacao.js";
import { conta } from "../types/Conta.js";
import { formatarMoeda } from "../utils/formater.js";

const transacaoTotal = document.querySelector("#total-transacao") as HTMLElement;

renderizarTransacaoTotal();

function renderizarTransacaoTotal(): void {
  const transacoes = conta.retornaTransacoes();
  const vendaTransacoes = transacoes.filter(trans => trans.tipoTransacao === TipoTransacao.VENDA);
  const compraTransacoes = transacoes.filter(trans => trans.tipoTransacao === TipoTransacao.COMPRA);

  const totalVendas = vendaTransacoes.reduce((acc, transacao) => acc + transacao.valor, 0);
  const totalCompras = compraTransacoes.reduce((acc, transacao) => acc + transacao.valor, 0);

  const total = totalVendas - totalCompras;

  if (total) {
    transacaoTotal.textContent = formatarMoeda(total);
  }

}

const TransacaoTotalComponent = {
  atualizar() {
    renderizarTransacaoTotal();
  }
}

export default TransacaoTotalComponent;