import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Axios from "../../utils/axios";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddBeneficiary from './addBeneficiary';
import { toast } from 'react-toastify';
function CustomerBeneficiaryList() {
    const [beneficiaryList, setBeneficiaryList] = useState([]);
    const navigate = useNavigate();
    const { customerId } = useSelector(state => state.user);
    const [showDialog, setShowDialog] = useState(false);

    useEffect(() => {
        if (customerId) {
            getBeneficaryList();
        }

    }, [customerId])

    function handleDelete(row) {
        Axios.delete("deleteBeneficiary?id=" + row.id, {}).then(response => {
            if (response.data && response.data) {
                toast.success("Deleted Sucessfully!");
                getBeneficaryList();
            } else {
                toast.error(response.data.message);
            }
        }).catch(err => {
            console.log(err);
            toast.error("Error");
        })
    }

    function handleClose(value) {
        if (value) {
            getBeneficaryList();
        }
        setShowDialog(false);
    }

    function getBeneficaryList() {
        Axios.get("getCustomerBeneficiaryList?id=" + customerId, {}).then(response => {
            if (response.data && response.data) {
                setBeneficiaryList(response.data);
            } else {
                setBeneficiaryList([]);
            }
        }).catch(err => {
            console.log(err);
            setBeneficiaryList([]);
        })
    }

    function handleAddBeneficiary() {
        setShowDialog(true);
    }

    return (
        <div className="full-container">
            <div className='d-flex justify-content-between'>
                <h3>Manage Beneficiary</h3>
                <div>
                    <Button variant="" onClick={handleAddBeneficiary}>Add Beneficiary</Button>
                </div>
            </div>
            <Card>
                <Card.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>S No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Account Id</th>
                                <th>Account Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {beneficiaryList.map((row, index) => {
                                return <tr key={row.accountId}>
                                    <td>{index + 1}</td>
                                    <td>{row.firstName + " " + row.lastName}</td>
                                    <td>{row.email}</td>
                                    <td>{row.accountId}</td>
                                    <td>{row.name}</td>
                                    <td><Button variant="primary" onClick={() => handleDelete(row)}>Delete</Button></td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            {showDialog && <AddBeneficiary show={showDialog} onClose={handleClose} />}
        </div>
    );
}

export default CustomerBeneficiaryList;
