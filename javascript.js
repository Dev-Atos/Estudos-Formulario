var iconMenu = document.querySelector('.icon-menu')

function show(){
    let menu = document.querySelector('#menu')
    if(menu.classList.contains('hide')){
        menu.classList.add('show')
        menu.classList.remove('hide')
    }
   else{
    menu.classList.add('hide')
    menu.classList.remove('show')
   }
}
iconMenu.addEventListener('click', show)


var enviar = document.querySelector('.formulario .botao')
function action(event){
    event.preventDefault()
    alert('Dados enviados')
}

enviar.addEventListener('click', action)


