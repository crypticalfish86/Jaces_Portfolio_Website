import { useEffect, useState } from "react";

export const PriorJobs = () =>
{


    /*
        This Entire function takes a path to a parent folder and returns an array of "work objects"
        
        It creates the work object assuming the folder contains subfolders which:
        1.Are named in a numerical sorting pattern e.g.(10NorthcodersBackEnd, 11NorthcodersFrontEnd)
        2.Each subfolder contains 5 files, 1 .txt file containing the description and 4 .pngs

        Each individual work object looks like this:

        {description : "Description.txt", image1 : "imgURL.png", image2 : "imgURL.png", image3 : "imgURL.png", image4 : "imgURL.png",}

        This is to be used to place on the html of the prior work line section
    */
    function importAllWorkObjects(path)
    {
        let allFilesInAllFoldersAtSource = path.keys() //get all items in the parent folder
        console.log(allFilesInAllFoldersAtSource)
        
        let arrayOfWorkObjectsSize = allFilesInAllFoldersAtSource.length / 5; //gets the size of the array to create (assumes the fact that each work object consists of 1 .txt and 4 .pngs)

        const arrayOfUnprocessedWorkObjects = [];

        //pushes every 5 objects in "allFilesInAllFoldersAtSource" into their own array giving an array of the unprocessed workobject 
        for (let i = 0; i < arrayOfWorkObjectsSize; i++)
        {
            arrayOfUnprocessedWorkObjects.push(allFilesInAllFoldersAtSource.slice(i * 5, (i * 5) + 5))
        }

        const arrayOfWorkObjects = arrayOfUnprocessedWorkObjects.map( (arrayOfWorkObjectFiles) =>
        {
            let workObjectDescriptionFile;
            let arrayOfWorkObjectPngs = [];
            for (let i = 0; i < arrayOfWorkObjectFiles.length; i++)
            {
                if(arrayOfWorkObjectFiles[i].includes('.txt'))
                {
                    workObjectDescriptionFile = arrayOfWorkObjectFiles[i];
                }
                else
                {
                    arrayOfWorkObjectPngs.push(arrayOfWorkObjectFiles[i])
                }
            }

            const processedWorkObject = 
            {
                description : workObjectDescriptionFile,
                image1 : arrayOfWorkObjectPngs[0],
                image2 : arrayOfWorkObjectPngs[1],
                image3 : arrayOfWorkObjectPngs[2],
                image4 : arrayOfWorkObjectPngs[3]
            }

            return processedWorkObject
        }

        )

        return arrayOfWorkObjects
    }

    const workObjects = importAllWorkObjects(require.context('../../Assets/All_Prior_Work')); //DELETE THIS COMMENT WHEN PIECE OF CODE IS ENTIRLY SET UP, up to here the code is finished


    //let workObjects = importAllWorkObjects(require.context('../../Assets/All_Prior_Work'))
    /*These are just test values that should be deleted once entire thing is set up*/
    const companyName1 = "TEST1 (c)";
    const jobTitle1 = "TEST1 (jt)";
    const date1 = "TEST1 (d)";
    const technologiesUsed1 = "TEST1 (t)";
    const jobDescription1 = "TEST1 (jd)";

    const companyName2 = "TEST2 (c)";
    const jobTitle2 = "TEST2 (jt)";
    const date2 = "TEST2 (d)";
    const technologiesUsed2 = "TEST2 (t)";
    const jobDescription2 = "TEST2 (jd)";

    const companyName3 = "TEST3 (c)";
    const jobTitle3 = "TEST3 (jt)";
    const date3 = "TEST3 (d)";
    const technologiesUsed3 = "TEST3 (t)";
    const jobDescription3 = "TEST3 (jd)";

    /*(This function will change when skeleton is finished) returns a job object after passing in parameters*/
    function fillJobObject (companyName, jobTitle, date, technologiesUsed, jobDescription)
    {
        const job = 
            {
                companyName : companyName,
                jobTitle : jobTitle,
                date : date,
                technologiesUsed : technologiesUsed,
                jobDescription : jobDescription
            };
        
        return job;
    }

    /*useState to keep track of all the job objects in an array (also useEffect to fill it with test data currently)*/
    const [currentJobArray, setCurrentJobArray] = useState([]);
    
    useEffect(() => 
        {
            /*Just a test job and job array for skeleton*/
            const testJob1 = fillJobObject(companyName1, jobTitle1, date1, technologiesUsed1, jobDescription1)
            const testJob2 = fillJobObject(companyName2, jobTitle2, date2, technologiesUsed2, jobDescription2)
            const testJob3 = fillJobObject(companyName3, jobTitle3, date3, technologiesUsed3, jobDescription3)
            
            const testJobArray = [testJob1, testJob2, testJob3]
            setCurrentJobArray(testJobArray)
        }
    , companyName3 /*This will change once you fill with actual data*/)

    /*An array for html that is to be filled up with jobs to render in this component*/
    const [currentJobDivs, setCurrentJobDivs] = useState([<div>teststate</div>])

    /*Takes All the jobObjects from the jobArray and fills the currentJobDivs state with formatted html containing all information about that job*/
    function renderJobComponents(jobArray){
        const newJobDivArray = []
        jobArray.forEach(
            job => 
                {
                    newJobDivArray.push(
                        <div className="Entire_Job_Div">
                            <div className="Date_Circle">{job.date}</div>
                            <div className="Line">
                                <div className="Rectangle Left_Rectangle_Info"> {job.companyName}, {job.jobTitle}</div>
                                <div className="Rectangle Right_Rectangle_Info">{job.technologiesUsed}, {job.jobDescription}</div>
                            </div>
                        </div>
                    )
                }
        )

        setCurrentJobDivs(newJobDivArray)
    }

    //every time array is updated, update job components
    useEffect(() => {renderJobComponents(currentJobArray)}, currentJobArray)


    return(
        <div className="Entire_Prior_Work_Section">
            <span>
                {currentJobDivs}
            </span>
        </div>
    )
}