import { React } from 'react'
import { NavBar } from "../components/navBar"
import Head from 'next/head'

function events() {
    return (
        <section className="bg-red-100 min-h-screen">
            <center>
                <h1 className="bg-red-100 text-red-600 textxl py-5 text-4xl">
                    <b>All Events</b>
                </h1>
                <ul class="w-full text-red-600">
                    <li className="my-2">Event 1 - <button type="button" class="bg-red-500 text-white px-2 rounded"> Join Event!</button></li>
                    <li className="my-2">Event 2 - <button type="button" class="bg-red-500 text-white px-2 rounded"> Join Event!</button></li>
                    <li className="my-2">Event 3 - <button type="button" class="bg-red-500 text-white px-2 rounded"> Join Event!</button></li>
                    <li className="my-2">Event 4 - <button type="button" class="bg-red-500 text-white px-2 rounded"> Join Event!</button></li>
                    <li className="my-2">Event 5 - <button type="button" class="bg-red-500 text-white px-2 rounded"> Join Event!</button></li>
                </ul>
            </center>
        </section>
    )
}

export default events;