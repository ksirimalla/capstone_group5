import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Axios from "../../utils/axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CustomerAccountsList() {
    const [customerList, setCustomerList] = useState([]);
    const navigate = useNavigate();
    const { customerId } = useSelector(state => state.user);
    const [showDialog, setShowDialog] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [accountTypeList, setAccountTypeList] = useState([]);
    const [selectedAccountType, setSelectedAccountType] = useState("");


    useEffect(() => {
        Axios.get("getAllAccountType").then(response => {
            if (response.data) {
                setAccountTypeList(response.data);
            }
        }).catch(err => {
            console.log(err);
            alert("Error");
        })
    }, [])
    useEffect(() => {
        if (customerId) {
            getCustomerAccounts();
        }
    }, [customerId])

    function getCustomerAccounts() {
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

    function handleView(row) {
        navigate(`/customer/accounts/${row.accountId}`)
    }

    function handleAddAccount() {
        setShowDialog(true);
    }

    function handleClose() {
        setShowDialog(false);
    }

    function handleSave() {
        Axios.post("addAccount", {
            customerId: customerId,
            accountId: selectedAccountType

        }).then(response => {
            if (response.data && response.data.status) {
                alert("Account added");
                getCustomerAccounts();
                setShowDialog(false);
            } else {
                alert(response.data.message);
                setShowDialog(false);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    function handleChange(event) {
        setSelectedAccountType(event.target.value);
    }

    return (
        <div className="full-container">
            <div className='d-flex justify-content-between'>
                <h3>Account List</h3>
                <div>
                    <Button variant="" onClick={handleAddAccount}>Add New Account</Button>
                </div>
            </div>
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
                                    <td><Button variant="primary" onClick={() => handleView(row)}>View</Button></td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

            {showDialog && <>
                <Modal show={showDialog} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Account</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Account Type</Form.Label>
                                <Form.Select value={selectedAccountType} onChange={handleChange}>
                                    <option value={""}></option>
                                    {accountTypeList.map(row => <option key={row.accountId} value={row.accountId}>{row.name}</option>)}
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSave} disabled={!selectedAccountType}>
                            Add Account
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>}
        </div>
    );
}

export default CustomerAccountsList;
