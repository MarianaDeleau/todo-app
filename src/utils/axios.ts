import axios from 'axios'

const api = axios.create({
    baseURL: 'https://to-do-app-44165-default-rtdb.firebaseio.com'
});

export { api }