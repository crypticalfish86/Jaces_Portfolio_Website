export const ListedTechs = (props) =>
{
    const imageArray = props.imageArray; //imageArray from parent containing all images of techs you've worked on

    return(
        <div className="Listed_Techs_Container">
            <div className="Tech_Images_Display">
                {imageArray.map((image, index) => (
                    <img key={index} src={image} alt={`img-${index}`}  className="Tech_Image"/>
                ))}
            </div>
            <div className="Tech_Images_Display">
                {imageArray.map((image, index) => (
                    <img key={index} src={image} alt={`img-${index}`}  className="Tech_Image"/>
                ))}
            </div>
            <div className="Tech_Images_Display">
                {imageArray.map((image, index) => (
                    <img key={index} src={image} alt={`img-${index}`}  className="Tech_Image"/>
                ))}
            </div>
        </div>
    )
}