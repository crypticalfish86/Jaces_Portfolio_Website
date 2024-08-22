import { useState } from 'react';


export const ListedTechs = (props) =>
{
    const imageArray = props.imageArray; //imageArray from parent containing all images of techs you've worked on

    //on first render set images as first 15 (longer than almost all viewports)
    const [currentDisplayedImages, setCurrentDisplayedImages] = useState(imageArray.slice(0, 12));

    /*
        function to be called when you want to add a new image to the end of the state that contains all current images
        
        first it queries the current length of the current state of the displayed images and determines the index by
        taking the remainder of it after dividing by the length of the full image array. This automatically cyles the index
        back to 0 when you reach the end of the array

        it then sets the state to the previous array with the appended image
    */
    function addNextImageToDisplay()
    {
        setCurrentDisplayedImages(
            previousStateImageArray =>
            {
                const nextIndexFromFullArray = previousStateImageArray.length % imageArray.length;
                return [...previousStateImageArray, imageArray[nextIndexFromFullArray]];
            }

        )
    }

    /*Sets the image display to be all the images except the very first one in the display*/
    function removeFirstImageFromDisplay(){
        setCurrentDisplayedImages(
            previousStateImageArray =>
            {
                return previousStateImageArray.slice(1);
            }
        )
    }

    return(
        <div className="Tech_Images_Display_Box">
        {currentDisplayedImages.map((image, index) => (
            <div className="Tech_Image_Display_Box">            
                <img key={index} src={image} alt={`img-${index}`}  className="Tech_Image"/>
            </div>             
        ))}
      </div>
    )
}