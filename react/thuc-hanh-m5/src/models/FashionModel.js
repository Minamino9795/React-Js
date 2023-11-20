import axios from "axios";

class Product {
    constructor() {
        this.api_url = 'https://654c3fa877200d6ba858a7b3.mockapi.io/product';
    }

    //lấy tất cả 
    async getAll() {
        return await axios.get(this.api_url);
    }
    //lấy chi tiết 
    find(id) {
        return new Promise((resolve, reject) => {
            axios.get(this.api_url + '/' + id).then((res) => {
                resolve(res)
            }).catch((res) => {
                reject(res);
            });
        })
    }
    //xử lý cập nhật
    update(id, data) {
        return new Promise((resolve, reject) => {
            axios.put(this.api_url + '/' + id, data).then((res) => {
                resolve(res)
            }).catch((res) => {
                reject(res);
            });
        })
    }
    //xử lý xóa
    destroy(id) {
        return new Promise((resolve, reject) => {
            axios.delete(this.api_url + '/' + id).then((res) => {
                resolve(res)
            }).catch((res) => {
                reject(res);
            });
        })
    }
    //xử lý thêm
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
export default new Product;