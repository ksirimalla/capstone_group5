import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Axios from "../../utils/axios";
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function ViewCustomer() {
    const { id } = useParams();
    const [customerDetails, setCustomerDetails] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (id)
            Axios.get("getCustomer?id=" + id, {}).then(response => {
                if (response.data && response.data) {
                    setCustomerDetails(response.data);
                } else {
                    setCustomerDetails({});
                }
            }).catch(err => {
                console.log(err);
                toast.error("Error");
            })
    }, [id])

    function handleEdit() {
        navigate(`/admin/customer/edit/${id}`)
    }

    function handleCancel() {
        navigate(`/admin/customers`)
    }
    return (
        <div className="full-container">
            <div className='d-flex justify-content-between'>
                <h3>Customer Details</h3>
                <div>
                    <Button variant="" onClick={handleCancel}>Cancel</Button>
                    <Button variant="primary" onClick={handleEdit}>Edit</Button>
                </div>
            </div>
            <Card>
                <Card.Body>
                    <Row>
                        <Col>
                            <Form.Label className="mr-1">First Name:</Form.Label>
                            <Form.Text>{customerDetails?.firstName}</Form.Text>
                        </Col>
                        <Col>
                            <Form.Label className="mr-1">Last Name:</Form.Label>
                            <Form.Text>{customerDetails?.lastName}</Form.Text>
                        </Col>
                        <Col>
                            <Form.Label className="mr-1">Customer ID:</Form.Label>
                            <Form.Text>{customerDetails?.customerId}</Form.Text>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label className="mr-1">Date of Birth:</Form.Label>
                            <Form.Text>{customerDetails?.dateOfBirth}</Form.Text>
                        </Col>
                        <Col>
                            <Form.Label className="mr-1">Phone Number:</Form.Label>
                            <Form.Text>{customerDetails?.phoneNumber}</Form.Text>
                        </Col>
                        <Col>
                            <Form.Label className="mr-1">Email:</Form.Label>
                            <Form.Text>{customerDetails?.email}</Form.Text>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label className="mr-1">Address Line1:</Form.Label>
                            <Form.Text>{customerDetails?.addressLine1}</Form.Text>
                        </Col>
                        <Col>
                            <Form.Label className="mr-1">Address Line2:</Form.Label>
                            <Form.Text>{customerDetails?.addressLine2}</Form.Text>
                        </Col>
                        <Col>
                            <Form.Label className="mr-1">City:</Form.Label>
                            <Form.Text>{customerDetails?.city}</Form.Text>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label className="mr-1">Province:</Form.Label>
                            <Form.Text>{customerDetails?.state}</Form.Text>
                        </Col>
                        <Col>
                            <Form.Label className="mr-1">Country:</Form.Label>
                            <Form.Text>{customerDetails?.country}</Form.Text>
                        </Col>
                        <Col>
                            <Form.Label className="mr-1">Postal Code:</Form.Label>
                            <Form.Text>{customerDetails?.postalCode}</Form.Text>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label className="mr-1">Id Proof:</Form.Label>
                            <Form.Text>{customerDetails?.idProof}</Form.Text>
                        </Col>
                        <Col>
                            <Form.Label className="mr-1">Id Proof Number:</Form.Label>
                            <Form.Text>{customerDetails?.idProofValue}</Form.Text>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

        </div>
    );
}

export default ViewCustomer;
