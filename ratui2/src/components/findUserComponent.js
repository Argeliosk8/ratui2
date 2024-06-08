import React, {useState, useContext, useEffect} from "react";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { AppContext } from "../context/contextWrapper";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export const FindUserComponent = ({jobUsers, setJobUsers}) => {
    const {getUsers} = useContext(AppContext)
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState();
    const [allUsers, setAllUsers] = useState()

    const fetchUsers = async () => {
        const data = await getUsers()
        let newData = []
        data.forEach(element => {
            newData.push({name: `${element.profile.first_name} ${element.profile.last_name}`, email: element.email})
        });
        setAllUsers(newData)
        //setSuggestions(newData)        
    
    }

    useEffect(()=>{
        fetchUsers()
        // eslint-disable-next-line
    },[])

    const handleChange = (e) => {
        const { value } = e.target;
        setSuggestions(allUsers) 
        setInputValue(value);
        setSuggestions(allUsers.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase())));
      };

 const handleAddClick = (e, suggestion) => {
    e.preventDefault()
    if(jobUsers.includes(suggestion.email)) {
        setJobUsers(jobUsers.filter(jobUser => jobUser !== suggestion.email))
    } else {
        setJobUsers(prev => [suggestion.email, ...prev])
    }
    
 }
    
return(
    <div className="container w-100 h-100">
        <Form.Group className="mb-3" controlId="ControlInput1">
             <Form.Control 
                type='email'
                placeholder="Type users name"
                onChange={(e)=>{handleChange(e)}}
             />
        </Form.Group>
        {
            suggestions ? (
        <Table responsive>
          <thead>
              <th>#</th>
              <th>User</th>
              <th>Eamil</th>
          </thead>
          <tbody >
              { 
                  suggestions.map((suggestion,i)=>(
                      <tr>
                          <td>{i + 1}</td>
                          <td>{suggestion.name}</td>
                          <td >{suggestion.email}</td> 
                          <td><Button variant="outline-secondary"  onClick={(e)=>{handleAddClick(e, suggestion)}} > {jobUsers.includes(suggestion.email) ? "Remove" : "Add" } </Button></td>                         
                      </tr>
                  )) 
              }
          </tbody>
      </Table>
            ) : (
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>
                </div>
            )
        }
        
    </div>
)
}