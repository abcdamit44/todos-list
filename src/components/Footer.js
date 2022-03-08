import React from 'react'

export default function Footer() {
    const date = new Date().getFullYear();
  return (
    <>
        <div className="position-fixed bottom-0 w-100 bg-dark pt-3">
            <p className='text-white text-center'>Copyright &copy; All Rights Reserved {date}</p>
        </div>
    </>
  )
}
