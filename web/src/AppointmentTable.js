import axios from 'axios';
import React, { useEffect, useState } from 'react'
import _ from 'lodash'

export default function AppointmentTable() {
    const [list,setList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/appointments')
        .then((response)=>{
            setList(response)
        })
    },[]);

    return (
        <div>
            <table className="table text-center container-fluid table-hover">
                <thead>
                    <tr className='bg-dark text-white'>
                        <th scope="col">Appointment Description</th>
                        <th scope="col">Patient ID</th>
                        <th scope="col">Time</th>
                        <th scope="col">Date</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Status</th>
                        <th scope="col">Comment</th>
                    </tr>
                </thead>
            <tbody>
                {_.map(list.data, (appointments)=>(
                    <tr key={appointments.appointmentID}>
                        <td>{appointments.appointmentDesc}</td>
                        <td>{appointments.patientID}</td>
                        <td>{appointments.time}</td>
                        <td>{appointments.start}</td>
                        <td>{appointments.duration}</td>
                        <td>{appointments.status}</td>
                        <td>{appointments.comment}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}
