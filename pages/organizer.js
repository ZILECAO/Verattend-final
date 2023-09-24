// import '../styles/globals.css'
import { React } from 'react'
import { NavBar } from "../components/navBar"
import Head from 'next/head'

function pendingApplicants() {
    return (
        <section className="bg-green-100 min-h-screen">
            <title>Manage This Event</title>
            <div class="row">
                <div class="column">Pending Participants</div>
                <div class="column">Check-In Participants</div>
            </div>
        </section >
    )
}

export default pendingApplicants;
