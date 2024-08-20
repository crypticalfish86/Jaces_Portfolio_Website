export const ListedTechs = () =>
{
    /*Function to import all images from a specific path and map them onto an array*/
    function importAll(path)
    {
        return path.keys().map(path);
    }

    const imageArray = importAll(require.context('../../Assets/Technology_Images', false, /\.(png|jpe?g|svg)$/))


    return(
        <div className="Tech_Images_Display_Box">
        {imageArray.map((image, index) => (
            <div className="Tech_Image_Display_Box">            
                <img key={index} src={image} alt={`img-${index}`}  className="Tech_Image"/>
            </div>             
        ))}
      </div>
    )
}