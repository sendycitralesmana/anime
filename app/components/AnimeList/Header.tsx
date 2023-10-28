import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }: any) => {
    return (
        <div className='p-4 flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            {
                linkHref && linkTitle 
                ? <Link href={linkHref} className="md:text-xl text-md hover:text-indigo-500 transition-all">{linkTitle}</Link>
                : null
            }
        </div>
    )
}

export default Header 