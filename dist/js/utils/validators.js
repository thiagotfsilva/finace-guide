function ValidaCompra(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorCompra) {
        if (valorCompra <= 0) {
            throw new Error("O valor a ser debitado precisa ser maior que zero.");
        }
        if (valorCompra > this.saldo) {
            throw new Error("Seu saldo é insuficiente para realizar a operação.");
        }
        return originalMethod.apply(this, [valorCompra]);
    };
    return descriptor;
}
function ValidaVenda(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorVenda) {
        if (valorVenda <= 0) {
            throw new Error("O valor a ser creditado precisa ser maior que zero.");
        }
        return originalMethod.apply(this, [valorVenda]);
    };
    return descriptor;
}
function validaNomeMercadoria(nomeMercadoria) {
    if (nomeMercadoria.length < 3) {
        throw new Error("O nome da mercadoria precisa ter pelo menos 3 caracteres.");
    }
    if (nomeMercadoria.length > 35) {
        throw new Error("O nome da mercadoria não pode ter mais de 35 caracteres.");
    }
    return nomeMercadoria.trim();
}
function validaQuantidade(quantidade) {
    if (quantidade <= 0) {
        throw new Error("A quantidade deve ser maior que zero.");
    }
    return quantidade;
}
export { ValidaCompra, ValidaVenda, validaNomeMercadoria, validaQuantidade };
