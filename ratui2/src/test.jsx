const newProject = {
    "client_name": "Ribbon",
    "job_ids": [],
    "status": "open",
    "collaborators": []
}

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