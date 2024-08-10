const inc = document.querySelector(".increment");
const dec = document.querySelector(".decrement");
const span = document.querySelector(".value");


function pegarNumInt() {
    const valorTexto = span.textContent;
    return parseInt(valorTexto);
}

inc.addEventListener('click', () => {
    let valorInt = pegarNumInt();
    span.textContent = valorInt + 1;
    console.log(valorInt)
})

dec.addEventListener('click', () => {
    let valorInt = pegarNumInt();
    span.textContent = valorInt - 1;
    console.log(valorInt);
})


