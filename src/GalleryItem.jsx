
function GalleryItem(props){
    return(
        <div className = "GalleryItem">
            <img src={props.src}></img>
            <p></p>
        </div>
    );
}

export default GalleryItem