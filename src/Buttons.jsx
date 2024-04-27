import './index.css'

export function FrontPageButton({buttonText, clickMessage}){
    const handleClick = () => console.log(clickMessage);

    const firstSpaceIndex = buttonText.indexOf(' ');
    const firstWord = buttonText.substring(0,firstSpaceIndex);
    const restOfText = buttonText.substring(firstSpaceIndex);

    return(
    
        <button onClick = {handleClick}>
            <span className="firstWord">{firstWord}</span>
            <span className="restOfText">{restOfText}</span>
        </button>
    )
}
