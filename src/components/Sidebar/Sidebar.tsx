import React from 'react'
import './Sidebar.css'
import ContentBlock from '../ContentBlock/ContentBlock'


const Sidebar: React.FC = () => {
    return (

        <ContentBlock>
            <h2>Sidebar</h2>
            <ul>
                <li><a href="/pejoe.dev/images/cat.jpg">cat.jpg</a></li>
                <li>still under construction</li>
                <li>still under construction</li>
                <li>still under construction</li>
                <li>still under construction</li>
                <li>still under construction</li>
                <li>still under construction</li>
            </ul>
        </ContentBlock>
    )
}

export default Sidebar