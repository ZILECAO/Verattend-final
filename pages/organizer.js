// import '../styles/globals.css'
import { React } from 'react'
import { NavBar } from "../components/navBar"
import Head from 'next/head'

function pendingApplicants() {
    return (
        <section className="bg-green-100 min-h-screen">
            <title>Manage This Event</title>
            <div class="row">
            <div class="column">
            <h1>Pending Participants</h1> 
            </div>
            <div class="column">
            <h1>Approve</h1> 
            </div>

            </div>
        </section>
    )
}

export default pendingApplicants;
