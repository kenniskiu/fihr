import React from 'react'
import { useNavigate } from 'react-router-dom'
import AppointmentTable from './AppointmentTable'

export default function Appointment() {
    let navigate = useNavigate()
    function nav(){
        navigate('/patients')
    }
  return (
    <div className='container p-5'>
        <div className="card">
            <div className="card-header">
                <div className='d-flex justify-content-between '>
                    <div className='h2'>
                        All Appointments
                    </div>
                    <div className='h2'>
                        <button type="button" onClick={nav} className="btn btn-secondary">
                            New Appointment
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-body d-flex flex-column px-4">
                <div className='mt-3'>
                    Last Appointment Registered
                </div>
                <div className='mt-4 '>
                    <AppointmentTable/>
                </div>
            </div>
        </div>
    </div>
  )
}
