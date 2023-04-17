import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Axios from "../../utils/axios";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function CustomerList() {
    const [customerList, setCustomerList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        Axios.post("customerList", {}).then(response => {
            if (response.data && response.data.length) {
                setCustomerList(response.data);
            } else {
                setCustomerList([]);
            }
        }).catch(err => {
            console.log(err);
        })
    }, [])

    function handleView(row){
        navigate(`/admin/customer/view/${row.customerId}`)
    }
    return (
        <div className="full-container">
            <h3>Customer List </h3>
            <Card>
                <Card.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>S No.</th>
                                <th>Customer Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>EMail</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customerList.map((row, index) => {
                                return <tr key={row.customerId}>
                                    <td>{index + 1}</td>
                                    <td>{row.customerId}</td>
                                    <td>{row.firstName}</td>
                                    <td>{row.lastName}</td>
                                    <td>{row.email}</td>
                                    <td>{row.phoneNumber}</td>
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

export default CustomerList;
