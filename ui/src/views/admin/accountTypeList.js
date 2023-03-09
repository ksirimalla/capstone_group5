import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Axios from "../../utils/axios";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function AccountTypeList() {
    const [accountTypeList, setAccountTypeList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        Axios.get("getAllAccountType").then(response => {
            if (response.data && response.data.length) {
                setAccountTypeList(response.data);
            } else {
                setAccountTypeList([]);
            }
        }).catch(err => {
            console.log(err);
        })
    }, [])

    function handleView(row) {
        navigate(`/admin/accountTypes/view/${row.accountId}`)
    }

    function handleCreate() {
        navigate(`/admin/accountTypes/create`)
    }

    return (
        <div className="full-container">
            <div className='d-flex justify-content-between'>
                <h3>Account Types List </h3>

                <div>
                    <Button variant="primary" onClick={handleCreate}>Create New</Button>
                </div>
            </div>
            <Card>
                <Card.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>S No.</th>
                                <th>Account Id</th>
                                <th>Account Name</th>
                                <th>Account Code</th>
                                <th>Minimum Balance</th>
                                <th>Rate of Interest</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accountTypeList.map((row, index) => {
                                return <tr key={row.accountId}>
                                    <td>{index + 1}</td>
                                    <td>{row.accountId}</td>
                                    <td>{row.name}</td>
                                    <td>{row.code}</td>
                                    <td>{row.minimumBalance}</td>
                                    <td>{row.rateOfInterest}</td>
                                    <td><Button variant="primary" onClick={() => handleView(row)}>View</Button></td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

        </div>
    );
}

export default AccountTypeList;
