import axios from "axios";
class DetailModel {
    constructor() {
        this.api_url = 'http://127.0.0.1:8000/api/home/detail';
    }
    find() {
        return new Promise((resolve, reject) => {
            axios.get(this.api_url + '/' + id).then((res) => {
                resolve(res)
            }).catch((res) => {
                reject(res);
            })
        })
    }
}
export default new DetailModel;