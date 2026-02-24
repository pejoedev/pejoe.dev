import React from 'react'
import './Image.css'

interface ImageUrl {
    imageUrl: string
}

const Image: React.FC<ImageUrl> = (imageUrl) => {
    return (
        <div className="image">
            <img src={imageUrl.imageUrl}></img>
        </div>
    )
}

export default Image