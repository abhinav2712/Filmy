import React from 'react'

function HeaderItem({Icon,title}) {
  return (
    <div className='flex flex-col items-center cursor-pointer group w-[75x] mt-3 sm:w-[150px] sm:-mt-[45px] hover:text-white'>
    <Icon className='h-12 w-12 mb-1 group-hover:animate-bounce'/>
    <p className=' opacity-0 group-hover:opacity-100 tracking-widest'>{title}</p>
    </div>
  )
}

export default HeaderItem