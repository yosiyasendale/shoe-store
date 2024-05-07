import React from 'react'

const Button = ({label, iconURL}) => {
  return (
<button className='flex justify-center 
items-center gap-2 px-7 py-4 border 
font-montserrat text-lg leading-none
 bg-coral-red rounded-full
  text-white border-coral-red hover:bg-coral-red active:bg-coral-red focus:ring
   focus:ring-red-200'>
 {label}
 <img src={iconURL} alt="arrow right icon" 
 className='ml-2 rounded-full w-4 h-4 '
 
 />
</button>

  )
}

export default Button