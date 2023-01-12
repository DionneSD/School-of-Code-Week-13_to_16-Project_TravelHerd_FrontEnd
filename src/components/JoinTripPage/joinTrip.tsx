import React, {useState} from 'react'
import './joinTrip.css'
import Navbar from '../NavBar/NavBar';

const JoinTrip = (props:any) => {

const [tripID, setTripID] = useState("")


function handleSubmit(e:any) {
     e.preventDefault();

    console.log(tripID)

    props.pageSelect("dashboard")

    setTripID("")
}

    return <div className="join-form">
        <div className="join-form-item join-nav">
        <Navbar />
        </div>
        <form className="join-form-item" onSubmit={handleSubmit}>
            <label>Trip ID
                <input type="text" placeholder='enter trip ID here...' onChange={(e) => {setTripID(e.target.value)}} value={tripID}></input>
            </label>
            <input type="submit" value="Submit"></input>
        </form>
        <button className="join-cancel-button cancel-button" onClick={() => {props.pageSelect("dashboard")}}>cancel</button>
    </div>
}

export default JoinTrip
 