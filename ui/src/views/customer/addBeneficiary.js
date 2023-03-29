import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Axios from "../../utils/axios";
import { useSelector } from 'react-redux';

function AddBeneficiary(props) {
    const { show, onClose } = props;
    const [accountNumber, setAccountNumber] = useState("");
    const [accountDetails, setAccountDetails] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const { customerId } = useSelector(state => state.user);

    const handleClose = () => onClose(false);

    function handleSave() {
        Axios.post("addBeneficiary", {
            accountId: accountDetails.accountId,
            customerId: customerId
        }).then(response => {
            if (response.data && response.data.status) {
                onClose(true);
            } else {
                setErrorMessage(response.data.message);
            }
        }).catch(err => {
            setIsValid(false);
            setErrorMessage(err.message);
        })


    }

    function handleInput(e) {
        console.log(e.target.value);
        setAccountNumber(e.target.value);
    }

    function handleValidate() {
        Axios.get("getAccountById?id=" + accountNumber, {}).then(response => {
            if (response.data && response.data) {
                setAccountDetails(response.data);
                setIsValid(true);
                setErrorMessage("");
            } else {
                setAccountDetails({});
                setIsValid(false);
                setErrorMessage("Invalid Account Number");
            }
        }).catch(err => {
            console.log(err);
            setIsValid(false);
            setErrorMessage("Invalid Account Number");
        })
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Beneficiary</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Account Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Account Number" value={accountNumber} onChange={handleInput} />
                        </Form.Group>
                    </Form>
                    <Button variant="primary" onClick={handleValidate} disabled={!accountNumber}>
                        Validate
                    </Button>
                    <p className='error'>{errorMessage}</p>
                    {isValid && accountDetails && <div className='mt-3'>
                        <h4>Review Account Details ({accountDetails?.accountId})</h4>
                        <Row>
                            <Col>
                                <Form.Label className="mr-1">First Name:</Form.Label>
                                <Form.Text>{accountDetails?.firstName}</Form.Text>
                            </Col>
                            <Col>
                                <Form.Label className="mr-1">Last Name:</Form.Label>
                                <Form.Text>{accountDetails?.lastName}</Form.Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label className="mr-1">Email:</Form.Label>
                                <Form.Text>{accountDetails?.email}</Form.Text>
                            </Col>
                            <Col>
                                <Form.Label className="mr-1">Phone Number:</Form.Label>
                                <Form.Text>{accountDetails?.phoneNumber}</Form.Text>
                            </Col>
                        </Row>

                    </div>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave} disabled={!isValid}>
                        Add Beneficiary
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddBeneficiary;