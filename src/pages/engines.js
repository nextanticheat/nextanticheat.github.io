import React from 'react'
import { Button } from "./components/Button"
import "./engines.css"

import unityLogo from './images/unity-logo.png'
import unrealLogo from './images/unreal-logo.png'
import godotLogo from './images/godot-logo.png'

function EnginesPage() { 
    return (
        <>
            <section class="languages">
                <h2 class="header-text">Supported Game Engines</h2>
                <div class="container-flex">
                    <div class="card">
                        <h4>Unity Engine</h4>
                        <img src={unityLogo} alt=""></img>
                    </div>
                    <div class="card">
                        <h4>Unreal Engine (comming soon)</h4>
                        <img src={unrealLogo} alt=""></img>
                    </div>
                    <div class="card">
                        <h4>Godot Engine (comming soon)</h4>
                        <img src={godotLogo} alt=""></img>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EnginesPage