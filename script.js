const button = document.getElementById('button-login')
const email = 'm@mail.com'
const password = '1234'
let session

let email_user = document.getElementById('email')
let password_user = document.getElementById('password')

function login() {
    if(email_user.value == email && password_user.value == password) {
        alert('¡Ingreso exitoso!')
        session = 'yes'
        window.location='./index.html'
    }
}

button.addEventListener('click', login);

let mySession = sessionStorage.getItem('session')
if(mySession != 'yes'){
    //window.location='./index.html'
}


/*let theme = document.getElementById('theme')

document.addEventListener('DOMContentLoaded', () => {
    let defaultTheme = localStorage.getItem('theme')

    
    if(defaultTheme == 'light'){
        document.body.style.backgroundColor = 'white';
    }
    else if(defaultTheme == 'dark'){
        document.body.style.backgroundColor = 'black';
    }

})

theme.addEventListener('click', ()=>{
    localStorage.setItem('theme', theme.value)
    
    if(localStorage.theme == 'light'){
        document.body.style.backgroundColor = 'white';
    }
    else if(localStorage.theme == 'dark'){
        document.body.style.backgroundColor = 'black';
    }

}) */
