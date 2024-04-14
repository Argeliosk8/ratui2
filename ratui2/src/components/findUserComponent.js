import React, {useState, useContext, useEffect} from "react";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { AppContext } from "../context/contextWrapper";
import Button from 'react-bootstrap/Button';

export const FindUserComponent = ({setCollaborators}) => {
    const {getUsers} = useContext(AppContext)
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState();
    const [users, setUsers] = useState()

    const fetchUsers = async () => {
        const data = await getUsers()
        let newData = []
        data.forEach(element => {
            newData.push({name: `${element.profile.first_name} ${element.profile.last_name}`, email: element.email})
        });
        setUsers(newData)
        setSuggestions(newData)        
    
    }

    useEffect(()=>{
        fetchUsers()
    },[])

    const handleChange = (e) => {
        const { value } = e.target;
        setInputValue(value);
        setSuggestions(users.filter(item => item.name.toLowerCase().includes(value.toLowerCase())));
      };

 const handleAddClick = (e, suggestion) => {
    e.preventDefault()
    setCollaborators(prev => [suggestion.email, ...prev])
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
        <Table responsive>
          <thead>
              <th>#</th>
              <th>User</th>
              <th>Eamil</th>
          </thead>
          <tbody>
              { suggestions ? 
                  suggestions.map((suggestion,i)=>(
                      <tr>
                          <td>{i + 1}</td>
                          <td>{suggestion.name}</td>
                          <td >{suggestion.email}</td> 
                          <td onClick={(e)=>{handleAddClick(e, suggestion)}}><Button>Add</Button></td>                         
                      </tr>
                  )) : <h3>Loading...</h3>
              }
          </tbody>
      </Table>
    </div>
)
}