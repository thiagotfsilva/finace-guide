import TipoTransacao from "../enum/TipoTransacao.js";

class Transacao {
  tipoTransacao: TipoTransacao;
  nomeMercadoria: string;
  quantidade: number;
  valor: number;

  constructor(tipoTransacao: TipoTransacao, nomeMercadoria: string, quantidade: number, valor: number) {
    this.tipoTransacao = tipoTransacao;
    this.nomeMercadoria = nomeMercadoria;
    this.quantidade = quantidade;
    this.valor = valor;
  }

  getTipoTransacao(): TipoTransacao {
    return this.tipoTransacao;
  }

  getNomeMercadoria(): string {
    return this.nomeMercadoria;
  }

  getQuantidade(): number {
    return this.quantidade;
  }

  getValor(): number {
    return this.valor;
  }
}

export default Transacao;
