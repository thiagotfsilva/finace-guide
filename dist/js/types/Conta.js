var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import ArmazenadorKey from "../enum/ArmazenadorKey.js";
import TipoTransacao from "../enum/TipoTransacao.js";
import { ValidaCompra, ValidaVenda } from "../utils/validators.js";
import Armazenador from "./Armazenador.js";
class Conta {
    titular;
    saldo = Armazenador.get(ArmazenadorKey.SALDO) || 0;
    transacoes = Armazenador.get(ArmazenadorKey.TRANSACOES) || [];
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
        this.saldo = this.saldo + valor;
        Armazenador.save(ArmazenadorKey.SALDO, this.saldo);
    }
    registraCompra(valor) {
        this.saldo = this.saldo - valor;
        Armazenador.save(ArmazenadorKey.SALDO, this.saldo);
    }
    retornaTransacoes() {
        return this.transacoes;
    }
    registraTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao === TipoTransacao.COMPRA) {
            this.registraCompra(novaTransacao.valor);
        }
        else if (novaTransacao.tipoTransacao === TipoTransacao.VENDA) {
            this.registraVenda(novaTransacao.valor);
        }
        else {
            throw new Error("Tipo de transação inválido");
        }
        this.transacoes.push(novaTransacao);
        Armazenador.save(ArmazenadorKey.TRANSACOES, this.transacoes);
    }
}
__decorate([
    ValidaVenda
], Conta.prototype, "registraVenda", null);
__decorate([
    ValidaCompra
], Conta.prototype, "registraCompra", null);
const conta = new Conta("Eltin Balaka");
export { conta };
