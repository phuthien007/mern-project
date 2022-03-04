import qs from 'qs'
import axios from 'axios'

let HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-client-app-version': '1.0.0',
    'x-client-app-code': 'Dr.Miner',
    'x-client-locale': 'vi',
};

const BASE_HOST = "http://localhost:5000"

const parseJsonOrGetText = (data) => {
    let result = ''
    try {
        result = JSON.parse(data)
    } catch (e) {
        result = data
    }

    return result
}

const config = {
    get: async (endpoint, params) => {
        const url = `${BASE_HOST}/api/${endpoint}${qs.stringify(params, true)}`
        return axios.get(url)
    },
    post: async (endpoint, params) => {
        const url = `${BASE_HOST}/api/${endpoint}`
        const options = {
            method: 'POST',
            body: JSON.stringify(params),
            headers: HEADERS,
        }
        return axios.post(url, options)
    },
    put: async (endpoint, params) => {
        const url = `${BASE_HOST}/api/${endpoint}`
        const options = {
            method: 'PUT',
            headers: HEADERS,
            body: JSON.stringify(params),
        }
        return axios.put(url, options)
    }
}

export default config