import ArmazenadorKey from "../enum/ArmazenadorKey.js";
import TipoTransacao from "../enum/TipoTransacao.js";
import { ValidaCompra, ValidaVenda } from "../utils/validators.js";
import Armazenador from "./Armazenador.js";
import Transacao from "./Transacao.js";

class Conta {
  private titular: string
  private saldo: number = Armazenador.get<number>(ArmazenadorKey.SALDO) || 0;
  private transacoes: Transacao[] = Armazenador.get<Transacao[]>(ArmazenadorKey.TRANSACOES) || [];

  constructor(titular: string) {
    this.titular = titular;
  }

  public getSaldo(): number {
    return this.saldo;
  }

  public getTitular(): string {
    return this.titular;
  }

  @ValidaVenda
  public registraVenda(valor: number): void {
    this.saldo = this.saldo + valor;
    Armazenador.save(ArmazenadorKey.SALDO, this.saldo);
  }

  @ValidaCompra
  public registraCompra(valor: number): void {
    this.saldo = this.saldo - valor;
    Armazenador.save(ArmazenadorKey.SALDO, this.saldo);
  }

  public retornaTransacoes(): Transacao[] {
    return this.transacoes;
  }

  public registraTransacao(novaTransacao: Transacao): void {
    if(novaTransacao.tipoTransacao === TipoTransacao.COMPRA) {
      this.registraCompra(novaTransacao.valor);
    } else if(novaTransacao.tipoTransacao === TipoTransacao.VENDA) {
      this.registraVenda(novaTransacao.valor);
    } else {
      throw new Error("Tipo de transação inválido");
    }

    this.transacoes.push(novaTransacao);
    Armazenador.save(ArmazenadorKey.TRANSACOES, this.transacoes);
  }

}

const conta = new Conta("Eltin Balaka");
export { conta };
