import {DocumentsList} from "../components/DocumentsList.tsx";
import {TableDocument} from "../components/TableDocument.tsx";
export function WordPage()
{
    return(<div className="flex flex-col min-h-screen">
        <p>Word Page</p>
        {/*<DocumentsList/>*/}
        <TableDocument/>
    </div>)
}