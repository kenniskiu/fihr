const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require("cors")

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    user : "root",
    host : "localhost",
    password : "root",
    database: "fhir"
})
app.post("/register",(req,res)=>{
    const firstName = req.body.firstName
    const lastName =  req.body.lastName
    const gender = req.body.gender;
    const birthdate = req.body.bd
    db.query(
        "INSERT INTO patient(firstName,lastName,gender,birthdate) VALUES(?,?,?,?)",
        [firstName,lastName,gender,birthdate],
        (err,result)=>{
            if(err){
                console.log(err)
                res.send("error")
            }
            else{
                res.send("Values inserted")
            }
        }
    )
})
app.post("/newAppointment",(req,res)=>{
    const appointmentDesc = req.body.description
    const status = req.body.status
    const comment = req.body.comment
    const start = req.body.date
    const time = req.body.time
    const patientID = req.body.patientID
    const duration = req.body.duration
    console.log(req.body)
    db.query(
        `INSERT INTO appointment(appointmentDesc,comment,start,patientID,duration,time,status) VALUES(?,?,?,?,?,?,?)`,
        [appointmentDesc,comment,start,patientID,duration,time, status],
        (err,result)=>{
            if(err){
                console.log(err)
                res.send("error")
            }
            else{
                res.send("Values inserted")
            }
        }
    )
})
app.get("/patients",(req,res)=>{
    db.query("SELECT * FROM patient",
    (err,result)=>{
        if(err){
            console.log(err)
            res.send("error")
        }
        else{
            res.send(result)
            console.log("sent")
        }
    })
})
app.get("/appointments",(req,res)=>{
    db.query("SELECT * FROM appointment",
    (err,result)=>{
        if(err){
            console.log(err)
            res.send("error")
        }
        else{
            res.send(result)
            console.log("sent")
        }
    })
})
app.put(`/update/:id`,(req,res)=>{
    const id = req.params.id
    console.log(id)
    db.query(" UPDATE appointment SET status= 1 WHERE patientID = ? ",
    [id],
    (err,result)=>{
        if(err){
            console.log(err)
            res.send("error")
        }
        else{
            console.log("updated")
            res.send("updated")
        }
    })
})
app.listen(3001,() => {
    console.log("yo")
})