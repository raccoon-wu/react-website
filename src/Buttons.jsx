import './index.css'
import React, { useState } from 'react';

export function FrontPageButton({ className, buttonText, clickMessage, hoverText}) {
    const [isHovered, setIsHovered] = useState(false);
    const handleClick = () => console.log(clickMessage);

    const firstSpaceIndex = buttonText.indexOf(' ');
    const firstWord = buttonText.substring(0, firstSpaceIndex);
    const restOfText = buttonText.substring(firstSpaceIndex);

    return (
        <button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="firstWord">{firstWord}</span>
            <span className="restOfText">{restOfText}</span>
            {isHovered && (
                <div className="hoverTextContainer">
                    <span className="hoverText">{hoverText}</span>
                </div>
            )}
        </button>
    );
}