import React from 'react'
import Hero from "../components/Hero"
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import RoomContainer from '../components/RoomContainer'
export default function Room() {
    return (
        <>
        <Hero hero="roomsHero" >
            <Banner title="OUR ROOMS">
            <button>
                <Link to="/" className="btn-primary">
                 RETURN HOME
                </Link>
            </button>
            </Banner>
        </Hero>
        <RoomContainer/>
        </>
    )
}
