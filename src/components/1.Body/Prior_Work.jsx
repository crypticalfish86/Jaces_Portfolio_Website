import { useEffect, useState } from "react";

export const PriorJobs = () =>
{
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

    /*Just a test job and job array for skeleton*/
    const testJob1 = fillJobObject(companyName1, jobTitle1, date1, technologiesUsed1, jobDescription1)
    const testJob2 = fillJobObject(companyName2, jobTitle2, date2, technologiesUsed2, jobDescription2)
    const testJob3 = fillJobObject(companyName3, jobTitle3, date3, technologiesUsed3, jobDescription3)
    const testJobArray = [testJob1, testJob2, testJob3]

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