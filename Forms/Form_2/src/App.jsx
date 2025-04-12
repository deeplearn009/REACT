import React, { useState } from 'react'
import axios from 'axios'
import './App.scss'

const App = () => {

  const [firstname, setFirstname] = useState('')
  const [middlename, setMiddlename] = useState('')
  const [lastname, setLastname] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [tengrade, setTengrade] = useState('')
  const [twelvegrade, setTwelvegrade] = useState('')
  const [graduation, setGraduation] = useState ('')
  const [others, setOthers] = useState('')
  const [experience, setExperience] = useState('')

  const sendData = (e) => {
    e.preventDefault();
    axios.post("https://northwind.vercel.app/api/categories", {
      firstname: firstname,
      middlename: middlename,
      lastname: lastname,
      address: address,
      number: number,
      tengrade: tengrade,
      twelvegrade: twelvegrade,
      graduation: graduation,
      others: others,
      experience: experience
    })

  }
  return (
    <div className='container'>

      <form action="" onSubmit={sendData}>

        <div className="title">
          <h2>Job Application Form</h2>
        </div>

        <div className="inputs">

          <div className="inp">
            <span>First Name</span>
            <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
          </div>

          <div className="inp">
            <span>Middle Name</span>
            <input type="text" value={middlename} onChange={(e) => setMiddlename(e.target.value)}/>
          </div>

          <div className="inp">
            <span>Last Name</span>
            <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
          </div>

          <div className="inp">
            <span>Address</span>
            <textarea name="" id="" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
          </div>

          <div className="inp">
            <span>Number</span>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
          </div>

          <div className="inp">
            <span>10th grade</span>
            <input type="text" value={tengrade} onChange={(e) => setTengrade(e.target.value)}/>
          </div>

          <div className="inp">
            <span>12th grade</span>
            <input type="text" value={twelvegrade} onChange={(e) => setTwelvegrade(e.target.value)}/>
          </div>

          <div className="inp">
            <span>Graduation</span>
            <input type="text" value={graduation} onChange={(e) => setGraduation(e.target.value)}/>
          </div>

          <div className="inp">
            <span>Others</span>
            <input type="text" value={others} onChange={(e) => setOthers(e.target.value)}/>
          </div>

          <div className="inp">
            <span>Experience</span>
            <input type="text" value={experience} onChange={(e) => setExperience(e.target.value)}/>
          </div>

        </div>

        <div className="btn">
          <button type="submit">Submit</button>
        </div>


      </form>





    </div>
  )
}

export default App