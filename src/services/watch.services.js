import axios from "axios";

class WatchService {
    constructor() {
        this.api = axios.create({
            baseURL: `http://localhost:3000/api/watches`
        });

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem("authToken");
            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }
            return config;
        });
    }


    getAllWatches() {
        return this.api.get(`/`);
    }


    getMyWatchsById(id) {
        return this.api.get(`/${id}`);
    }


    createWatch(watchData) {
        return this.api.post(`/`, watchData);
    }


    updateWatch(id, watchData) {
        return this.api.put(`/${id}`, watchData);
    }

    deleteWatch(id) {
        return this.api.delete(`/${id}`);
    }
}


const watchService = new WatchService();
export default watchService;
