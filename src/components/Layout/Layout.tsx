import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Layout.css'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation()

    return (
        <div className="layout">
            {/* <nav className="navbar">
                
            </nav> */}
            <main className="main-content">
                {children}
            </main>
            {/* <footer className="footer">
                
            </footer> */}
        </div>
    )
}

export default Layout