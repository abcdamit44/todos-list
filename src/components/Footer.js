import React from 'react'

export default function Footer() {
    const date = new Date().getFullYear();
  return (
    <>
        <div className=" w-100 bg-dark py-3">
            <p className='text-white text-center m-0'> Newton School Copyright &copy; All Rights Reserved {date}</p>
        </div>
    </>
  )
}
