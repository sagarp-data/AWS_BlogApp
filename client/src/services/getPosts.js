import axios from 'axios';
import { GLOBAL_API_URL } from './_serviceVariables';

export const getPosts = async (cat) => {

    const apiURL = `${GLOBAL_API_URL}/api/posts/${cat}`
    
    return axios.get(apiURL)
};