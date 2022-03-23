import axios from "axios";

const API_URL = "https://api.jsonbin.io/b/6231abada703bb67492d2b8f";

class Service {
    getBusiness() {
        return axios.get(API_URL);
    }
}

export default new Service();