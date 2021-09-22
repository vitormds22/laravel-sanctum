require('./bootstrap');

//FUNÇÃO ANONIMA PARA UTILIZAR A FUNCIONALIDADE ASSINCRONA

    axios.get('/sanctum/csrf-cookie').then(response => {
        console.log('csrf-cookie', response)
    });
    
    axios.get('/users').then((Response) => {
        console.log('users', Response)
    });
    
    axios.get('/login').then((Response) => {
        console.log('login', Response)
    });

