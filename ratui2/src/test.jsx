const newProject = {
    "client_name": "Ribbon",
    "job_ids": [],
    "status": "open",
    "collaborators": []
}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTdmMzYzYTc1YmZjZmQ4ZDkzMGM0ZjUiLCJlbWFpbCI6InJvZHJpZ29AZ21haWwuY29tIiwicHdkIjoiJDJiJDEwJEpQci9TZTVkWUpnREh6d3Q2dVpLci5acUZNTkVyNVV0Y0JrRlppLlNvSmI0RDlLbXYwYnNLIiwic3RhdHVzIjoiQWN0aXZlIiwicHJvZmlsZSI6eyJmaXJzdF9uYW1lIjoiUm9kcmlnbyIsImxhc3RfbmFtZSI6IkdhdGljYSIsInJvbGUiOiJNYW5hZ2VyIiwicmVxcyI6W10sInJlcG9ydHMiOltdLCJjYW5kaWRhdGVzIjpbIjY1ODA3ZWNmZWRjZmJjMDY3ZWZhNTk0NiIsIjY1ODA4MzJjNGNkZmNkZDYyZWM3NzQwMCIsIjY1ODA4NzBlYWNiNmM0ODg5M2JhNTVhMiJdfSwiaWF0IjoxNzEyMTY2MDEzfQ.Vqo24yKlJ81ddm5CNFbNAbAuJlLn1dNYCiqry9fxEu0"
const createProject = async (newProject) => {
    try {
        const resp = await fetch(`http://localhost:80/project/addone`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
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

createProject(newProject)