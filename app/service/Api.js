import axios from 'axios';
const instance = axios.create();

export class ApiConfig {

    // Get method
    getJson(URL) {
        return new Promise((resolve, reject) => {
            instance({
                method: 'GET',
                url: URL
            }).then((res) => {
                resolve(res)
            }).catch((ERROR) => {
                console.log("ERROR", URL, ERROR, ERROR.response.data)
                reject(ERROR)
            });
        });
    }

    // Delete method
    deleteJson(URL) {
        return new Promise((resolve, reject) => {
            instance({
                method: 'DELETE',
                url: URL
            }).then((res) => {
                resolve(res)
            }).catch((ERROR) => {
                console.log("ERROR", URL, ERROR, ERROR.response.data)
                reject(ERROR)
            });
        });
    }

}