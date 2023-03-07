import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Axios from "../../utils/axios";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CustomerAccountsList() {
    const [customerList, setCustomerList] = useState([]);
    const navigate = useNavigate();
    const { customerId } = useSelector(state => state.user);

    useEffect(() => {
        if (customerId)
            Axios.get("getCustomerAccounts?id=" + customerId, {}).then(response => {
                if (response.data && response.data.length) {
                    setCustomerList(response.data);
                } else {
                    setCustomerList([]);
                }
            }).catch(err => {
                console.log(err);
            })
    }, [customerId])

    function handleView(row) {
        // navigate(`/admin/customer/view/${row.customerId}`)
    }
    return (
        <div className="full-container">
            <h3>Account List </h3>
            <Card>
                <Card.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>S No.</th>
                                <th>Account Id</th>
                                <th>Account Type</th>
                                <th>Balance</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customerList.map((row, index) => {
                                return <tr key={row.accountId}>
                                    <td>{index + 1}</td>
                                    <td>{row.accountId}</td>
                                    <td>{row.name}</td>
                                    <td>{row.balance}</td>
                                    <td><Button variant="primary" onClick={() => handleView(row)} disabled>View</Button></td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

        </div>
    );
}

export default CustomerAccountsList;
