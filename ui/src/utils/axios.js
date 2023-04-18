import axios from 'axios';
const instance = axios.create({
    // baseURL: 'http://localhost:8080/v1/'
    // baseURL: 'http://capstoneg5-env.eba-ewpgeuyb.us-east-2.elasticbeanstalk.com/v1/'
    baseURL: 'http://ec2-3-140-196-217.us-east-2.compute.amazonaws.com/v1/'
});

export default instance