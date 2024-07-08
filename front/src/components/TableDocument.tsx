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
import {getAllDocuments} from "../api/documentApi.ts";
import {Button} from "./ui/button.tsx";


export function TableDocument(){


  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber)
  // }

    const [documents,setDocuments] = useState([])
    useEffect(() => {
        async function loadDocuments(){
            const res = await getAllDocuments()
            console.log(res)
            setDocuments(res.data)
        }
        loadDocuments()
    },[])

    const [search, setSearch] = useState("")
  // const [currentPage, setCurrentPage] = useState(1)
  // const [documentsPerPage] = useState(10)
  // const filteredDocuments = documents.filter((doc) => doc.title.toLowerCase().includes(search.toLowerCase()))
  // const indexOfLastDocument = currentPage * documentsPerPage
  // const indexOfFirstDocument = indexOfLastDocument - documentsPerPage
  // const currentDocuments = filteredDocuments.slice(indexOfFirstDocument, indexOfLastDocument)
  // const totalPages = Math.ceil(filteredDocuments.length / documentsPerPage)

    return(
        <main className="flex-1 p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Document Library</h1>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Descripcion</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Riesgo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell className="font-medium">{doc.name}</TableCell>
                <TableCell>{doc.categories}</TableCell>
                <TableCell>{doc.description}</TableCell>
                  <TableCell>{doc.value}</TableCell>
                  <TableCell>{doc.risk}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between mt-6">

        </div>
      </main>
    )
}