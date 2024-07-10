import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table.tsx"
import {useEffect, useState} from "react";
import {deleteAllDocuments, deleteDocumentById, exportDb, getAllDocuments} from "../api/documentApi.ts";
import {Button} from "./ui/button.tsx";
import {Ellipsis, EllipsisVertical, Trash2} from "lucide-react";
import {Popover, PopoverContent, PopoverTrigger} from "./ui/popover.tsx";
import {Checkbox} from "./ui/checkbox.tsx";


export function TableDocument() {


    // const handlePageChange = (pageNumber) => {
    //   setCurrentPage(pageNumber)
    // }


    const deleteDocument = async (id) => {
        const response = await deleteDocumentById(id)
        window.location.reload()
    }

    const handleExport = async () => {
        const response = await exportDb()
        if (response.status === 200) {
            // Assuming the server sends a file to be downloaded
            const blob = response.data;
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.setAttribute('download', 'Datos.csv'); // or any other filename
            document.body.appendChild(link);
            link.click();
            link.remove();
        } else {
            console.error("Failed to download file.");
        }
    }

    const [documents, setDocuments] = useState([])
    useEffect(() => {
        async function loadDocuments() {
            const res = await getAllDocuments()
            console.log(res)
            setDocuments(res.data)
        }

        loadDocuments()
    }, [])

    // const [search, setSearch] = useState("")
    // const [currentPage, setCurrentPage] = useState(1)
    // const [documentsPerPage] = useState(10)
    // const filteredDocuments = documents.filter((doc) => doc.title.toLowerCase().includes(search.toLowerCase()))
    // const indexOfLastDocument = currentPage * documentsPerPage
    // const indexOfFirstDocument = indexOfLastDocument - documentsPerPage
    // const currentDocuments = filteredDocuments.slice(indexOfFirstDocument, indexOfLastDocument)
    // const totalPages = Math.ceil(filteredDocuments.length / documentsPerPage)

    return (
        <main className="flex-1 p-6">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Categoria</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Descripción</TableHead>
                        <TableHead>Valor</TableHead>
                        <TableHead>Riesgo</TableHead>
                        <TableHead>Aprobación</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {documents.map((doc) => (
                        <TableRow key={doc.id}>
                            <TableCell className="font-medium">{doc.category}</TableCell>
                            <TableCell>{doc.name}</TableCell>
                            <TableCell>{doc.description}</TableCell>
                            <TableCell>{doc.value}</TableCell>
                            <TableCell>{doc.risk}</TableCell>
                            <TableCell className= "flex items-center self-center">
                                <Checkbox/>
                            </TableCell>
                            <TableCell>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="ghost"  size="icon">
                                            <Ellipsis/>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-40">
                                        <Button className="bg-white text-black hover:bg-gray-200 gap-4">
                                            <div className="flex ">
                                                <Trash2/>
                                                <div onClick={() => deleteDocument(doc.id)} size="full">
                                                    Delete
                                                </div>
                                            </div>
                                        </Button>
                                    </PopoverContent>

                                </Popover>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex items-center justify-between mt-6">
                <Button onClick={handleExport}>Exportar</Button>
            </div>
        </main>
    )
}