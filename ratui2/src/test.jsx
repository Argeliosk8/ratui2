
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTdmMzYzYTc1YmZjZmQ4ZDkzMGM0ZjUiLCJlbWFpbCI6InJvZHJpZ29AZ21haWwuY29tIiwicHdkIjoiJDJiJDEwJEpQci9TZTVkWUpnREh6d3Q2dVpLci5acUZNTkVyNVV0Y0JrRlppLlNvSmI0RDlLbXYwYnNLIiwic3RhdHVzIjoiQWN0aXZlIiwicHJvZmlsZSI6eyJmaXJzdF9uYW1lIjoiUm9kcmlnbyIsImxhc3RfbmFtZSI6IkdhdGljYSIsInJvbGUiOiJNYW5hZ2VyIiwicmVxcyI6W10sInJlcG9ydHMiOltdLCJjYW5kaWRhdGVzIjpbIjY1ODA3ZWNmZWRjZmJjMDY3ZWZhNTk0NiIsIjY1ODA4MzJjNGNkZmNkZDYyZWM3NzQwMCIsIjY1ODA4NzBlYWNiNmM0ODg5M2JhNTVhMiJdfSwiaWF0IjoxNzEyMDk1NDg3fQ.juoGw2PRZoy_Ze7RFp9MGt8RyCRbaZZhdiHXLw0rywM'
const createProject = async (newProject) => {
    try {
        const resp = await fetch(`http://localhost:80/project/addone`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": token 
        },
            body: JSON.stringify(newProject)
        })
        if(!resp.ok) console.log("There was an error creating your project")
        const data = await resp.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

const project_id = '66560f8dca24eed91345edce'

const getJobsByProject = async(project_id) => {
    try {
        const resp = await fetch(`http://localhost:80/job/findbyprojectid/${project_id}`, {
            method: 'GET',
            headers: { 
                "Content-Type": "application/json",
                "Authorization": token
        }
        })
        const data = await resp.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

getJobsByProject(project_id)