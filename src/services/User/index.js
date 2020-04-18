import BASE_URL from '../../utils/BaseURL';
import axios from 'axios';

export const auth = (endpoint ,body) => {
    return axios.post(BASE_URL + endpoint, body)
}

export const register = (endpoint ,body) => {
    return axios.post(BASE_URL + endpoint, body)
}

