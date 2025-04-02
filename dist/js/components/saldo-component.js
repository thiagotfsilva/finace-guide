import { conta } from "../types/Conta.js";
import { formatarMoeda } from "../utils/formater.js";
const saldoValor = document.querySelector("#saldo-valor");
renderizarSaldo();
function renderizarSaldo() {
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
