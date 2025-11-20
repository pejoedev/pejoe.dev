import React from 'react'
import './Home.css'

const Home: React.FC = () => {
    return (
        <div className="home">
            <section className="hero">
                <h1>Welcome to Pejoe.dev</h1>
                <p>A TypeScript React template with routing</p>
                <div className="hero-actions">
                    <button className="cta-button">Get Started</button>
                    <button className="secondary-button">Learn More</button>
                </div>
            </section>

            <section className="features">
                <h2>Features</h2>
                <div className="feature-grid">
                    <div className="feature-card">
                        <h3>⚛️ React 18</h3>
                        <p>Latest React with modern hooks and concurrent features</p>
                    </div>
                    <div className="feature-card">
                        <h3>📘 TypeScript</h3>
                        <p>Full TypeScript support for better development experience</p>
                    </div>
                    <div className="feature-card">
                        <h3>🚀 Vite</h3>
                        <p>Lightning fast build tool and development server</p>
                    </div>
                    <div className="feature-card">
                        <h3>🛣️ React Router</h3>
                        <p>Client-side routing with React Router DOM</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home