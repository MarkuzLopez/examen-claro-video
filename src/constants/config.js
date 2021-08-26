import axios from 'axios';
import environments from './enviroments';

const http = () => {
    let baseURL = environments.apiUrl

    const client = axios.create({ 
        baseURL,
        headers: { 
            'Content-Type': 'application/json'
        }
    });

    client.interceptors.request.use(config => { 
        return config
    }, error => { 
        console.log(error);
    });

    return client
}

export default http();