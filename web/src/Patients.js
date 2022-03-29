import React from 'react'
import { useNavigate } from 'react-router-dom'
import Table from './Table'

export default function Patients() {
    let navigate = useNavigate()
    function patient(){
        navigate('/createPatient')
    }
  return (
    <div className='container p-5'>
        <div className="card">
            <div className="card-header">
                <div className='d-flex justify-content-between '>
                    <div className='h2'>
                        Patients
                    </div>
                    <div className='h2'>
                        <button type="button" className="btn btn-secondary" onClick={patient}>
                            New Patient
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-body d-flex flex-column px-4">
                <div className='mt-3'>
                    Last Patients Registered
                </div>
                <div className='mt-4 '> 
                    <Table/>
                </div>
            </div>
        </div>
    </div>
  )
}
