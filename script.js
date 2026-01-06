let theme = document.getElementById('theme')

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

});