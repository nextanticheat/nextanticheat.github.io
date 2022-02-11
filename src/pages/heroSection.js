import React from 'react'
import { Button } from "./components/Button"
import "./heroSection.css"
import { useHistory } from "react-router-dom";

function HeroSection() { 
    const history = useHistory();
  
    const routeChange = () =>{ 
      let path = `contact`; 
      history.push(path);
    }

    return (
        <>
            <div className="hero-container">
                <h1>Next Anti-Cheat</h1>
                <p>Don't care about Cheaters</p>
                <p className='note'>Note that the anti cheat is currently in beta testing and is not available for pursache yet, if you are interested in beta testing contact us.</p>
                <div className="hero-btns">
                    <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large" onClick={routeChange}>Contact Us</Button>
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Watch Trailer</Button>
                </div>
            </div>
        </>
    )
}

export default HeroSection
