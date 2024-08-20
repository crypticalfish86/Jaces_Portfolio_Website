import { ListedTechs } from "./Listed_Techs"
import { PriorJobs } from './Prior_Jobs'

export const Body = () =>
{

    return(
        <div className='Body'>
            The Body of the page
            <div className="Body_Introduction_Information">
                <div className="Personal_Introduction Information_Box">Hello my name is jace(information)</div>
                <div className="Tips Information_Box">Tips on website navigation/table of contents</div>
            </div>
            <ListedTechs />
            <PriorJobs />
            <div>Previous Projects</div>
        </div>
    )
}