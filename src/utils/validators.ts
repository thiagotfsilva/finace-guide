function ValidaCompra(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (valorCompra: number) {
    if (valorCompra <= 0) {
      throw new Error("O valor a ser debitado precisa ser maior que zero.");
    }

    if (valorCompra > this.saldo) {
      throw new Error("Seu saldo é insuficiente para realizar a operação.");
    }

    return originalMethod.apply(this, [valorCompra]);
  }

  return descriptor;
}

function ValidaVenda(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function(valorVenda: number) {
    if(valorVenda <= 0) {
      throw new Error("O valor a ser creditado precisa ser maior que zero.");
    }
    return originalMethod.apply(this, [valorVenda]);
  }

  return descriptor;
}

function validaNomeMercadoria(nomeMercadoria: string) {
  if(nomeMercadoria.length < 3) {
    throw new Error("O nome da mercadoria precisa ter pelo menos 3 caracteres.");
  }

  if (nomeMercadoria.length > 35) {
    throw new Error("O nome da mercadoria não pode ter mais de 35 caracteres.");
  }

  return nomeMercadoria.trim();
}

function validaQuantidade(quantidade: number) {
  if(quantidade <= 0) {
    throw new Error("A quantidade deve ser maior que zero.");
  }

  return quantidade;
}

export { ValidaCompra, ValidaVenda, validaNomeMercadoria, validaQuantidade };
