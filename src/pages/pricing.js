import "./pricing.css"

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
                        <h4>Basic Plan</h4>
                        <div class="price">
                            <p>$2450</p>
                        </div>
                        <div class="price-list">
                            <ul>
                                <li>SEO Audits</li>
                                <li>SEO Audits</li>
                                <li>SEO Audits</li>
                                <li>SEO Audits</li>
                                <li>SEO Audits</li>
                            </ul>
                        </div>
                        <button type="button" class="price-btn">Get Started</button>
                    </div>
                </div>
                <div class="basic-price-col rec-price">
                    <div class="basic-price-info">
                        <h4>Standart Plan</h4>
                        <div class="price">
                            <p>$2450</p>
                        </div>
                        <div class="price-list">
                            <ul>
                                <li>SEO Audits</li>
                                <li>SEO Audits</li>
                                <li>SEO Audits</li>
                                <li>SEO Audits</li>
                                <li>SEO Audits</li>
                            </ul>
                        </div>
                        <button type="button" class="price-btn">Get Started</button>
                    </div>
                </div>
                <div class="basic-price-col">
                    <div class="basic-price-info">
                        <h4>Premium Plan</h4>
                        <div class="price">
                            <p>$2450</p>
                        </div>
                        <div class="price-list">
                            <ul>
                                <li>SEO Audits</li>
                                <li>SEO Audits</li>
                                <li>SEO Audits</li>
                                <li>SEO Audits</li>
                                <li>SEO Audits</li>
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