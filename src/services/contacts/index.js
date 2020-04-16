import BASE_URL from '../../utils/BaseURL';
import axios from 'axios';

export const auth = (endpoint ,body) => {
    return axios.post(BASE_URL + endpoint, body)
}

export const getContacts = (endpoint ,query) => {
    return axios.get(BASE_URL + endpoint + "?" + query)
}