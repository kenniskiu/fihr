import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import _ from 'lodash'

export default function Table() {
    const axios = require('axios')
    let navigate = useNavigate()
    const [list,setList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/patients')
        .then((response)=>{
            setList(response)
        })
    },[]);

    function create(id){
        navigate(`/create/${id}`)
    }
    
  return (
    <div>
        <table className="table text-center">
            <thead>
                <tr className='bg-dark text-white '>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Navigator</th>
                    <th scope="col">Last Contact</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
        <tbody>
            {_.map(list.data, (patients)=>(
                <tr key={patients.id}>
                    <td>{patients.firstName}</td>
                    <td>{patients.lastName}</td>
                    <td>Kenniskiu Fortino Kurniawan</td>
                    <td>2 days</td>
                    <td>
                        <button type="button" className="btn btn-white text-danger btn-outline-danger" onClick={()=>create(patients.id)}>
                            Schedule Appointment
                        </button>
                    </td>
                </tr>
                ))}
            {/* <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                    <button type="button" className="btn btn-white text-danger btn-outline-danger" onClick={()=>create(1)}>
                        Schedule Appointment
                    </button>
                </td>
            </tr> */}
        </tbody>
    </table>
  </div>
  )
}
