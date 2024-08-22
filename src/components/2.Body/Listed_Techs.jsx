import { useState } from 'react';


export const ListedTechs = (props) =>
{
    const imageArray = props.imageArray; //imageArray from parent containing all images of techs you've worked on

    //on first render set images as first 15 (longer than almost all viewports)
    const [currentDisplayedImages, setCurrentDisplayedImages] = useState(imageArray.slice(0, 12));

    /*
        function to be called when you want to add a new image to the end of the state that contains all currently displayed images
        
        checks the url of the last image of the current display against the entire imageArray and if they're equivalent appends the
        next image (if its the last image in the imageArray thats equivalent instead appends the first image)

        it then sets the state to the previous array with the appended image
    */
    function addNextImageToDisplay()
    {
        let nextIndexFromFullArray = 0; //the index of the image we need to pull from the array (0 set as default)

        /*
            checks the last image of the display against all images in the image array, 
            if its equal to the last one sets the next image to pull from the imageArray to be 0, 
            otherwise gets the next image from the image array after the one in the display
        */ 
        for (i = 0; i < imageArray.length; i++)
        {
            if (currentDisplayedImages[currentDisplayedImages.length - 1] == imageArray[i] && i != imageArray.length - 1)//if URL is matched then assign index and break
            {
                if (i != imageArray.length - 1)
                {
                    nextIndexFromFullArray = i + 1;
                }
                else
                {
                    nextIndexFromFullArray = 0;
                }
                break;
            }
        }

        setCurrentDisplayedImages(
            previousStateImageArray =>
            {
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