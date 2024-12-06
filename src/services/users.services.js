import axios from "axios";

class UserService {
    constructor() {
        this.api = axios.create({
            baseURL: `http://localhost:3000/api/users`
        });
        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem("authToken");
            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }
            return config;
        });
    }

    getUserById(id) {

        return this.api.get(`/userById/${id}`);
    }

    getUserByPoints() {
        return this.api.get(`/usersByPoints`);
    }

    updateUser(id, userData) {
        return this.api.put(`/update/${id}`, userData);
    }

    addPointsToUser(id, points) {
        return this.api.patch(`/${id}/addPointsTo`, { points });
    }

    removePointsToUser(id, points) {
        return this.api.patch(`/${id}/removePointsTo`, { points });
    }
    addWatchToUser(id, watchId) {
        return this.api.patch(`/${id}/addWatchsTo`, { watchId });
    }
    removeWatchFromUser(id, watchId) {
        return this.api.patch(`/${id}/removeWatchesTo`, { watchId });
    }


    deleteUser(id) {
        return this.api.delete(`/delete/${id}`);
    }
}

const userService = new UserService();
export default userService;
