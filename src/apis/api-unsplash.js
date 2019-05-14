import axios from 'axios';
import {PUBLIC_KEY, URL, COLLECTION} from '../constants';

export default function executeGetRequest(term, page, per_page) {
    return axios.get(`${URL}/${COLLECTION}`, {
        headers: {
            Authorization: `Client-ID ${PUBLIC_KEY}`
        },
        params: {
            query: term,
            page,
            per_page
        }
    })
};
