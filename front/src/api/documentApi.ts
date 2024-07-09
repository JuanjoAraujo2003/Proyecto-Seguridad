import axios from "axios";
export const getAllDocuments = () => {return axios.get("http://localhost:8000/api/v1/value/")}

export const createDocument = (document) => {return axios.post("http://localhost:8000/api/v1/value/", document)}

export const exportDb = () => {
    const file =  axios.get("http://localhost:8000/export/csv/", {responseType:"blob"})
    const url = window.URL.createObjectURL(new Blob([file.data], {type:"text/csv"}))
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", "data.csv")
    document.body.appendChild(link)
    link.click()
    link.remove()
}

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

