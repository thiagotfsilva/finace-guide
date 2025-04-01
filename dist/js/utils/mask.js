const inputValor = document.querySelector('#valor');
inputValor.addEventListener('input', function (e) {
    // Remove todos os caracteres não numéricos
    let value = this.value.replace(/\D/g, '');
    // Converte para número e divide por 100 para obter os centavos
    let number = parseInt(value) / 100;
    // Formata como moeda brasileira
    if (!isNaN(number)) {
        this.value = number.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }
    else {
        this.value = '';
    }
    // Mantém o cursor na posição correta
    // Isso é necessário porque a formatação pode mover o cursor
    let len = this.value.length;
    this.setSelectionRange(len, len);
});
// Adiciona tratamento para quando o campo perde o foco (caso esteja vazio)
inputValor.addEventListener('blur', function (e) {
    if (this.value === '') {
        this.value = 'R$ 0,00';
    }
});
// Adiciona tratamento para quando o campo recebe foco (se for R$ 0,00, limpa para digitação)
inputValor.addEventListener('focus', function (e) {
    if (this.value === 'R$ 0,00') {
        this.value = '';
    }
});
