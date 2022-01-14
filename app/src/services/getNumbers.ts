import axios, { AxiosPromise } from 'axios'

export default function getNumbers() : AxiosPromise<any>{
    return axios({
        method : "GET",
        url : "http://localhost:8080/",
        timeout: 5000
    })
}