import React, { useState, createContext } from "react";


export const AppContext = createContext();

export const ContextWrapper = ({children})=> {
     /*Global States*/
    const [name, setName] = useState("Argelio Baca");
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState()
    const [candidates, setCandidates] = useState()
    const uri = process.env.REACT_APP_URI
    /*Global Functions*/
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
            setIsLoggedIn(true)
            setUser(data.user)
            return `Login validated for user: ${data.user.profile.first_name}`
        } catch (error) {
            console.log(error)
        }
    }

    const logout = ()=>{
        try {
            localStorage.removeItem("jwt-token")
            localStorage.removeItem("username")
            localStorage.removeItem("isLoggedIn")
        } catch (error) {
            throw new Error(error)
        }
    }
    

    const signUp = async (newUser) => {
        try {
            const resp = await fetch('http://localhost:5000/signup', {
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
            signUp
            }}>
            {children}
        </AppContext.Provider>
    )   
}