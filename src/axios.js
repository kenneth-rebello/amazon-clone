import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5001/amaz0n-clone-707jk/us-central1/api'
})

export default axiosInstance