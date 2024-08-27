import { ListedTechsContainer } from "./Listed_Techs_Container"
import { PriorJobs as PriorWork } from './Prior_Work'

export const Body = () =>
{

    return(
        <div className='Body'>
            <div className="Body_Introduction_Information">
                <div className="Personal_Introduction Information_Box">
                    <div className="Inner_Information_Box">
                        <h1 className="Information_Text">Hello, My name is Jace Weerawardena</h1>
                        <h2 className="Information_Text">I am an aspiring software engineer</h2>
                        <h3 className="Information_Text">Welcome to my portfolio website</h3>
                  </div>
                  <div className="Inner_Information_Box Used_Techs">
                        <h3 className="Information_Text">Technologies that I use:</h3>
                  </div>
                </div>
                <div className="Tips_Information_Box">
                    <div className="Inner_Information_Box">
                        <h1>Here are some tips:</h1>
                        <div className="Bullet_Point">🔍 bullet point 1</div>
                        <div className="Bullet_Point">👨‍💻 bullet point 2</div>
                        <div className="Bullet_Point">🔗 bullet point 3</div>
                        <div className="Bullet_Point">🌎 bullet point 4</div>
                        <div className="Bullet_Point">💠 bullet point 5</div>
                    </div>
                </div>
            </div>
            <ListedTechsContainer />
            <PriorWork />
            <div>Previous Projects</div>
        </div>
    )
}