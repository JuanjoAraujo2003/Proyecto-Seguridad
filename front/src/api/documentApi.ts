import axios from "axios";
export const getAllDocuments = () => {return axios.get("http://localhost:8000/api/v1/value/")}