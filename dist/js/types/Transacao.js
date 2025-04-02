class Transacao {
    id;
    tipoTransacao;
    nomeMercadoria;
    quantidade;
    valor;
    constructor(tipoTransacao, nomeMercadoria, quantidade, valor) {
        this.id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        this.tipoTransacao = tipoTransacao;
        this.nomeMercadoria = nomeMercadoria;
        this.quantidade = quantidade;
        this.valor = valor;
    }
}
export default Transacao;
