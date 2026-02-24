import React from 'react'
import './Home.css'
import ContentBlock from '../components/ContentBlock/ContentBlock'
import Sidebar from '../components/Sidebar/Sidebar'

const Home: React.FC = () => {
    return (
        <div className="home">
            <section className="hero">
                <ContentBlock>
                    <h1>Welcome to Pejoe.dev</h1>
                </ContentBlock>
            </section>

            <Sidebar></Sidebar>


        </div>
    )
}

export default Home