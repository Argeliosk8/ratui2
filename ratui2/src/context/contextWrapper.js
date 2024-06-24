import React, { useState, createContext } from "react";


export const AppContext = createContext();

export const ContextWrapper = ({children})=> {
     /*Global States*/
    const [name, setName] = useState("Argelio Baca");
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState()
    const [candidates] = useState()
    const [projects, setProjects] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('jwt-token'));
    const [jobs, setJobs] = useState([])
    const [showToast, setShowToast] = useState(false);
    const[collaborators, setCollaborators] = useState([])
    const [activity, setActivity] = useState(null)
    
    const uri = process.env.REACT_APP_URI
    /*Global Functions*/
    const toggleShowToast = () => setShowToast(!showToast);

    const changeName = (newName)=>{
        if(name === "Argelio Baca"){
            setName(newName)
        } else {
            setName("Argelio Baca")
        }
    }

    const login = async (username, password) => {
        try {
            const res = await fetch(`${uri}/user/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: username, password: password})
            })
            if(!res.ok) throw Error("There was a problem with your login request")
            const data = await res.json()
            localStorage.setItem("jwt-token", data.token)
            localStorage.setItem("username", data.user.profile.first_name)
            localStorage.setItem("isLoggedIn", true)
            localStorage.setItem("email", data.user.email)
            setIsLoggedIn(true)
            setUser(data.user)
            setToken(data.token)
            return `Login validated for user: ${data.user.profile.first_name}`
        } catch (error) {
            console.log(error)
        }
    }

    const signUp2 = async (newUser) => {
        try {
            const res = await fetch(`${uri}/user/signup`,{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newUser)
            })
            if(!res.ok) throw Error("There was a problem with your signup request")
            return 'Successful signup!'
        } catch (error) {
            console.log(error)
        }
    }

    const logout = ()=>{
        try {
            localStorage.removeItem("jwt-token")
            localStorage.removeItem("username")
            localStorage.removeItem("isLoggedIn")
            localStorage.removeItem("email")
            setToken(null)
        } catch (error) {
            throw new Error(error)
        }
    }
    

    const signUp = async (newUser) => {
        try {
            const resp = await fetch(`${uri}/user/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser)
            })
            if(!resp.ok) throw new Error("There was an error signing up")
            const data = await resp.json()
            console.log(data)
            return data
        } catch (error) {
            throw new Error(error)
        }
    }

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
    const getSingleProject = async(projectid) => {
        console.log(projectid)
        const body = {id: projectid}
        try {
            const resp = await fetch(`${uri}/project/findone`, {
                method: 'POST',
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
            },
                body: JSON.stringify(body)
            })
            const data = await resp.json()
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    const createProject = async (newProject) => {
        try {
            const resp = await fetch(`${uri}/project/addone`, {
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


    const getProjects = async() => {
        try {
            const resp = await fetch(`${uri}/project/findall`, {
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


    const updateProject = async(updatedProject, projectId)=>{
        try {
            const result = await fetch(`${uri}/project/replaceone/${projectId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(updatedProject)
            })
            return result
        } catch (error) {
            console.log(error)
        }
    }

    const getUsers = async() => {
        try {
            const resp = await fetch(`${uri}/user/all`, {
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


    const getJobsByProject = async(project_id) => {
        try {
            const resp = await fetch(`${uri}/job/findbyprojectid/${project_id}`, {
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

    const getJobById = async(job_id) => {
        try {
            const resp = await fetch(`${uri}/job/findonebyid/${job_id}`, {
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


    const updateJob = async(job_id, updatedJob) => {
        try {
            const resp = await fetch(`${uri}/job/updateone/${job_id}`, {
                method: 'put',
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(updatedJob)
            })
            const data = await resp.json()
            console.log(data)
            return resp
        } catch (error) {
            console.log(error)
        }
    }

    const getActivityByJobId = async(jobid) => {
        try {
            const resp = await fetch(`${uri}/activity/find/${jobid}`, {
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

    const findOneActivity = async(query) => {
        try {
            const resp = await fetch(`${uri}/activity/findone`, {
                method: 'POST',
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
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

    const submiteNewAct = async (newAct, job_id) => {
        try {
            const resp = await fetch(`${uri}/activity/add/${job_id}`, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` 
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
    
    return (
        
        <AppContext.Provider value={{
            name, 
            changeName,
            isLoggedIn,
            setIsLoggedIn,
            login,
            user,
            candidates,
            logout,
            signUp,
            token,
            signUp2,
            getJobs,
            createProject,
            getProjects,
            projects, 
            setProjects,
            jobs,
            setJobs,
            activity,
            setActivity,
            showToast,
            toggleShowToast,
            getSingleProject,
            updateProject,
            getUsers,
            collaborators,
            setCollaborators,
            getJobsByProject,
            getJobById,
            updateJob,
            getActivityByJobId,
            findOneActivity,
            submiteNewAct
            }}>
            {children}
        </AppContext.Provider>
    )   
}