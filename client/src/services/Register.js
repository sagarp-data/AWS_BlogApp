import axios from 'axios';
import { GLOBAL_API_URL } from './_serviceVariables';

const apiURL = `${GLOBAL_API_URL}/api/auth/register`

export const registerUser = async (Inputs) => {
    return axios.post(apiURL, Inputs)
};