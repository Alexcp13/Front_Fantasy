import axios from "axios";

class SalesService {
    constructor() {
        this.api = axios.create({
            baseURL: `http://localhost:3000/api/sales`
        });

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem("authToken");
            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }
            return config;
        });
    }

    sellWatch(id, watchId, points) {
        return this.api.put(`/${id}/sell`, { watchId, points });
    }


    buyWatch(id, saleId) {
        return this.api.put(`/${id}/buy`, { saleId });
    }


    getWatchesForSale() {
        return this.api.get('/marketplace');
    }
}

const salesService = new SalesService();
export default salesService;
