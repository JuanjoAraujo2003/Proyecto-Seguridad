import { Input } from "./ui/input.tsx"
import {useState} from "react";

export function NavBar(){

    const [search, setSearch] = useState("")

    return(

        <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#" className="font-bold text-lg" >
            Document Library
          </a>
          <nav className="flex items-center gap-4">
            <a href="#" className="hover:underline" >
              Create Document
            </a>
            <a href="#" className="hover:underline" >
              List Documents
            </a>
            <a href="#" className="hover:underline" >
              Import Document
            </a>
          </nav>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon className="w-5 h-5 text-primary-foreground" />
          </div>
          <Input
            type="search"
            placeholder="Search documents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 rounded-md bg-primary/20 border-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
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