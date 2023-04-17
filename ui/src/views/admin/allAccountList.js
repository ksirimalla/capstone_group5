import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Axios from "../../utils/axios";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function AllAccountsList() {
    const [accountTypeList, setAccountTypeList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        Axios.get("getAllCustomerAccounts").then(response => {
            if (response.data && response.data.length) {
                setAccountTypeList(response.data);
            } else {
                setAccountTypeList([]);
            }
        }).catch(err => {
            console.log(err);
        })
    }, [])

    function handleView(row){
        navigate(`/admin/accounts/view/${row.accountId}`)
    }
    return (
        <div className="full-container">
            <h3>Customer Account's List </h3>
            <Card>
                <Card.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>S No.</th>
                                <th>Account Id</th>
                                <th>Customer Name</th>
                                <th>Account Type</th>
                                <th>Balance</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accountTypeList.map((row, index) => {
                                return <tr key={row.accountId}>
                                    <td>{index + 1}</td>
                                    <td>{row.accountId}</td>
                                    <td>{row.firstName + " " + row.lastName}</td>
                                    <td>{row.name}</td>
                                    <td>{row.balance}</td>
                                    <td><Button variant="primary" onClick={()=>handleView(row)}>View</Button></td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

        </div>
    );
}

export default AllAccountsList;
