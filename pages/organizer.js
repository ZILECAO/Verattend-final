// import '../styles/globals.css'
import { React } from 'react'
import { NavBar } from "../components/navBar"
import Head from 'next/head'

function pendingApplicants() {
    return (
        // <head>
        //     <style>
        //         {
        //             box-sizing: border-box;
        //         }
        //         .column{
        //         float: left;
        //         width: 50%;
        //         }

        //         .row:after{
        //         content: "";
        //         display: table;
        //         clear: both;
        //         }
        //     </style>
        // </head>
        <section className="bg-green-100 min-h-screen">

            <title>Manage This Event</title>
            <div class="row">
                <div style="float:left">
                    Pending Participants
                </div>
                <div style="float:right">
                    Check-In Participants
                </div>
            </div>
        </section >
    )
}

export default pendingApplicants;

// const OTPInput = ({ id, value, onValueChange, handleSubmit }) => {

// }