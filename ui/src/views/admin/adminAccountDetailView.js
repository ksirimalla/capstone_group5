import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Axios from "../../utils/axios";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useNavigate, useParams } from 'react-router-dom';

function AdminAccountDetailView() {
    const { id } = useParams();
    const [accountDetails, setAccountDetails] = useState({});
    const [accountTransactions, setAccountTransactions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (id)
            Axios.get("getAccountDetail?id=" + id, {}).then(response => {
                if (response.data && response.data) {
                    setAccountDetails(response.data[0]);
                } else {
                    setAccountDetails({});
                }
            }).catch(err => {
                console.log(err);
            })
            Axios.get("getAccountTransactions?id=" + id, {}).then(response => {
                if (response.data && response.data) {
                    setAccountTransactions(response.data);
                } else {
                    setAccountTransactions({});
                }
            }).catch(err => {
                console.log(err);
            })
    }, [id])

    function handleCancel() {
        navigate(`/admin/accounts`)
    }
    return (
        <div className="full-container">
            <div className='d-flex justify-content-between'>
                <h3>Account Details</h3>
                <div>
                    <Button variant="" onClick={handleCancel}>Cancel</Button>
                </div>
            </div>
            <Card>
                <Card.Body>
                    <Row>
                        <Col>
                            <Form.Label className="mr-1">First Name:</Form.Label>
                            <Form.Text>{accountDetails?.firstName}</Form.Text>
                        </Col>
                        <Col>
                            <Form.Label className="mr-1">Last Name:</Form.Label>
                            <Form.Text>{accountDetails?.lastName}</Form.Text>
                        </Col>
                        <Col>
                            <Form.Label className="mr-1">Customer ID:</Form.Label>
                            <Form.Text>{accountDetails?.customerId}</Form.Text>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label className="mr-1">Phone Number:</Form.Label>
                            <Form.Text>{accountDetails?.phoneNumber}</Form.Text>
                        </Col>
                        <Col>
                            <Form.Label className="mr-1">Email:</Form.Label>
                            <Form.Text>{accountDetails?.email}</Form.Text>
                        </Col>
                        <Col></Col>
                    </Row>

                    <Row></Row>

                    <Row>
                        <Col>
                            <Form.Label className="mr-1">Account Number:</Form.Label>
                            <Form.Text>{accountDetails?.accountId}</Form.Text>
                        </Col>
                        <Col>
                            <Form.Label className="mr-1">Account Type:</Form.Label>
                            <Form.Text>{accountDetails?.name}</Form.Text>
                        </Col>
                        <Col>
                            <Form.Label className="mr-1">Balance:</Form.Label>
                            <Form.Text>{accountDetails?.balance}</Form.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <div className='d-flex justify-content-between mt-5'>
                <h3>Transactions</h3>
            </div>
            <Card>
                <Card.Body>
                <Table responsive>
                        <thead>
                            <tr>
                                <th>S No.</th>
                                <th>Sent To</th>
                                <th>Balance</th>
                                <th>Type</th>
                                <th>Sent Date/Time</th>
                                <th>Comments</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {accountTransactions.map((row, index) => {
                                return <tr key={row.id}>
                                    <td>{index + 1}</td>
                                    <td>{row.firstName + " " + row.lastName + "("+ row.email+")"}</td>
                                    <td>{row.balance}</td>
                                    <td>{row.type}</td>
                                    <td>{new Date(row.createdAt).toLocaleString()}</td>
                                    <td>{row.comments}</td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

        </div>
    );
}

export default AdminAccountDetailView;
