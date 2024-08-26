export const ListedTechs = (props) =>
{
    const imageArray = props.imageArray; //imageArray from parent containing all images of techs you've worked on
    const imageTitles = props.imageTitles;//names of the images
    

    return(
        <div className="Listed_Techs_Container">
            <div className="Tech_Images_Display">
                {imageArray.map((image, index) => (
                    <div className="Tech_Image_Box_Container">
                        <div className="Tech_Image_Box_Title"> 
                            {imageTitles[index]} 
                        </div>
                        <img key={index} src={image} alt={`img-${index}`}  className="Tech_Image"/>
                    </div>
                ))}
            </div>
            <div className="Tech_Images_Display">
                {imageArray.map((image, index) => (
                <div className="Tech_Image_Box_Container"> 
                        <div className="Tech_Image_Box_Title"> 
                            {imageTitles[index]} 
                        </div>
                    <img key={index} src={image} alt={`img-${index}`}  className="Tech_Image"/>
                </div>
                ))}
            </div>
            <div className="Tech_Images_Display">
                {imageArray.map((image, index) => (
                <div className="Tech_Image_Box_Container">
                        <div className="Tech_Image_Box_Title"> 
                            {imageTitles[index]} 
                        </div>
                    <img key={index} src={image} alt={`img-${index}`}  className="Tech_Image"/>
                </div>
                ))}
            </div>
        </div>
    )
}