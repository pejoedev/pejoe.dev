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
                    <p>
                        Welcome to my small website. This website is inspired by all these neocities sites.
                        This website is my blog, and my little digital garden.
                    </p>
                </ContentBlock>
            </section>
            <section className="sidebar">
                <Sidebar></Sidebar>
                <ContentBlock>

                </ContentBlock>
            </section>


        </div>
    )
}

export default Home