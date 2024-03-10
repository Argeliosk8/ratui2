import React, { useState } from "react";


export const SubmitCandidate = ()=>{
    const uri = process.env.REACT_APP_URI
    const [file, setFile] = useState(null);
    const [first_name, setFirstName] = useState(null)
    const [last_name, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('resume', file)

        try {
            const response1 = await fetch(uri + '/candidate/upload', {
                method: 'POST',
                body: formData
            })

            const data1 = await response1.json()
            const publicUrl = await data1.url
            console.log(publicUrl)


            const newCandidate = {
                first_name: first_name,
                last_name: last_name,
                email: email,
                phone: phone,
                resume: publicUrl,
                sub_date: new Date().toLocaleString()
              }

            console.log(newCandidate)
            const response2 = await fetch(uri + '/candidate/submit', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newCandidate)
            })

            const data2 = await response2.json()
            console.log(data2)

        } catch (error) {
            console.error("Error uploading file: ", error)
            
        }
    }

    return(
        <div class="container-fluid">
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} /> <br></br>
                <label>First Name</label>
                <input type="text" onChange={(e)=>{setFirstName(e.target.value)}} /><br></br>
                <label>Last Name</label>
                <input type="text" onChange={(e)=>{setLastName(e.target.value)}} /><br></br>
                <label>Email</label>
                <input type="text" onChange={(e)=>{setEmail(e.target.value)}} /><br></br>
                <label>Phone</label>
                <input type="text" onChange={(e)=>{setPhone(e.target.value)}} /><br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}