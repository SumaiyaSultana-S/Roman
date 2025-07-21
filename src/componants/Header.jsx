import React from 'react'
import Logo from "../assets/logo.png"
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import List_item from './List_item'

const Header = () => {
  return (
    <>
    <nav className='bg-[#444242] mt-[26px]'>
      <Container>
        <Flex className='items-center '>
          <div className='w-1/4 relative top-0 left-0 '>
            <Image src={Logo}  />
          </div>
          <div className='w-3/4 '>
          <ul className='flex gap-x-4 justify-end'>
            
            <List_item text='Home'/>
            <List_item text='About Me'/>
            <List_item text='What I'/>
            <List_item text='Portfolio'/>
            <List_item text='Client Speak'/>
            <List_item text='Contact Me'/>
            
  



          
         
            </ul>
          </div>
         
        </Flex>
      </Container>
    </nav>
    
    </>
  )
}

export default Header
