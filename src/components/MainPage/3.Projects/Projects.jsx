import { ListedTechsContainer } from "./ListedTechs/ListedTechsContainer"
import { ProjectFolders } from "./Projects_Folders/ProjectFolders"

export const Projects = () =>
{
    return(
        <div className="Main_Page_Variation" id="Projects">
            <ProjectFolders />
            <ListedTechsContainer />
        </div>
    )
}