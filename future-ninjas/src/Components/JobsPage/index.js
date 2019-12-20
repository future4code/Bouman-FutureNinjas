import React from 'react';
import Header from './HeaderJobsPage/index'
import JobsDisplay from './JobsDiplay/index'



function JobsPage(props) {
  return (
    <div>
      <Header changeCurrentPage={props.changeCurrentPage}/>
      <JobsDisplay/>
    </div>
  );
}



export default JobsPage;