import React, {useState,useEffect} from 'react'
import { useNavigate} from "react-router-dom";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function CreatePatient() {
    let navigate = useNavigate()
    const axios = require('axios')
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [gender,setGender] = useState('')
    const [bd,setBd] = useState('')
    const [disable,setDisable] = useState(true)
    function back(){
        navigate("/patients")
    }
    function handleFirstName(e){
        e.preventDefault()
        setFirstName(e.target.value)
    }
    function handleLastName(e){
        e.preventDefault()
        setLastName(e.target.value)
    }
    function setDisabled(){
        if(lastName===['']||firstName===['']||gender===['']||bd===['']){
            setDisable(true)
        }
        else{
            setDisable(false)
        }
    }
    function submit(){
        axios.post('http://localhost:3001/register',{
            firstName:firstName,
            lastName:lastName,
            gender:gender,
            bd:bd,
        })
        .then(function(response){
            console.log(response)
            toast('Data sent')
            navigate('/patients')
        })
        .catch(function(error){
            console.log(error)
        })      
    }
    function bdHandler(e){
        e.preventDefault()
        setBd(e.target.value)
    }
    useEffect(() => {
        setDisabled()
        console.log(bd)
        console.log(gender)
      });
    return (
        <div className='container p-5'>
            <div className="card">
                <div className="card-header px-4">
                    <div className='d-flex justify-content-between '>
                        <div className='h2'>
                            New Patient
                        </div>
                        <div className='h2'>
                            <button type="button" className="btn btn-secondary" onClick={back}>
                                Return
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card-body d-flex flex-column px-4">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                First Name
                                <input onChange={handleFirstName} className="form-control me-2 mt-3 flex" placeholder="First Name"/>
                            </div>
                            <div className="col">
                                Last Name
                                <input onChange={handleLastName} className="form-control me-2 mt-3 flex" placeholder="Last Name"/>
                            </div>
                        </div>
                        <div className='pt-4'>
                            <div onChange={bdHandler}>
                                <label className='pt-4' htmlFor="startDate">Birthdate</label>
                                <input id="startDate" className="form-control" type="date"/>
                            </div>
                        </div>
                        <div className='pt-4'>
                            Gender
                            <select className="form-select me-2 mt-3 flex" 
                                id="inputGroupSelect03" 
                                aria-label="Example select with button addon"
                                placeholder="Select Status"
                                onChange={(e)=>{
                                    const selectedGender = e.target.value;
                                    setGender(selectedGender)
                                }}>
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                    <option value='other'>Other</option>
                                </select>
                        </div>
                        <button disabled={disable} className='btn btn-primary mt-4' onClick={submit}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
