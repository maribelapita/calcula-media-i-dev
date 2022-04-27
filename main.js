// quando carregar no botão pegar o valor digitado ou quando clicar ENTER
// 1.pegar o formulario ou o botão (OK)
// 2.saber quando o user clicou:addEventListener (OK)
// 3.pegar o input (OK)
// 4.pegar o valor digitado

const $button = window.document.querySelector("button");
const $input = window.document.querySelector("input");
const $media = window.document.querySelector("#media");
const $aprovado = window.document.querySelector("#aprovado");
const $registros = window.document.querySelector("#registros");

let total = 0;
let qtdNotas = 0;
let media = 0;
let aprovado = "Não";

function handleClick(event) {
    event.preventDefault();

    const nota = Number($input.value);
    
    if(qtdNotas < 12){
        if (nota >= 0 && nota <= 20 && nota !== '') {
            total = total + nota;
            qtdNotas++;
    
            media = total / qtdNotas;
    
            if (media >= 9.5) {
                aprovado = "Sim";
            }
            else {
                aprovado = "Não";
            }
    
            $media.textContent = media.toFixed(1);
            $aprovado.textContent = aprovado;
    
            $registros.insertAdjacentHTML("beforeend", `<li>${nota}</li>`);
        }
    }

    
}

$button.addEventListener("click", handleClick);