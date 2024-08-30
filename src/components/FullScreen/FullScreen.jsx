import { MainTerminal } from "./MainTerminal/MainTerminal";
import { SidePage } from "./SidePage/SidePage";
import { ListedTechsContainer } from "./ListedTechs/ListedTechsContainer";

export const FullScreen = () =>
{
    return(
        <div>
            <MainTerminal />
            <SidePage />
            <ListedTechsContainer />
        </div>
    )
}