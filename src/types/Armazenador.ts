class Armazenador {
  private constructor() {}

  static save(key: string, value: any): void {
    const valueAsString = JSON.stringify(value);
    localStorage.setItem(key, valueAsString);
  }

  static get<T>(key: string, handler?: (this: any, key: string, value: any) => any): T | null {
    const item = localStorage.getItem(key);

    if (item === null) {
      return null;
    }

    if (handler) {
      return JSON.parse(item, handler) as T;
    }

    return JSON.parse(item) as T;
  }
}

export default Armazenador;