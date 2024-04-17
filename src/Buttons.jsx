export function FrontPageButton({buttonText, clickMessage}){
    const handleClick = () => console.log(clickMessage);
    return(<button onClick = {handleClick}>{buttonText}</button>)
}
