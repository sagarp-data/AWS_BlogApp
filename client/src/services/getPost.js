import axios from 'axios';
import { GLOBAL_API_URL } from './_serviceVariables';

export const getPost = async (postId) => {

    const apiURL = `${GLOBAL_API_URL}/api/posts/${postId}`;
    
    return axios.get(apiURL)
};