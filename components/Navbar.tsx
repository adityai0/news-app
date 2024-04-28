import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <div className={`w-full px-8 py-5 bg-blue-500 text-white font-medium flex items-center gap-7`}>
      <Link href={'/'} className='font-bold text-lg'>Express News</Link>
        <ul className='flex gap-5'>
            <li><Link href={"/general"}>General</Link></li>
            <li><Link href={"/entertainment"}>Entertainment</Link></li>
            <li><Link href={"/health"}>Health</Link></li>
            <li><Link href={"/science"}>Science</Link></li>
            <li><Link href={"/sports"}>Sports</Link></li>
            <li><Link href={"/technology"}>Technology</Link></li>
            
        </ul>
    </div>
    </>
  )
}

export default Navbar