const spanLimparFormulario = document.querySelector("#limpar-formulario");
const formulario = document.querySelector("#form");
spanLimparFormulario.addEventListener("click", () => {
    formulario.reset();
});
