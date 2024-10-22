import axios from "axios";

const API_URL  = import.meta.env.VITE_API_URL;

export const Register = async(datos) =>{
    return await axios.post(`${API_URL}/auth/register`, datos)
}