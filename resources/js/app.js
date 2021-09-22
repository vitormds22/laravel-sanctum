require('./bootstrap');

//FUNÇÃO ANONIMA PARA UTILIZAR A FUNCIONALIDADE ASSINCRONA
(async() => {
    await axios.get('/sanctum/csrf-cookie').then(response => {
        console.log('csrf-cookie', response)
    });
    
    await axios.get('/users').then((Response) => {
        console.log('users', Response)
    });
    
    await axios.get('/login').then((Response) => {
        console.log('login', Response)
    });
})() //CUIDADO, ESSES DOIS PARENTESES SÃO IMPORTANTES

