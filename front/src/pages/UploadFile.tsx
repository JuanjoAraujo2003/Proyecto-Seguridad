import {useState} from "react";
import {importDocument} from "../api/documentApi.ts";

export function UploadFile() {

    const [file, setFile] = useState(null)
    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const fromData = new FormData()
        fromData.append("file", file)
        const fileResponse = await importDocument(fromData)
        console.log(fileResponse)
    }


    return(<div>
        <form onSubmit={onSubmit}>
            <input type= "file" onChange={handleFile}/>
            <button type= "submit">Import</button>
        </form>
    </div>)
}