import "./pricing.css"
import { FcCheckmark } from "react-icons/fc"
import { FiMinus } from "react-icons/fi"

function PricingsPage() { 
    return (
        <>
            <section id="price-table">
                <div class="text-center">
                    <h5 class="common-h5">PRICING PLAN</h5>
                    <h2 class="common-h2">The Best Solutions for Our Clients</h2>
                </div>
                <div class="basic-price-col">
                    <div class="basic-price-info">
                        <h4>Basic</h4>
                        <div class="price">
                            <p>$500</p>
                        </div>
                        <div class="price-list">
                            <ul>
                                <li className="good">
                                    <FcCheckmark className="good-icon" />
                                    Full Protection
                                    </li>
                                <li className="good">
                                    <FcCheckmark className="good-icon" />
                                    Receive Critical Updates
                                    </li>
                                <li className="bad">
                                    <FiMinus className="bad-icon" />
                                    Needs Logo at
                                    Splash Screen
                                </li>
                                <li className="bad">
                                    <FiMinus className="bad-icon" />
                                    Feature updates may be delayed
                                </li>
                                <li className="bad">
                                    <FiMinus className="bad-icon" />
                                    Limited CCU Count
                                </li>
                            </ul>
                        </div>
                        <button type="button" class="price-btn">Get Started</button>
                    </div>
                </div>
                <div class="basic-price-col rec-price">
                    <div class="basic-price-info">
                        <h4>Standard</h4>
                        <div class="price">
                            <p>$1200</p>
                        </div>
                        <div class="price-list">
                            <ul>
                            <li className="good">
                                    <FcCheckmark className="good-icon" />
                                    Full Protection
                                    </li>
                                <li className="good">
                                    <FcCheckmark className="good-icon" />
                                    Receive Beta Updates
                                    </li>
                                <li className="good">
                                    <FcCheckmark className="good-icon" />
                                    Support response in within 24 Hours
                                </li>
                                <li className="good">
                                    <FcCheckmark className="good-icon" />
                                    Up to 100.000 CCU
                                </li>
                                <li className="bad">
                                    <FiMinus className="bad-icon" />
                                    100.000 Maximum CCU
                                </li>
                            </ul>
                        </div>
                        <button type="button" class="price-btn">Get Started</button>
                    </div>
                </div>
                <div class="basic-price-col">
                    <div class="basic-price-info">
                        <h4>Premium</h4>
                        <div class="price">
                            <p>$2500</p>
                        </div>
                        <div class="price-list">
                            <ul>
                                <li className="good">
                                    <FcCheckmark className="good-icon" />
                                    Full Protection
                                    </li>
                                <li className="good">
                                    <FcCheckmark className="good-icon" />
                                    Receive Updates before
                                    everyone else
                                    </li>
                                <li className="good">
                                    <FcCheckmark className="good-icon" />
                                    Unlimited CCU
                                </li>
                                <li className="good">
                                    <FcCheckmark className="good-icon" />
                                    Higher Support Priority
                                </li>
                                <li className="good">
                                    <FcCheckmark className="good-icon" />
                                    Exclusive Features and Updates
                                </li>
                            </ul>
                        </div>
                        <button type="button" class="price-btn">Get Started</button>
                    </div>
                </div>
                <div class="clear"></div>
            </section>
        </>
    )
}

export default PricingsPage