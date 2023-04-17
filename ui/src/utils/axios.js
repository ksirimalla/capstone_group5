import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost:8080/v1/'
    // baseURL: 'http://capstoneg5-env.eba-ewpgeuyb.us-east-2.elasticbeanstalk.com/v1/'
});

export default instance