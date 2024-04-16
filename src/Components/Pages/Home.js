import React from 'react';
import { FormControl, InputGroup,Button,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'
import jobData from './JobData';
import { useState } from 'react' 


const Home = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredJobs = searchTerm
    ? jobData.filter((job) => {
      const { title, company, location } = job;
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      return (
        title.toLowerCase().includes(lowerCaseSearchTerm) ||
        location.toLowerCase().includes(lowerCaseSearchTerm) ||
        company.toLowerCase().includes(lowerCaseSearchTerm)
      );
    })
    : jobData;

  return (
    <div className='Home'>
      <div className='Search'>
        <InputGroup className="mb-3">
          <FormControl className='Bar'
            placeholder="Search..."
            aria-label="Search..."
            aria-describedby="search-button"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </InputGroup>
      </div>
      {filteredJobs.length === 0 ? (
        <h1 className='Notfound'>No matching jobs found.</h1>
      ) : (
        <ul className='List1'>
          {filteredJobs.map((job) => (
            <li className='LI' key={job.id}>
              <h2>{job.title}</h2>
              <p>{job.company} </p>
              <p>{job.salary}</p>
              <p>{job.description}</p>
              <p>{job.location}</p>
              <Link to='/Button'> 
              <Button  variant="primary">APPLY</Button>
              </Link>
            </li>
          ))}
        </ul>
      )}

    </div >
  );
};

export default Home;

