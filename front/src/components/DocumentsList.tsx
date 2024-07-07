import {useEffect} from "react";
import {getAllDocuments} from "../api/documentApi.ts"

export function DocumentsList()
{
    useEffect(() => {
        async function loadDocuments(){
            const res = await getAllDocuments()
            console.log(res)
        }
        loadDocuments()
    },[])
    return(<div>Document List</div>)

}