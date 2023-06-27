import React from 'react'
import Image from 'next/image'

function Links() {
  return (
    <div className='links'>
        <a href="https://wa.me/5561981606000" className='link' target="_blank" rel="noreferrer">
          <Image className='img' src='/images/gui1.png' width='505' height='205' />
        </a>

        <a href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODgzNjg0NTQyNTM2OTk3?igshid=MTc4MmM1YmI2Ng==" className='link' >
        <Image className='img' src='/images/gui2.png' width='505' height='205' />
        </a>

      <div className="parceiros">
        <Image className='img2' src='/images/growth.png' width='300' height='200' />
        <Image className='img2' src='/images/oficialfarma.png' width='300' height='200' />
      </div>

    </div>
  )
}

export default Links
