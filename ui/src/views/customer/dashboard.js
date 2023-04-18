import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Axios from "../../utils/axios";
import Card from 'react-bootstrap/Card';

function Dashboard() {
    const { customerId } = useSelector(state => state.user);
    const [customerList, setCustomerList] = useState([]);
    useEffect(() => {
        if (customerId) {
            Axios.get("getCustomerAccounts?id=" + customerId, {}).then(response => {
                if (response.data && response.data.length) {
                    setCustomerList(response.data);
                } else {
                    setCustomerList([]);
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }, [customerId])
    return (
        <div className="full-container">
            <Card style={{ width: '30rem' }} className='p-4'>
                <Card.Title>Account List</Card.Title>
                <Card.Body>
                    {customerList.map(row => (
                        <div className='d-flex justify-content-between' key={row?.accountId}>
                            <div className='d-flex'>
                                <Card.Text>
                                    {row?.name}
                                </Card.Text>
                                <a href={"/customer/accounts/" + row.accountId}> ({row?.accountId})</a>

                            </div>
                            <Card.Text className='title'>
                                {row?.balance} CAD
                            </Card.Text>
                        </div>
                    ))}
                </Card.Body>
            </Card>
        </div>
    );
}

export default Dashboard;
