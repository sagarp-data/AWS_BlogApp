import axios from 'axios';
import { GLOBAL_API_URL } from './_serviceVariables';

export const addPost = async (postInfo) => {

    const apiURL = `${GLOBAL_API_URL}/api/posts/`;
    
    return axios.post(apiURL, postInfo)
};