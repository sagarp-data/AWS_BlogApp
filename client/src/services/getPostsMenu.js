import axios from 'axios';
import { GLOBAL_API_URL } from './_serviceVariables';

export const getPostsMenu = async (cat) => {

    const apiURL = `${GLOBAL_API_URL}/api/posts/?cat=${cat}`
    
    return axios.get(apiURL)
};