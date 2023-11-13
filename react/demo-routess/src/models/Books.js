import axios from "axios";

class Books {
    constructor() {
        this.api_url = 'https://654c3fa877200d6ba858a7b3.mockapi.io/Books';
    }
    async getAll() {
        return await axios.get(this.api_url);
    }
    find(id) {
        return new Promise((resolve, reject) => {
            axios.get(this.api_url + '/' + id).then((res) => {
                resolve(res)
            }).catch((res) => {
                reject(res);
            })
        })
    }
    update(id, data) {
        return new Promise((resolve, reject) => {
            axios.put(this.api_url + '/' + id, data).then((res) => {
                resolve(res)
            }).catch((res) => {
                reject(res);
            });
        })
    }
    destroy(id) {
        return new Promise((resolve, reject) => {
            axios.delete(this.api_url + '/' + id).then((res) => {
                resolve(res)
            }).catch((res) => {
                reject(res);
            });
        })
    }
    store(data) {
        return new Promise((resolve, reject) => {
            axios.post(this.api_url, data).then((res) => {
                resolve(res)
            }).catch((res) => {
                reject(res);
            });
        })
    }




}
export default new Books;