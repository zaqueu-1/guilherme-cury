import React from 'react'
import Image from 'next/image'
import { MdVerified } from 'react-icons/md'

function Header() {
  return (
    <div className='header'>
        <div className="verified-link">
            <MdVerified className='verified-icon'/>
            <span className='verified'>Link Verificado</span>
        </div>
        <Image src='/images/avatar.png' className='avatar' height='200' width='200' />
        <h1>Guilherme Cury</h1>
        <p>CONSULTORIA NUTRICIONAL E MÉDICA</p>
    </div>
  )
}

export default Header
