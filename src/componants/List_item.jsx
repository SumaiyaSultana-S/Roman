import React from 'react'

const List_item = ({text}) => {
  return (
      <li className=' text-xl text-[#fff] font-bold font-oswald hover:bg-[#fff] hover:text-[#000] py-3 px-3 duration-300 cursor-pointer border-transparent border-b-4 hover:border-amber-300'>{text}</li>
    
  )
}

export default List_item
