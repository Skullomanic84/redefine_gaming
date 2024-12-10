import React from 'react'

const ImageClipBox = ({ src, alt, clipClass}) => {
    return (
        <div className={clipClass}>
            <img
                src={src}
                alt={alt}
            />
        </div>
    )
}
export default ImageClipBox
