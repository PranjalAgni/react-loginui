import axios from 'axios';
import { API_BASE_URL } from '../constants/index';

export const doLogin = async () => {
  try {
    window.open(`${API_BASE_URL}/api/auth/google/login`, '_self');
  } catch (ex) {
    throw ex;
  }
};

export const getUserProfile = async () => {
  try {
    return await axios.post(
      `${API_BASE_URL}/api/users/`,
      {},
      {
        withCredentials: true,
      }
    );
  } catch (ex) {
    console.error(ex);
    throw ex;
  }
};

export const isAuthenticated = async () => {
  try {
    const { data } = await axios.get(
      `${API_BASE_URL}/api/auth/google/isLoggedIn`,
      {
        withCredentials: true,
      }
    );

    return data?.status === true;
  } catch (ex) {
    return false;
  }
};

export const doLogout = async () => {
  try {
    return await axios.get(`${API_BASE_URL}/api/auth/google/logout`, {
      withCredentials: true,
    });
  } catch (ex) {
    throw ex;
  }
};
