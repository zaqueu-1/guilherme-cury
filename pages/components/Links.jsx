import React from 'react'
import Image from 'next/image'

function Links() {
  return (
    <div className='links'>
        <a href="https://wa.me/5561981606000" className='link' target="_blank" rel="noreferrer">
          <Image className='img' src='/images/gui1.png' width='505' height='205' />
        </a>

        <a href="https://www.instagram.com/stories/highlights/17883684542536997/" className='link' target="_blank" rel="noreferrer">
        <Image className='img' src='/images/gui2.png' width='505' height='205' />
        </a>
    </div>
  )
}

export default Links
