document.addEventListener('DOMContentLoaded', () => iniciarApp())

function iniciarApp(){
    agregar()
}

function agregar(){
    const contenedor = document.querySelector('.contenedor')
    const cuadro = document.querySelector('.cuadro')
    const btn = document.querySelector('.btn')
    

    btn.addEventListener('click', function(){
        const numero = document.querySelector('.cantidad')
        for(let i = 1; i<= numero.valueAsNumber; i++){
            const elemento = document.createElement('DIV')
            elemento.classList.add('cuadro')
            contenedor.appendChild(elemento)

            setTimeout(() => {
                elemento.remove('cuadro')
                numero.valueAsNumber = 0 
            }, 1500);
        }
           
    })

    

}
