export const ListedTechs = () =>
{
    /*Function to import all images from a specific path and map them onto an array*/
    function importAll(path)
    {
        return path.keys().map(path);
    }

    const imageArray = importAll(require.context('../../Assets/Technology_Images', false, /\.(png|jpe?g|svg)$/))


    return(
        <div>
        {imageArray.map((image, index) => (             
                <img key={index} src={image} alt={`img-${index}`}  className="Tech_Image"/>
        ))}
      </div>
    )
}