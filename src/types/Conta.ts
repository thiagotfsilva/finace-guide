import TipoTransacao from "../enum/TipoTransacao.js";
import Armazenador from "./Armazenador.js";
import Transacao from "./Transacao.js";

class Conta {
  private titular: string
  private saldo: number = Armazenador.get<number>("saldo") || 0;
  private transacoes: Transacao[] = Armazenador.get<Transacao[]>("transacoes") || [];

  constructor(titular: string) {
    this.titular = titular;
  }

  public getSaldo(): number {
    return this.saldo;
  }

  public getTitular(): string {
    return this.titular;
  }

  public registraVenda(valor: number): void {
    this.saldo += valor;
    Armazenador.save("saldo", this.saldo);
  }

  public registraCompra(valor: number): void {
    this.saldo -= valor;
    Armazenador.save("saldo", this.saldo);
  }

  public retornaTransacoes(): Transacao[] {
    return this.transacoes;
  }

  public registraTransacao(novaTransacao: Transacao): void {
    if(novaTransacao.getTipoTransacao() === TipoTransacao.COMPRA) {
      this.registraCompra(novaTransacao.getValor());
    } else if(novaTransacao.getTipoTransacao() === TipoTransacao.VENDA) {
      this.registraVenda(novaTransacao.getValor());
    } else {
      throw new Error("Tipo de transação inválido");
    }

    this.transacoes.push(novaTransacao);
    Armazenador.save("transacoes", this.transacoes);
  }

}

const conta = new Conta("Eltin Balaka");
export { conta };
