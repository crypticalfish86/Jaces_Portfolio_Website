import { useEffect, useMemo, useState } from "react";

export const ProjectScreen = () =>
{
    /*
        FUNCTION TO PASS DOWN TO PROJECT SCREEN
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
            let allFilesInAllFoldersAtSource = path.keys() //get all items in the parent folder
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

        //Use memo used to prevent the useEffect infinitley rerendering (this function creates the work objects array)
        const workObjects = useMemo( () =>
            {
                return importAllWorkObjects(require.context('../../../../Assets/All_Prior_Work'))
            }, []
        )

        //Hook to update the workObjects array everytime something gets added in the files it accesses
        const [currentWorkObjects, setWorkObjects] = useState([])

        useEffect(() => {setWorkObjects(workObjects)}, [workObjects])


        //Hook to pass the work objects into as html
        const [currentWorkObjectHTML, setWorkObjectHTML] = useState(<div>Project Screen: Empty projects</div>)
        
        //This function turns each individual workObject into HTML to display at your wishes
        function renderWorkObjectHTML(workObjectArray)
        {
            const newWorkObjectHTMLArray = [];
            workObjectArray.forEach( (workObject) =>
                {
                    newWorkObjectHTMLArray.push(
                        <div>Project</div>
                    )
                }   
            )
            setWorkObjectHTML(newWorkObjectHTMLArray)
        }
        //Updates the html everytime a new project gets added
        useEffect(() => {renderWorkObjectHTML(currentWorkObjects)}, [currentWorkObjects])

    return(
        <div>{currentWorkObjectHTML}</div>
    )
}