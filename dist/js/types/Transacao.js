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
    getTipoTransacao() {
        return this.tipoTransacao;
    }
    getNomeMercadoria() {
        return this.nomeMercadoria;
    }
    getQuantidade() {
        return this.quantidade;
    }
    getValor() {
        return this.valor;
    }
}
export default Transacao;
