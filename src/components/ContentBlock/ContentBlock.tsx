import React from 'react'
import './ContentBlock.css'

interface LayoutProps {
    children: React.ReactNode
}

const ContentBlock: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="content-block">
            {children}
        </div>
    )
}

export default ContentBlock