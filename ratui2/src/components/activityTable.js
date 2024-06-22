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
            <th key={index}>{act.date}</th>  
        )) : <></>}
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>Outreach</td>
              {activity ? activity.map((act, index)=>(
            <th key={index}>{act.outreach}</th>  
        )) : <></>}
        </tr>
        <tr>
          <td>RPS</td>
              {activity ? activity.map((act, index)=>(
            <th key={index}>{act.rps}</th>  
        )) : <></>}
        </tr>
        <tr>
          <td>Submission</td>
              {activity ? activity.map((act, index)=>(
            <th key={index}>{act.submission}</th>  
        )) : <></>}
        </tr>
        <tr>
          <td>HM1</td>
              {activity ? activity.map((act, index)=>(
            <th key={index}>{act.hm1}</th>  
        )) : <></>}
        </tr>
        <tr>
          <td>HM2</td>
              {activity ? activity.map((act, index)=>(
            <th key={index}>{act.hm2}</th>  
        )) : <></>}
        </tr>
        <tr>
          <td>Onsite</td>
              {activity ? activity.map((act, index)=>(
            <th key={index}>{act.onsite}</th>  
        )) : <></>}
        </tr>
        <tr>
          <td>Offer</td>
              {activity ? activity.map((act, index)=>(
            <th key={index}>{act.offer}</th>  
        )) : <></>}
        </tr>
        <tr>
          <td>Hire</td>
              {activity ? activity.map((act, index)=>(
            <th key={index}>{act.hire}</th>  
        )) : <></>}
        </tr>
        
        </tbody>
    </Table>
  );
}

export default ActivityTable;

