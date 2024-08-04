import axios from 'axios';
import { GLOBAL_API_URL } from './_serviceVariables';

const apiURL = `${GLOBAL_API_URL}/api/auth/login`

export const loginUser = async (Inputs) => {
    return axios.post(apiURL, Inputs)
};