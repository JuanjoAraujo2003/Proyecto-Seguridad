import {useEffect, useState} from "react";
import {getAllDocuments} from "../api/documentApi.ts"

export function DocumentsList()
{
    const [documents,setDocuments] = useState([])
    useEffect(() => {
        async function loadDocuments(){
            const res = await getAllDocuments()
            console.log(res)
            setDocuments(res.data)
        }
        loadDocuments()
    },[])
    return <div>
        {documents.map((document) => (
            <div key={document.id}>
                <h1> Categoria {document.category}</h1>
                <p> Nombre {document.name}</p>
                <p> Descripcion {document.description}</p>
                <p> Riesgo {document.risk}</p>
                <p> Valor {document.value}</p>
            </div>
        ))}
    </div>

}