import React from 'react'
import './Home.css'
import ContentBlock from '../components/ContentBlock/ContentBlock'

const Home: React.FC = () => {
    return (
        <div className="home">
            <section className="hero">
                <ContentBlock>
                    <h1>Welcome to Pejoe.dev</h1>
                </ContentBlock>
            </section>

            <section className="sidebar">
                <ContentBlock>
                    <h2>Sidebar</h2>
                    <ul>
                        <li>option</li>
                        <li>option</li>
                        <li>option</li>
                    </ul>
                </ContentBlock>
            </section>


        </div>
    )
}

export default Home