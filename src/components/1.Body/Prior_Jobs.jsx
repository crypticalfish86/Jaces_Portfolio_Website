export const PriorJobs = () =>
{
    const companyName = "Northcoders";
    const jobTitle = "Trainee-FullStack-Developer";
    const date = "FILL LATER (d)";
    const technologiesUsed = "FILL LATER (t)";
    const jobDescription = "FILL LATER (j)";
    function fillJobBoxArray (companyName, jobTitle, date, technologiesUsed, jobDescription)
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

    const job = fillJobBoxArray(companyName, jobTitle, date, technologiesUsed, jobDescription)


    return(
        <div className="All_Prior_Job_Boxes">
            <h1>Prior jobs</h1>
            <div className="Prior_Job_Box">
                <div className="Prior_Job_Header">
                    {job.companyName + " "}
                    {job.jobTitle + " "}
                    {job.date + " "}
                </div>
                <div className="Prior_Job_Description">
                    {job.technologiesUsed + " "}
                    {job.jobDescription}
                </div>
            </div>
        </div>
    )
}