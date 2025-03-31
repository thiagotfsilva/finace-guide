class Armazenador {
    constructor() { }
    static save(key, value) {
        const valueAsString = JSON.stringify(value);
        localStorage.setItem(key, valueAsString);
    }
    static get(key, handler) {
        const item = localStorage.getItem(key);
        if (item === null) {
            return null;
        }
        if (handler) {
            return JSON.parse(item, handler);
        }
        return JSON.parse(item);
    }
}
export default Armazenador;
