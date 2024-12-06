

import axios from "axios";

class PackService {
    constructor() {
        this.api = axios.create({
            baseURL: `http://localhost:3000/api/packs`
        });
        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem("authToken");
            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }
            return config;
        });
    }

    getDailyPack() {
        return this.api.get('/dailyPack');
    }

    getBasicPack() {
        return this.api.get('/basicPack');
    }

    getMediumPack() {
        return this.api.get('/mediumPack');
    }

    getPremiumPack() {
        return this.api.get('/premiumPack');
    }
}

const packService = new PackService();
export default packService;
