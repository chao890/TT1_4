import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000", // Replace with your server's base URL
    withCredentials: true,           // Ensures cookies are sent with requests
});

// Response Interceptor
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        console.log(error, 'error in interceptors')
        if (error.response && error.response.status === 401) {
            const redirectUrl = error.response.data.redirect || "/temp";
            window.location.href = redirectUrl;
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;