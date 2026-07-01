import React from 'react'
import {useState} from 'react'
import {motion} from 'framer-motion'

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = 'ntokozombuliz@gmail.com'

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button className='relative px-1 py-4 text-sm text-center 
    rounded-full font-extralight bg-primary w-[12rem] cursor-pointer
     overflow-hidden' onClick={handleCopy}>
        {copied ? (
          <p className='flex items-center justify-center gap-2'>
            <img src='assets/copy-done.svg' className='w-5' alt='copy'/>
            Email Has Been Copied!</p>
        ) : (
          <p className='flex items-center justify-center gap-2'>
            <img src='assets/copy.svg' className='w-5' alt='copy'/>
            Copy Email Address</p>
        )}
    </button>
  )
}

export default CopyEmailButton
