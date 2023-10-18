import axios from "axios"
export const httpRequest = axios.create({
    baseURL: import.meta.env.VITE_REACT_API_URL
})


