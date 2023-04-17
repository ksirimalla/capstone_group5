import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

function Dashboard() {
    const userDetails = useSelector(state => state.user);

    useEffect(() => {
    }, [userDetails])
    return (
        <div className="dashboard">
            Dashboard
        </div>
    );
}

export default Dashboard;
