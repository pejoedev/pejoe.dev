import React from 'react'
import './Sidebar.css'
import ContentBlock from '../ContentBlock/ContentBlock'


const Sidebar: React.FC = () => {
    return (
        <section className="sidebar">
            <ContentBlock>
                <h2>Sidebar</h2>
                <ul>
                    <li><a href="/images/cat.jpg">cat.jpg</a></li>
                    <li>option</li>
                    <li>option</li>
                </ul>
            </ContentBlock>
        </section>
    )
}

export default Sidebar