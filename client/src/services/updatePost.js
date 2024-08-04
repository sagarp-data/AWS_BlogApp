import axios from 'axios';
import { GLOBAL_API_URL } from './_serviceVariables';

export const updatePost = async (postId, postInfo) => {

    const apiURL = `${GLOBAL_API_URL}/api/posts/${postId}`
    
    return axios.put(apiURL, postInfo)
};