import React from 'react'
import { Button } from "./components/Button"
import "./heroSection.css"

function HeroSection() { 
    return (
        <>
            <div className="hero-container">
                <h1>Light Anti-Cheat</h1>
                <p>Don't care about the Cheaters</p>
                <div className="hero-btns">
                    <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Get Started</Button>
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Watch Trailer</Button>
                </div>
            </div>
        </>
    )
}

export default HeroSection
