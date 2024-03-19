import React, { useState } from "react";

 const SubmitCandidate = ()=>{
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
                <div class="mb-3">
                    <label for="formFile" class="form-label" type="file" onChange={handleFileChange}>Upload Resume</label>
                    <input class="form-control" type="file" id="formFile"/>
                </div>
                <div class="mb-3 row">
                    <label for="firstName" class="col-sm-2 col-form-label">First Name</label>
                    <div class="col-sm-10">
                        <input type="text" onChange={(e)=>{setFirstName(e.target.value)}} class="form-control" id="firstName" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="lastName" class="col-sm-2 col-form-label">Last Name</label>
                    <div class="col-sm-10">
                        <input type="text"  onChange={(e)=>{setLastName(e.target.value)}} class="form-control" id="lastName" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="Email" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="Email"  onChange={(e)=>{setEmail(e.target.value)}} class="form-control" id="Email" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="Phone" class="col-sm-2 col-form-label">Phone</label>
                    <div class="col-sm-10">
                        <input type="Phone"  onChange={(e)=>{setPhone(e.target.value)}} class="form-control" id="Phone" />
                    </div>
                </div>
                <button type="submit" class="btn btn-outline-success">Success</button>
            </form>
        </div>
    )
}


export default SubmitCandidate;