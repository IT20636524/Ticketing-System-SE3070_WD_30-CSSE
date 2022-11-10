import axios from "axios";


class CardService {
    BASE_URL = "http://192.168.1.3:3001/"

    getAllCardByUserId(id) {
        return axios.get(this.BASE_URL + id)
    }

}

export default new CardService();