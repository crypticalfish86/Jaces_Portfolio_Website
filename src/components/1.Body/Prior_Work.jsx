import { useEffect, useState } from "react";

export const PriorJobs = () =>
{


    /*
        This Entire function takes a path to a parent folder and returns an array of "work objects"
        
        It creates the work object assuming the folder contains subfolders which:
        1.Are named in a numerical sorting pattern e.g.(10NorthcodersBackEnd, 11NorthcodersFrontEnd)
        2.Each subfolder contains a singular .txt file containing the description and the rest of the files in the subfolder are image files

        Each individual work object looks like this:

        {txtDescription : "Description.txt", images : ["image", "image", "image", ...]}

        This is to be used to place on the html of the prior work line section
    */
    function importAllWorkObjects(path)
    {
        let allFilesInAllFoldersAtSource = path.keys(); //get all items in the parent folder
        let sortedFilesInAllFoldersAtSource = allFilesInAllFoldersAtSource.sort();
        

        /*
            starts the process of turning the array of raw files into work objects by sorting them into their own nested arrays based on their numerical code (assumes code is an int from 10-99 starting after "./"
        */
        const arrayOfUnprocessedWorkObjectArrays = [];
        let i = 0;
        while (i < sortedFilesInAllFoldersAtSource.length)
        {
            const singleArrayOfPendingWorkObject = []
            const currentWorkObjectNumericalCode = sortedFilesInAllFoldersAtSource[i].slice(2,4); //This will isolate the numerical code (assumes the code is an int from 10-99 starting after "./")
            //while there are still files that abide by the current numerical code, it will continue pushing files to the current nested array
            while (i <sortedFilesInAllFoldersAtSource.length && sortedFilesInAllFoldersAtSource[i].slice(2,4) === currentWorkObjectNumericalCode)
            {
                singleArrayOfPendingWorkObject.push(sortedFilesInAllFoldersAtSource[i]);
                i++;
            }

            arrayOfUnprocessedWorkObjectArrays.push(singleArrayOfPendingWorkObject); //once the nested array has been filled until there isnt anymore of that numerical code it will push that array onto the main array
        }
        //object at this point should look like [[file, file, file, ...], [file, file file, ...], ...]


        /*
            In this block of code we finally make the array of workObjects by taking each nested array and converting them into an object that looks like this:
            {txtDescription : ".txtfileURL", images: ["image1", "image2", "image3", ...]}
        */
        const arrayOfWorkObjects = [];
        for (let i = 0; i < arrayOfUnprocessedWorkObjectArrays.length; i++)
        {
            let singularWorkObject = {txtDescription : "", images : []};
            for (let j = 0; j < arrayOfUnprocessedWorkObjectArrays[i].length; j++)
            {
                if(arrayOfUnprocessedWorkObjectArrays[i][j].includes(".txt"))
                {
                    singularWorkObject.txtDescription = arrayOfUnprocessedWorkObjectArrays[i][j];
                }
                else
                {
                    singularWorkObject.images.push(arrayOfUnprocessedWorkObjectArrays[i][j])
                }
            }
            arrayOfWorkObjects.push(singularWorkObject);
        }

        return arrayOfWorkObjects;
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