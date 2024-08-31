import React, { useEffect, useState } from 'react';
import CompanyLogin from './Signin/LoginTOCompant';

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the API call function
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://arbeitnow-free-job-board.p.rapidapi.com/api/job-board-api?visa_sponsorship=', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-rapidapi-ua': 'RapidAPI-Playground',
            'x-rapidapi-key': 'f979f27d13mshbf8be588d81ad29p11e34ejsnf37e5084ea86',
            'x-rapidapi-host': 'arbeitnow-free-job-board.p.rapidapi.com'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data?.data);
        setJobs(data.data);
        
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <CompanyLogin />
  );
};

export default JobBoard;
