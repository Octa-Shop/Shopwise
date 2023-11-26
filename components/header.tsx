'use client'
import Image from "next/image"
import logo from '@/images/download.png'
import Link from "next/link"

export default function Header() {
  return (
    <header className="container flex justify-between items-center mt-13 ">
      <Image 
      src={logo}
      alt="header image"
      />
      <nav >
        <ul className="flex gap-[11.5px] cursor-pointer ">
          <li><Link href='/'>Home</Link></li>
         
          <li > <Link href='/about'>About</Link></li>
          <li >contact</li>
          <li >Blog</li>
        </ul>
      </nav>
     
    </header>
    
      
  )
}
