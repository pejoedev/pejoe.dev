import React from 'react'
import './ContentBlock.css'

interface LayoutProps {
    children?: React.ReactNode
}

const ContentBlock: React.FC<LayoutProps> = ({ children = <div style={{ padding: '1rem' }}>ContentBlock</div> }) => {
    return (
        <div className="content-block">
            {children}
        </div>
    )
}

export default ContentBlock