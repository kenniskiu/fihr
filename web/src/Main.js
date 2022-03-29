import React from 'react'
import { FaWheelchair } from 'react-icons/fa'

export default function Main() {
  return (   
    <div>
        <div className='text-center h1 pt-5 mt-5 d-flex flex-column container-fluid'>
            Welcome, This is the Homepage  
            <div className='justify-content pt-5'>
                <FaWheelchair size={70}/>
            </div>     
        </div>
    </div>
  )
}
