import { useNavigate } from "react-router-dom";
function Home() {

    const navigate = useNavigate()

    return (
        <div className="home-section">
            {/* Hero Section */}
            <section className="hero">
                <h1 className="tagline">
                    Unlock powerful ad insights and maximize returns
                    with a single intuitive suite.
                </h1>
                <p>
                    An interactive console to visualize, filter, and analyze ad campaign performance metrics.
                </p>
                <div>
                    <button onClick={() => navigate('/console')}>
                        Get Started <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <h2 className="section-title">Core Features</h2>
                <div className="features-grid">
                    <article className="feature-card">
                        <h3>Smart Filters</h3>
                        <p>Drill down into performance metrics using intuitive nested filters by tags, metrics, and components.</p>
                    </article>
                    <article className="feature-card">
                        <h3>Real-Time Insights</h3>
                        <p>Instantly view the impact of changes with dynamic analytics and performance graphs.</p>
                    </article>
                    <article className="feature-card">
                        <h3>Custom Metrics</h3>
                        <p>Track your most important KPIs with customizable metric tracking and preview.</p>
                    </article>

                </div>
                 <section className="preview">

                 </section>
            </section>

            {/* Pricing Section */}
            <section className="pricing">
                <h2 className="section-title">Simple Pricing</h2>
                <p className="pricing-subtitle">Flexible plans for teams of all sizes</p>
                <div className="pricing-grid">
                    <div className="pricing-card">
                        <h3>Starter</h3>
                        <p className="price">$0 / mo</p>
                        <ul>
                            <li>Basic dashboard access</li>
                            <li>Filter & Tag support</li>
                            <li>Email support</li>
                        </ul>
                        <button onClick={() => navigate('/console')}>Select</button>
                    </div>
                    <div className="pricing-card">
                        <h3>Pro</h3>
                        <p className="price">$49 / mo</p>
                        <ul>
                            <li>All Starter features</li>
                            <li>Advanced metrics + preview</li>
                            <li>Priority support</li>
                        </ul>
                        <button>Select</button>
                    </div>
                    <div className="pricing-card">
                        <h3>Enterprise</h3>
                        <p className="price">Custom</p>
                        <ul>
                            <li>Everything in Pro</li>
                            <li>Custom integrations</li>
                            <li>Dedicated manager</li>
                        </ul>
                        <button>Contact Us</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
