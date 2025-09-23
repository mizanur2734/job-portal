import React, { use } from "react";
import JobApplicationsRow from "./JobApplicationsRow";

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);
  return (
    <div>
      <h3>Jobs Applied so far: {applications.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  No
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           {
            applications.map((application, index) => <JobApplicationsRow 
                index={index}
                key={application._id}
                application={application}
            ></JobApplicationsRow>)
           }
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
