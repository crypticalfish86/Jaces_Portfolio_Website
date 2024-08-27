import { useEffect, useState } from "react";

export const PriorJobs = () =>
{
    /*These are just test values that should be deleted once entire thing is set up*/
    const companyName = "TEST (c)";
    const jobTitle = "TEST (jt)";
    const date = "TEST (d)";
    const technologiesUsed = "TEST (t)";
    const jobDescription = "TEST (jd)";

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

    /*Just a test job and job array for skeleton*/
    const testJob = fillJobObject(companyName, jobTitle, date, technologiesUsed, jobDescription)
    const testJobArray = [testJob]

    /*useState to keep track of all the job objects in an array (also useEffect to fill it with test data currently)*/
    const [currentJobArray, setCurrentJobArray] = useState([]);
    useEffect(() => {setCurrentJobArray(testJobArray)}, testJobArray)

    /*An array for html that is to be filled up with jobs to render in this component*/
    const [currentJobDivs, setCurrentJobDivs] = useState([<div>teststate</div>])

    /*Takes All the jobObjects from the jobArray and fills the currentJobDivs state with formatted html containing all information about that job*/
    function renderJobComponents(jobArray){
        const newJobDivArray = []
        jobArray.forEach(
            job => 
                {
                    newJobDivArray.push(
                        <div>
                            <div>{job.companyName}</div>
                            <div>{job.jobTitle}</div>
                            <div>{job.date}</div>
                            <div>{job.technologiesUsed}</div>
                            <div>{job.jobDescription}</div>
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
            <h1>Prior Work</h1>
            <span className="Progress_Line">
                <span>
                    {currentJobDivs}
                </span>
            </span>
        </div>
    )
}