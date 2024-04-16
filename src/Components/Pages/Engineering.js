import React from 'react'
import jobData from './JobData'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Engineering.css'

const Engineering = () => {

  const engineeringJobs = jobData.filter((job)=> job.Type === "ENG")

  return (
    <div className='EngineeringPage'>
      <h1 className='Name'>Engineering Jobs</h1>
      <ul className='List1'>
        {engineeringJobs.map((job) => (
          <li className='LI' key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.company} </p>
            <p>{job.salary}</p>
            <p>{job.description}</p>
            <p>{job.location}</p>
            <Link to='/Button'>
            <Button variant="primary">APPLY</Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Engineering