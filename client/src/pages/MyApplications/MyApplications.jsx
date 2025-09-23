import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import { myApplicationsPromise } from '../../api/ApplicationsApi';

const MyApplications = () => {
    const {user} = useAuth()
    return (
        <div>
            <ApplicationStats></ApplicationStats>
           <Suspense fallback={'Loading your application'}>
             <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)}>
                
             </ApplicationList>
           </Suspense>
        </div>
    );
};

export default MyApplications;