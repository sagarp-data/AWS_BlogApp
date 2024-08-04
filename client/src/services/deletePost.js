import axios from 'axios';
import { GLOBAL_API_URL } from './_serviceVariables';

export const deletePost = async (postId, postInfo) => {

    const apiURL = `${GLOBAL_API_URL}/api/posts/${postId}`
    
    return axios.delete(apiURL, postInfo)
};