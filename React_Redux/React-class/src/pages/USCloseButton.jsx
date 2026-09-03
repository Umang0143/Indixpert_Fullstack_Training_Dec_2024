import React from 'react'
import CloseButton from 'react-bootstrap/CloseButton';

const USCloseButton = () => {
  return (
    <div data-bs-theme="dark" className='bg-black p-2'>
      <CloseButton />
      <CloseButton disabled />
    </div>
  )
}

export default USCloseButton