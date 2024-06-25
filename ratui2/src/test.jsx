
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTdmMzYzYTc1YmZjZmQ4ZDkzMGM0ZjUiLCJlbWFpbCI6InJvZHJpZ29AZ21haWwuY29tIiwicHdkIjoiJDJiJDEwJEpQci9TZTVkWUpnREh6d3Q2dVpLci5acUZNTkVyNVV0Y0JrRlppLlNvSmI0RDlLbXYwYnNLIiwic3RhdHVzIjoiQWN0aXZlIiwicHJvZmlsZSI6eyJmaXJzdF9uYW1lIjoiUm9kcmlnbyIsImxhc3RfbmFtZSI6IkdhdGljYSIsInJvbGUiOiJNYW5hZ2VyIiwicmVxcyI6W10sInJlcG9ydHMiOltdLCJjYW5kaWRhdGVzIjpbIjY1ODA3ZWNmZWRjZmJjMDY3ZWZhNTk0NiIsIjY1ODA4MzJjNGNkZmNkZDYyZWM3NzQwMCIsIjY1ODA4NzBlYWNiNmM0ODg5M2JhNTVhMiJdfSwiaWF0IjoxNzEyMTY2MDEzfQ.Vqo24yKlJ81ddm5CNFbNAbAuJlLn1dNYCiqry9fxEu0'
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
const jobid = '6664b0bb2d8a195dfe96ca7a'

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

//const job_id = "665f52f5a3b040afea2aeebd"

const getJobById = async(job_id) => {
    try {
        const resp = await fetch(`http://localhost:80/job/findonebyid/${job_id}`, {
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

const updatedJob = {
    name:"Software Engineer (Updated)",
    req:"1001",
    creator:"argelio@gmail.com",
    user_id:"657a1445ffa2498a72e993f9",
    project_id:"66560f4eca24eed91345edcb"
    }

    //const job_id = '66560f5eca24eed91345edcc'


    const updateJob = async(job_id, updatedJob) => {
        try {
            const resp = await fetch(`http://localhost:80/job/replacebyid/${job_id}`, {
                method: 'put',
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": token
            },
            body: JSON.stringify(updatedJob)
            })
            const data = await resp.json()
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    }


    const getActivityByJobId = async(jobid) => {
        try {
            const resp = await fetch(`http://localhost:80/activity/find/${jobid}`, {
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
    const findOneActivity = async(query) => {
        try {
            const resp = await fetch(`http://localhost:80/activity/findone`, {
                method: 'POST',
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": token
            },
            body: JSON.stringify(query)
            })
            const data = await resp.json()
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    }
const query = {
    job_id: "6664b0bb2d8a195dfe96ca7a",
    sub_date: "2024-06-22"
}

const newAct = {
    outreach: 3,
    rps: 1,
    submission: 0,
    hm1: 0,
    hm2: 1,
    onsite: 2,
    offer: 1,
    hire: 1,
    date: "2024-06-26"
}



const submiteNewAct = async (newAct, job_id) => {
    try {
        const resp = await fetch(`http://localhost:80/activity/add/${job_id}`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": token 
        },
            body: JSON.stringify(newAct)
        })
        if(!resp.ok) console.log("There was an adding your activity")
        const data = await resp.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

const sendPrompt = async ()=>{
    const result = await fetchOpenAIResponse("tell me the name of the planets")
}

const updatedActivity = {
    "outreach": 100,
    "rps": 100,
    "submission": 100,
    "hm1": 100,
    "hm2": 0,
    "onsite": 0,
    "offer": 0,
    "hire": 1,
    "date": "2024-06-25"
}

const job_id = "66746800a3d988da52609488"

const updateActivity = async(job_id, updatedActivity) => {
    try {
        const resp = await fetch(`http://localhost:80/activity/updateone/${job_id}`, {
            method: 'put',
            headers: { 
                "Content-Type": "application/json",
                "Authorization": token
        },
        body: JSON.stringify(updatedActivity)
        })
        const data = await resp.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

updateActivity(job_id, updatedActivity)

//submiteNewAct(newAct, job_id)
//getActivityByJobId(jobid)
//updateJob(job_id, updatedJob)
//getJobsByProject(project_id)

//getJobById(job_id)

//findOneActivity(query)