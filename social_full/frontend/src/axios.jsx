import axios from 'axios'

export const makeRequest = axios.create({
    baseURL: "http://157.245.200.177:8800/api/",
    withCredentials: true,
})