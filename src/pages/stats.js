import React from 'react'
import { Button } from "./components/Button"
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { FiShield } from 'react-icons/fi';
import { AiOutlineCode } from 'react-icons/ai'
import { AiOutlinePercentage } from 'react-icons/ai'
import "./stats.css"

function StatsPage() { 
    return (
        <>
            <div className="stats">
                <div className="stats-container">
                    <h3 className="stats-heading">
                        Welcome to the best Anti-Cheat System for Android Games
                    </h3>

                    <div className="grid">
                        <div className="column">
                            <h3 className="column-icon"><MdOutlinePhoneAndroid/> </h3>
                            <h3 className="column-stats">98 %</h3>
                            <p className="text-secondary">device compatibility </p>
                        </div>
                        <div className="column">
                            <h3 className="column-icon"><FiShield/> </h3>
                            <h3 className="column-stats">100 %</h3>
                            <p className="text-secondary">secure</p>
                        </div>
                        <div className="column">
                            <h3 className="column-icon"><AiOutlineCode/> </h3>
                            <h3 className="column-stats">95 %</h3>
                            <p className="text-secondary">of the cheaters prevented</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatsPage