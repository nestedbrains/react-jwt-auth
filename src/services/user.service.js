import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
    getPublicContent() {
        const asd = axios.get(API_URL + 'all', {headers: authHeader()});
        return asd;
    }

    getUserBoard() {
        return axios.get(API_URL + 'user', {headers: authHeader()});
    }

    getModeratorBoard() {
        return axios.get(API_URL + 'mod', {headers: authHeader()});
    }

    getAdminBoard() {
        const asd = axios.get(API_URL + 'admin', {headers: authHeader()});
        return asd;
    }
}

export default new UserService();
