import axios from "axios";

const instance = axios.create();

instance.defaults.baseURL = process.env.NEXT_PUBLIC_ONLINE_COURSE_SERVICE

instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    if (error.response.status === 401) {
        
    }

    return Promise.reject(error);
  });

export default instance