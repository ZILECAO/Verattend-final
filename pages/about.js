import { React } from 'react'
import { NavBar } from "../components/navBar"
import Head from 'next/head'

function about() {
    return (
        <section className="bg-red-100 min-h-screen">
            <center>
                <h1 className="bg-red-100 text-red-600 textxl py-5 text-4xl">
                    <b>About Us</b>
                </h1>
                <p class="text-red-600">
                    Verattend is an On-Chain event attendance verification method .... etc.
                </p>
            </center>
        </section>
    )
}

export default about;