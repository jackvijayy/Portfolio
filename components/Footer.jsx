import { Github, LucideSquareDashedBottomCode } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex justify-between mb-10'>
        <p>
          @2024 copyRight & Reserved  
        </p>
        <div className='flex gap-3'>
            <Link href="https://github.com/jackvijayy">
            <Github color='white'/>
            </Link>

            <Link href="https://leetcode.com/u/vijay28_lee/">
            <LucideSquareDashedBottomCode color='white'/>
            </Link>


        </div>
        

    </div>
  )
}

export default Footer