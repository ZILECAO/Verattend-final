import { React } from 'react'
import { NavBar } from "../components/navBar"
import Head from 'next/head'

function myEvents() {
    return (
        <section className="bg-red-100 min-h-screen">
            <center>
                <h1 className="bg-red-100 text-red-600 textxl py-5 text-4xl">
                    <b>Welcome Ahmed</b>
                </h1>
                <h1 className="bg-red-100 text-red-600 textl py-5 text-1l">
                    <b>My Events</b>
                </h1>
                <ul class="w-full text-red-600">
                    <li>Event 1 - EventName</li>
                    <li>Event 2 - EventName</li>
                    <li>Event 3 - EventName</li>
                    <li>Event 4 - EventName</li>
                    <li>Event 5 - EventName</li>
                </ul>

            </center>
        </section>
    )
}

export default myEvents;