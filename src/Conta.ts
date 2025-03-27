class Conta {
  private titular: string
  private saldo: number;

  getSaldo(): number {
    return this.saldo;
  }

  getTitular(): string {
    return this.titular;
  }
}
