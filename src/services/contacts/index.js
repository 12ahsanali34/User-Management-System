import BASE_URL from '../../utils/BaseURL';
import axios from 'axios';

export const getContacts = (endpoint ,query, token) => {
    return axios.get(BASE_URL + endpoint, {
        params:query,
        headers:{
            authorization: "bearer " + token,
            'Content-Type': 'application/json',
        }
    })
}

export const addContacts = (endpoint ,body, token) => {
    return axios.post(BASE_URL + endpoint, body, {
        headers:{
            authorization: "bearer " + token,
            'Content-Type': 'application/json',
        }
    })
}

export const deleteContact = (endpoint ,query, token) => {
    return axios.get(BASE_URL + endpoint, {
        params:query,
        headers:{
            authorization: "bearer " + token,
            'Content-Type': 'application/json',
        }
    })
}