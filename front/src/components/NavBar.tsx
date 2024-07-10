import { Input } from "./ui/input.tsx"
import {useState} from "react";
import {Link} from "react-router-dom";

export function NavBar(){

    const [search, setSearch] = useState("")

    return(

        <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#" className="font-bold text-lg" >
            Document Library
          </a>
          <nav className="flex items-center gap-4">
            <Link to="/document-create" className="hover:underline" >
              Create Document
            </Link>
            <Link to="/documents" className="hover:underline" >
              List Documents
            </Link>
            <Link to="/import-document" className="hover:underline" >
              Import Document
            </Link>
          </nav>
        </div>
      </header>
    )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}