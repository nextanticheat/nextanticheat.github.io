import React from 'react'
import "./games.css"

import blockstrike from './images/blockstrike.png';

function GamesPage() { 
    return (
        <>
            <div className="games-container" >
                <div class="text-center">
                    <h2 class="common-h2">Games that use our Anti-Cheat</h2>
                </div>
                <div class="container">
                    <div class="game-container">
                        <h3>Block Strike</h3>
                        <img src={blockstrike} alt="Block Strike Image" />
                    </div>
                    <div class="game-container">
                        <h3>Block Strike</h3>
                        <img src={blockstrike} alt="Block Strike Image" />
                    </div>
                    <div class="game-container">
                        <h3>Block Strike</h3>
                        <img src={blockstrike} alt="Block Strike Image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GamesPage