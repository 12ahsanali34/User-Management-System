import BASE_URL from '../../utils/BaseURL';
import axios from 'axios';

export const getContacts = (endpoint ,query) => {
    return axios.get(BASE_URL + endpoint + "?" + query)
}

export const addContacts = (endpoint ,body) => {
    return axios.post(BASE_URL + endpoint, body)
}