import axios from "axios";

const API_URL =  import.meta.env.VITE_API_URL;

export const Login = async (datos) =>{
    return await axios.post(`${API_URL}/auth/login`, datos)
}