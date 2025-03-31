import TipoTransacao from "../enum/TipoTransacao.js";
import Armazenador from "./Armazenador.js";
class Conta {
    titular;
    saldo = Armazenador.get("saldo") || 0;
    transacoes = Armazenador.get("transacoes") || [];
    constructor(titular) {
        this.titular = titular;
    }
    getSaldo() {
        return this.saldo;
    }
    getTitular() {
        return this.titular;
    }
    registraVenda(valor) {
        this.saldo += valor;
        Armazenador.save("saldo", this.saldo);
    }
    registraCompra(valor) {
        this.saldo -= valor;
        Armazenador.save("saldo", this.saldo);
    }
    retornaTransacoes() {
        return this.transacoes;
    }
    registraTransacao(novaTransacao) {
        if (novaTransacao.getTipoTransacao() === TipoTransacao.COMPRA) {
            this.registraCompra(novaTransacao.getValor());
        }
        else if (novaTransacao.getTipoTransacao() === TipoTransacao.VENDA) {
            this.registraVenda(novaTransacao.getValor());
        }
        else {
            throw new Error("Tipo de transação inválido");
        }
        this.transacoes.push(novaTransacao);
        Armazenador.save("transacoes", this.transacoes);
    }
}
const conta = new Conta("Eltin Balaka");
export { conta };
