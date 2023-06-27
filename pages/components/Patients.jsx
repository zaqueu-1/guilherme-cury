import React from 'react'
import Image from 'next/image'

function Patients() {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <div className='patients-container'>
        <Image className='patients' src='/images/001.png' width='300' height='300' />
        <Image className='patients' src='/images/002.png' width='300' height='300' />
        <Image className='patients' src='/images/003.png' width='300' height='300' />
        <Image className='patients' src='/images/004.png' width='300' height='300' />
        <Image className='patients' src='/images/005.png' width='300' height='300' />
        <Image className='patients' src='/images/006.png' width='300' height='300' />
        <Image className='patients' src='/images/007.png' width='300' height='300' />
        <Image className='patients' src='/images/008.png' width='300' height='300' />
      </div>
    </div>
  )
}

export default Patients
