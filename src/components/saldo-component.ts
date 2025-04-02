import { conta } from "../types/Conta.js";
import { formatarMoeda } from "../utils/formater.js";

const saldoValor = document.querySelector("#saldo-valor") as HTMLElement;

renderizarSaldo();

function renderizarSaldo(): void {
  if (saldoValor != null) {
    saldoValor.textContent = formatarMoeda(conta.getSaldo());
  }
}

const SaldoComponent = {
  atualizar() {
    renderizarSaldo();
  },
};

export default SaldoComponent;
