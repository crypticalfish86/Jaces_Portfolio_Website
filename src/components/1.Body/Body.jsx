import { ListedTechsContainer } from "./Listed_Techs_Container"
import { PriorJobs } from './Prior_Jobs'

export const Body = () =>
{

    return(
        <div className='Body'>
            <div className="Body_Introduction_Information">
                <div className="Personal_Introduction Information_Box">
                    <div className="Inner_Introduction_Information_Box">
                        <h1 className="Information_Text">Hi, My name is Jace Weerawardena</h1>
                        <h2 className="Information_Text">I am an aspiring software engineer</h2>
                        <h3 className="Information_Text">Welcome to my portfolio website</h3>
                  </div>
                  <div className="Inner_Introduction_Information_Box Used_Techs">
                        <h3 className="Information_Text">Technologies that I use:</h3>
                  </div>
                </div>
                <div className="Tips Information_Box">
                    <h1>Title</h1>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies venenatis viverra. Suspendisse ac auctor dui. Pellentesque ullamcorper dolor a rutrum tincidunt. Sed porttitor ligula a magna pretium varius. Phasellus suscipit aliquet lorem, ac efficitur neque eleifend vitae. Morbi tempor eros lacus. Ut scelerisque euismod arcu, nec venenatis lectus bibendum et. Vestibulum vehicula eros a congue egestas.

                    Quisque tellus turpis, convallis ut varius ut, rutrum fermentum massa. Ut eget ante et velit volutpat gravida nec feugiat erat. Cras scelerisque, tellus vitae elementum dictum, velit enim viverra dui, id malesuada dolor ex in risus. Nunc euismod libero in turpis congue commodo.  
                </div>
            </div>
            <ListedTechsContainer />
            <PriorJobs />
            <div>Previous Projects</div>
        </div>
    )
}