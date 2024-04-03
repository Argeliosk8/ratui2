import React from "react";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/contextWrapper"
import Card from 'react-bootstrap/Card';


export const ProjectCards = ()=> {
 
  const { getProjects } = useContext(AppContext)
  const [projects, setProjects] = useState([])

  const fetchProjects = async ()=>{
    const data = await getProjects()
    console.log(data)
    setProjects(data)
  }
 
  useEffect(()=>{
    fetchProjects()
// eslint-disable-next-line
  },[])

 
 return (
<div  className="container-fluid w-100 flex-wrap">
  {
    projects ? projects.map((project, i) => (
      <div className="p-2">
        <Card style={{ width: '18rem' }} id={i}>
      <Card.Body>
        <Card.Title>{project.client_name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{project.status}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{project.owner}</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

      </div>
    )) : <div> Loading...</div>
  }
  </div>
 )

}