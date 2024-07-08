import axios from "axios";
export const getAllDocuments = () => {return axios.get("http://localhost:8000/api/v1/value/")}

export const createDocument = (document) => {return axios.post("http://localhost:8000/api/v1/value/", document)}

export const importDocument = async (formdata) =>
{const response= await axios.post(
    "http://localhost:8000/api/upload/",
    formdata,
    {
        headers:{
            "Content-Type": "multipart/form-data",
        },
    })
    console.log(response.data)
    return response
}

