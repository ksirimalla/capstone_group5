import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Axios from "../../utils/axios";
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';

function ViewAccountType() {
    const { id } = useParams();
    const [accountDetails, setAccountDetails] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (id)
            Axios.get("getAccountType?id=" + id, {}).then(response => {
                if (response.data && response.data) {
                    setAccountDetails(response.data);
                } else {
                    setAccountDetails({});
                }
            }).catch(err => {
                console.log(err);
            })
    }, [id])

    function handleCancel() {
        navigate(`/admin/accountTypes`)
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
                            <Form.Label className="mr-1">Account ID:</Form.Label>
                            <Form.Text>{accountDetails?.accountId}</Form.Text>
                        </Col>
                        <Col>
                            <Form.Label className="mr-1">Account Name:</Form.Label>
                            <Form.Text>{accountDetails?.name}</Form.Text>
                        </Col>
                        <Col>
                            <Form.Label className="mr-1">Account Code:</Form.Label>
                            <Form.Text>{accountDetails?.code}</Form.Text>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label className="mr-1">Description:</Form.Label>
                            <Form.Text>{accountDetails?.description}</Form.Text>
                        </Col>
                        <Col>
                            <Form.Label className="mr-1">Minimum Balance:</Form.Label>
                            <Form.Text>{accountDetails?.minimumBalance}</Form.Text>
                        </Col>
                        <Col>
                            <Form.Label className="mr-1">Rate of Interest:</Form.Label>
                            <Form.Text>{accountDetails?.rateOfInterest}</Form.Text>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>

        </div>
    );
}

export default ViewAccountType;
