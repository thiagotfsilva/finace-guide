import TipoTransacao from "../enum/TipoTransacao.js";

class Transacao {
  tipoTransacao: TipoTransacao;
  nomeMercadoria: string;
  quantidade: number;
  valor: number;

  constructor(
    tipoTransacao: TipoTransacao,
    nomeMercadoria: string,
    quantidade: number,
    valor: number
  ) {
    this.tipoTransacao = tipoTransacao;
    this.nomeMercadoria = nomeMercadoria;
    this.quantidade = quantidade;
    this.valor = valor;
  }
}

export default Transacao;
