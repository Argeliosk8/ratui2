import Table from 'react-bootstrap/Table';
import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/contextWrapper";

const ActivityTable = ({jobid}) => {
  const { getActivityByJobId } = useContext(AppContext)  
  const [activity, setActivity] = useState(null)

  const fetchActivity = async ()=>{
    const data = await getActivityByJobId(jobid)
    setActivity(data)
    console.log(activity)
  }
 
  useEffect(()=>{
    fetchActivity(jobid)
// eslint-disable-next-line
  },[])
  return (
    <Table responsive>
      <thead>
          <tr>
            <th>#</th>
              {activity ? activity.map((act, index)=>(
            <th key={index}>{act.sub_date}</th>  
        )) : <></>}
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>Outreach</td>
              {activity ? activity.map((act, index)=>(
            <th key={index}>{act.Outreach}</th>  
        )) : <></>}
        </tr>
        <tr>
          <td>RPS</td>
              {activity ? activity.map((act, index)=>(
            <th key={index}>{act.RPS}</th>  
        )) : <></>}
        </tr>
        <tr>
          <td>Submission</td>
              {activity ? activity.map((act, index)=>(
            <th key={index}>{act.Submission}</th>  
        )) : <></>}
        </tr>
        <tr>
          <td>HM1</td>
              {activity ? activity.map((act, index)=>(
            <th key={index}>{act.HM1}</th>  
        )) : <></>}
        </tr>
        <tr>
          <td>HM2</td>
              {activity ? activity.map((act, index)=>(
            <th key={index}>{act.HM2}</th>  
        )) : <></>}
        </tr>
        <tr>
          <td>Onsite</td>
              {activity ? activity.map((act, index)=>(
            <th key={index}>{act.Onsite}</th>  
        )) : <></>}
        </tr>
        <tr>
          <td>Offer</td>
              {activity ? activity.map((act, index)=>(
            <th key={index}>{act.Offer}</th>  
        )) : <></>}
        </tr>
        <tr>
          <td>Hire</td>
              {activity ? activity.map((act, index)=>(
            <th key={index}>{act.Hire}</th>  
        )) : <></>}
        </tr>
        
        </tbody>
    </Table>
  );
}

export default ActivityTable;

