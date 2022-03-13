import React from 'react'

export default function Footer() {
    const date = new Date().getFullYear();
   
  return (
    <>
        <footer className=" w-100 bg-dark py-3 mt-5">
            <p className='text-white text-center m-0'> Copyright &copy; All Rights Reserved {date}</p>
        </footer>
    </>
  )
}
