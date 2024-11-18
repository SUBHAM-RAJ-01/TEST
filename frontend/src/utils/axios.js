import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:5000/api', // Your backend URL
});

// Request interceptor to include token in headers
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Assuming you're storing the JWT in localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosClient;
