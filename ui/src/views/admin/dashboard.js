import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Axios from "../../utils/axios";

function Dashboard() {
    const userDetails = useSelector(state => state.user);
    const [dashboardData, setDashboardData] = useState({});
    useEffect(() => {
        Axios.get("getAdminDashboard").then(response => {
            if (response.data && response.data) {
                setDashboardData(response.data);
            } else {
                setDashboardData({});
            }
        }).catch(err => {
            console.log(err);
        })

    }, [userDetails])
    return (
        <div className="dashboard">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Total Customer's</Card.Title>
                    <Card.Text className='dashboard-title'>
                        {dashboardData?.customers}
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Total Account's</Card.Title>
                    <Card.Text className='dashboard-title'>
                        {dashboardData?.accountCount}
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Total Account Type's</Card.Title>
                    <Card.Text className='dashboard-title'>
                        {dashboardData?.accountTypeCount}
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Today Total Transaction's</Card.Title>
                    <Card.Text className='dashboard-title'>
                        {dashboardData?.transactionsCount}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Dashboard;
