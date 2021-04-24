import axios  from 'axios';

const api = axios.create({
    baseURL: "https://cadastro-clientes-4594c-default-rtdb.firebaseio.com"
})

export default api;