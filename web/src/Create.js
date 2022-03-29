import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
export default function Create() {
    const axios = require('axios')
    const [description,setDescription] = useState('')
    const [status,setStatus] = useState(0)
    const [selectedDate,setSelectedDate] = useState('')
    const [comment,setComment] = useState('')
    const [time,setTime] = useState('')
    const [duration,setDuration] = useState(0)
    const [disable,setDisable]=useState(true)
    let {id} = useParams();
    let navigate = useNavigate()
    function back(){
        navigate("/patients")
    }
    function setDisabled(){
        if(description===['']||status===['']||selectedDate===['']||time===['']||duration===['']||comment===['']){
            setDisable(true)
        }
        else{
            setDisable(false)
        }
    }
    function handleDescription(e){
       e.preventDefault()
       setDescription(e.target.value)
       console.log(description)
    }
    function handleComment(e){
        e.preventDefault()
        setComment(e.target.value)
        console.log(comment)
     }
     function handleDuration(e){
        e.preventDefault()
        setDuration(e.target.value)
        console.log(duration)
     }
     function handleDate(e){
        e.preventDefault()
        setSelectedDate(e.target.value)
        console.log(selectedDate)
     }
     function handleTime(e){
        e.preventDefault()
        setTime(e.target.value)
        console.log(time)
     }
    function submit(id){
        axios.post('http://localhost:3001/newAppointment',{
            description:description,
            status:status,
            date:selectedDate,
            time:time,
            duration:duration,
            comment:comment,
            patientID: id,
        })
        .then(function(response){
            console.log(response)
            toast('Data sent')
            navigate('/appointments')
        })
        .catch(function(error){
            console.log(error)
        })      
    }
    useEffect(() => {
        setDisabled()
      });
    return (
        <div className='container p-5'>
            <div className="card">
                <div className="card-header px-4 pt-3">
                    <div className='d-flex justify-content-between '>
                        <div className='h2'>
                            New Appointment
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
                            <div className="col" onChange={handleDescription}>
                                Description
                                <input className="form-control me-2 mt-3 flex" placeholder="Description of Appointment"/>
                            </div>
                            <div className="col">
                                Status
                                <select className="form-select me-2 mt-3 flex" 
                                id="inputGroupSelect03" 
                                aria-label="Example select with button addon"
                                placeholder="Select Status"
                                onChange={(e)=>{
                                    const selectedFood = e.target.value;
                                    setStatus(selectedFood)
                                }}>
                                    <option value='0'>pending</option>
                                    <option value='1'>booked</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div onChange={handleDate}>
                                    <label className='pt-4' htmlFor="startDate">Date</label>
                                    <input id="startDate" className="form-control" type="date" />
                                </div>
                            </div>
                            <div className="col">
                                <div onChange={handleTime}>
                                    <label className='pt-4' htmlFor="time">Time</label>
                                    <input id="time" className="form-control" type="time" />
                                </div>
                            </div>
                        </div>
                        <div className='pt-4' onChange={handleDuration}>
                            <label htmlFor="time" className="form-label">Pick How many Hours</label>
                            <input type="range" className="form-range"  min="0" max="5" id="time"/>
                            {duration} Hours
                        </div>
                        <div className='pt-4' onChange={handleComment}>
                            Commented
                            <input className="form-control mt-2 flex" placeholder="Any comments of the appointment"/>
                        </div>
                        <button disabled={disable} className='btn btn-primary mt-4' onClick={()=>submit(id)}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
