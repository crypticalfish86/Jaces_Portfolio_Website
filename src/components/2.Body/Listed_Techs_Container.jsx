import { ListedTechs } from "./Listed_Techs";

/*Purpose of this component is to get a list of all images once and not need to get them again ever render of ListedTechs*/
export const ListedTechsContainer = () =>
{
        /*Function to return an object that imports all images from a specific folder and map them onto an array as well as the filenames of the files*/
        function importAll(path)
        {
            const images = path.keys().map((item) =>{
                const filename = item.replace('./', '');
                return {
                    image: path(item),//imported image
                    fileName: filename //the filename
                }
            })
            return images
        }
    
        let imageFilesArray = importAll(require.context('../../Assets/Technology_Images', false, /\.(png|jpe?g|svg)$/)) //import all pngs, jpgs, jpegs and svgs from this path
        const imageNames = imageFilesArray.map(image => {return image.fileName}) //get an array of file names
        const imageTitles = imageNames.map(name => {return name.replace(/^\d+|(?<=\.)[^.]*$/g, '')}) //turns those filenames and turn them into their actual titles
        const imageArray = imageFilesArray.map(image => {return image.image}) //get an array of just the images
        return(
            <div>
                <ListedTechs imageArray= {imageArray} imageTitles={imageTitles} />
            </div>
        )
}