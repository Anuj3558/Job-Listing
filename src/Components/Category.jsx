import React from 'react'
import FindJobs from './Home/FindJobs'
import Banner from './Home/ui/Banner';

const Category = () => {
  return (
    <>
      <Banner page="Category" />
      <div className="mb-7">
        <FindJobs />
      </div>
    </>
  );
}

export default Category