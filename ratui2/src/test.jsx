

const uri = "http://localhost:80"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTdmMzYzYTc1YmZjZmQ4ZDkzMGM0ZjUiLCJlbWFpbCI6InJvZHJpZ29AZ21haWwuY29tIiwicHdkIjoiJDJiJDEwJEpQci9TZTVkWUpnREh6d3Q2dVpLci5acUZNTkVyNVV0Y0JrRlppLlNvSmI0RDlLbXYwYnNLIiwic3RhdHVzIjoiQWN0aXZlIiwicHJvZmlsZSI6eyJmaXJzdF9uYW1lIjoiUm9kcmlnbyIsImxhc3RfbmFtZSI6IkdhdGljYSIsInJvbGUiOiJNYW5hZ2VyIiwicmVxcyI6W10sInJlcG9ydHMiOltdLCJjYW5kaWRhdGVzIjpbIjY1ODA3ZWNmZWRjZmJjMDY3ZWZhNTk0NiIsIjY1ODA4MzJjNGNkZmNkZDYyZWM3NzQwMCIsIjY1ODA4NzBlYWNiNmM0ODg5M2JhNTVhMiJdfSwiaWF0IjoxNzEyMDk1NDg3fQ.juoGw2PRZoy_Ze7RFp9MGt8RyCRbaZZhdiHXLw0rywM"

const getJobs = async() => {
    try {
        const resp = await fetch(`${uri}/job/findall`, {
            method: 'GET',
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
        }
        })
        const data = await resp.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}


getJobs()