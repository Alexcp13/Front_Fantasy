import axios from "axios";


class AuthService {
    constructor() {
        this.api = axios.create({
            baseURL: `http://localhost:3000/api/auth`
        });
        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem("authToken");
            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }
            return config;
        });
    }
    signup(userData) {
        return this.api.post('/signin', userData);
    }

    login(userData) {
        return this.api.post('/login', userData);
    }
    verifyToken(token) {
        return this.api.get('/verify', { headers: { Authorization: `Bearer ${token}` } });
    }
}

const authService = new AuthService();
export default authService;