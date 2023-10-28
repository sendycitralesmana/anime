"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    const handleSearch = (event: any) => {
        event.preventDefault()
        const keyword = searchRef.current?.value
        router.push(`/search/${keyword}`)
    }
    return (
        <div className="relative">
            <input 
                type="text" 
                placeholder="cari anime ..."
                className="p-2 rounded w-full"
                ref={searchRef}
            />
            <button className="absolute top-2 end-2" onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}

export default InputSearch