import axios from "axios";

let AxiosInstance= axios.create({
    baseURL:"https://fakestoreapi.com/"
})

export default AxiosInstance;
