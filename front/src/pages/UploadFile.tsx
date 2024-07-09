import {useState} from "react";
import {importDocument} from "../api/documentApi.ts";
import {Input} from "../components/ui/input.tsx";
import {Label} from "../components/ui/label.tsx";

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


    return (
<div className="w-full max-w-4xl mx-auto flex flex-col justify-center items-center min-h-screen">
    <form onSubmit={onSubmit}>
        <Label htmlFor="file">Archivo csv</Label>
        <Input onChange={handleFile} type="file"/>
        <button type= "submit">Guardar</button>
        </form>
    </div>
    )
}