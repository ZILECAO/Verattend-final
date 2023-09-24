// import '../styles/globals.css'
import { React } from 'react'
import { NavBar } from "../components/navBar"
import { useEffect, useState } from "react";
import Head from 'next/head'

//var eventName = document.getElementById();


// Your code here


function pendingApplicants() {
    const [inputValue, setInputValue] = useState('');
    const checkInBtn = () => {
        window.alert(inputValue);
    };
    return (
        <section className="bg-red-100 min-h-screen">

            <div className="text-center">
                <h1 className="bg-red-100 text-red-600 textxl py-5 text-4xl">
                    <b>Manage [Event Name]</b>
                    {/* Event.name */}
                </h1>
                <h4 className="textxl py-5 text-2xl">
                    <b>
                        Number of Spots Available:
                        {/* Number(Event.Spots) */}
                    </b>
                </h4>
                <div class="columns-2 h-full">
                    <div class="overflow-scroll">
                        <h1><b>Pending Participants</b></h1>
                        <ul class="w-full">
                            {/* for (i in Events.participants){
                                <li>Events.participants[i]</li>
                            } */}
                            <li>Particpant1</li>
                            <li>Particpant2</li>
                            <li>Particpant3</li>
                            <li>Particpant3</li>
                            <li>Particpant3</li>
                            <li>Particpant3</li>
                        </ul>
                    </div>
                    <div class="overflow-scroll">
                        <h1 class="py-5"><b>Check-In Participants</b></h1>
                        <input type="text" id="myName" placeholder="Enter Name" value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <div class="border p-4">
                            <button type="button" className="bg-red-500 text-white px-4 py-2 rounded" onClick={checkInBtn}>Check-In</button>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default pendingApplicants;

//export default checkInBtn;
// const OTPInput = ({ id, value, onValueChange, handleSubmit }) => {

// }