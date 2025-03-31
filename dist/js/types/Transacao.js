class Transacao {
    tipoTransacao;
    nomeMercadoria;
    quantidade;
    valor;
    constructor(tipoTransacao, nomeMercadoria, quantidade, valor) {
        this.tipoTransacao = tipoTransacao;
        this.nomeMercadoria = nomeMercadoria;
        this.quantidade = quantidade;
        this.valor = valor;
    }
}
export default Transacao;
