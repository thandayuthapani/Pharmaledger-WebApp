/* eslint-disable arrow-parens */
/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { parseJwt } from './AuthHeader';
import { uri } from '../config';

const AUTH_URL = `${uri}/user`;

class AuthService {
  login(email, password) {
    return axios
      .post(`${AUTH_URL}/login`, {
        email,
        password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data.token));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user, callback, errorcallback) {
    return axios
      .post(`${AUTH_URL}/register`, user)
      .then(response => {
        if (callback != null) {
          callback(response);
        }
      })
      .catch(error => {
        console.error(error);
        errorcallback(error);
      });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  isLoggedIn() {
    return localStorage.getItem('user') !== null;
  }

  isAdmin() {
    if (this.isLoggedIn()) {
      const currentUserToken = this.getCurrentUser();
      const currentUser = parseJwt(currentUserToken);
      return currentUser.role === 'admin';
    }
    return false;
  }

  isTutor() {
    if (this.isLoggedIn()) {
      const currentUserToken = this.getCurrentUser();
      const currentUser = parseJwt(currentUserToken);
      return currentUser.role === 'tutor' || currentUser.role === 'admin';
    }
    return false;
  }
}

export default new AuthService();
