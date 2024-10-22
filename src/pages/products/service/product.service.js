import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getProducts = async() =>{
    return await axios.get(`${API_URL}/products`)
}