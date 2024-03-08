import React, { useState } from "react";


export const SubmitCandidate = ()=>{
    const uri = process.env.REACT_APP_URI
    const [file, setFile] = useState(null);
    console.log(uri)
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('resume', file)

        try {
            const response = await fetch(uri + '/candidate/upload', {
                method: 'POST',
                body: formData
            })
            console.log(response)
        } catch (error) {
            console.error("Error uploading file: ", error)
            
        }
    }

    return(
        <div class="container-fluid">
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    )
}