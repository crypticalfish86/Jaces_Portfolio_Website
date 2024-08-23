import { ListedTechs } from "./Listed_Techs";

/*Purpose of this component is to get a list of all images once and not need to get them again ever render of ListedTechs*/
export const ListedTechsContainer = () =>
{
        /*Function to import all images from a specific path and map them onto an array*/
        function importAll(path)
        {
            return path.keys().map(path);
        }
    
        const imageArray = importAll(require.context('../../Assets/Technology_Images', false, /\.(png|jpe?g|svg)$/))
        return(
            <div>
                <ListedTechs imageArray= {imageArray} />
            </div>
        )
}