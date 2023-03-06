import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Axios from "../../utils/axios";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function CreateAccountType() {
    const [customerList, setCustomerList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Axios.post("customerList", {}).then(response => {
        //     if (response.data && response.data.length) {
        //         setCustomerList(response.data);
        //     } else {
        //         setCustomerList([]);
        //     }
        // }).catch(err => {
        //     console.log(err);
        // })
    }, [])

    function handleView(row){
        navigate(`/admin/customer/view/${row.customerId}`)
    }
    return (
        <div className="full-container">
            <h3>Create a Account Type</h3>
            <Card>
                <Card.Body>
                </Card.Body>
            </Card>

        </div>
    );
}

export default CreateAccountType;
