function ImageAndVideoRenderer(props) {
  const { key, margin, index, photo, left, top } = props;

  return (
    <div>
        {photo.src.slice(-3) === "png" ? ( 
        <img
        alt={photo.title}
        
        {...photo}/>) : (
            <video style={{maxHeight: "70vh", width: "auto", display: "flex", justifyContent: "center"}} controls>
                <source src={photo.src} type="video/mp4"/>
            </video> 
        )}
    </div>
  );
}

export default ImageAndVideoRenderer;
