import axios from 'axios';
import { GLOBAL_API_URL } from './_serviceVariables';

const apiURL = `${GLOBAL_API_URL}/api/auth/logout`

export const logoutUser = async () => {
    return axios.post(apiURL)
};