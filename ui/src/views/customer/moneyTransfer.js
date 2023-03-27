import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Axios from "../../utils/axios";
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormSelect from 'react-bootstrap/FormSelect';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MoneyTransferSchema } from './moneyTransfer.schema';

function CustomerMoneyTransfer() {
    const { customerId } = useSelector(state => state.user);
    const [beneficiaryList, setBeneficiaryList] = useState([]);
    const [accountList, setAccountList] = useState([]);
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (customerId)
    //         Axios.get("getCustomer?id=" + customerId, {}).then(response => {
    //             if (response.data && response.data) {
    //                 setCustomerDetails(response.data);
    //             } else {
    //                 setCustomerDetails({});
    //             }
    //         }).catch(err => {
    //             console.log(err);
    //         })
    // }, [customerId])

    function handleSubmit(values) {
        Axios.put('updateCustomer', { customerId: customerId, ...values }).then((response) => {
            if (response.data) {
                alert("Updated");
                // navigate("/login")
            } else {
                alert("Error")
            }
        }).catch(err => {
            console.log(err);
            alert("Error");
        })
    }


    function handleCancel() {
        navigate(`/customer`)
    }

    function handleAddBeneficiary() {

    }

    return (
        <div className="full-container">
            <div className='d-flex justify-content-between'>
                <h3>Money Transfer</h3>
                <div>
                    <Button variant="" onClick={handleAddBeneficiary}>Add Beneficiary</Button>
                </div>
            </div>
            <Card>
                <Card.Body>
                    <Formik
                        initialValues={{}}
                        enableReinitialize={true}
                        validationSchema={MoneyTransferSchema}
                        onSubmit={handleSubmit}
                    >
                        {(formik) => {
                            const { errors, touched, isValid, dirty, handleBlur } = formik;
                            return (
                                <Form>

                                    <Row>
                                        <Col className='d-flex flex-column'>
                                            <Field
                                                name="accountId"
                                            >
                                                {({ field }) => (
                                                    <FormGroup controlId="accountId" className="d-flex flex-column">
                                                        <FormLabel className='text-start'>Select Account</FormLabel>
                                                        <FormSelect value={field.value} onChange={(e) => {
                                                            console.log(e)
                                                            field.onChange(e)
                                                        }}
                                                            className={errors.accountId && touched.accountId ?
                                                                "input-error" : null} onBlur={handleBlur} >
                                                            <option value={""}></option>
                                                            {accountList.map(row => <option key={row.accountId} value={row.accountId}>{row.name}</option>)}
                                                        </FormSelect>
                                                    </FormGroup>
                                                )}
                                            </Field>
                                            <ErrorMessage name="accountId" component="span" className="text-danger text-start" />
                                        </Col>
                                        <Col className='d-flex flex-column'>
                                            <Field
                                                name="accountId"
                                            >
                                                {({ field }) => (
                                                    <FormGroup controlId="beneficiary" className="d-flex flex-column">
                                                        <FormLabel className='text-start'>Select Beneficiary</FormLabel>
                                                        <FormSelect value={field.value} onChange={(e) => {
                                                            console.log(e)
                                                            field.onChange(e)
                                                        }}
                                                            className={errors.beneficiary && touched.beneficiary ?
                                                                "input-error" : null} onBlur={handleBlur} >
                                                            <option value={""}></option>
                                                            {beneficiaryList.map(row => <option key={row.accountId} value={row.accountId}>{row.name}</option>)}
                                                        </FormSelect>
                                                    </FormGroup>
                                                )}
                                            </Field>
                                            <ErrorMessage name="beneficiary" component="span" className="text-danger text-start" />
                                        </Col>
                                       
                                    </Row>

                                    <Row>
                                    <Col className='d-flex flex-column'>
                                            <Field
                                                name="amount"
                                            >
                                                {({ field }) => (
                                                    <FormGroup controlId="amount" className="d-flex flex-column">
                                                        <FormLabel className='text-start'>Amount</FormLabel>
                                                        <FormControl type={'text'} value={field.value} onChange={field.onChange}
                                                            className={errors.amount && touched.amount ?
                                                                "input-error" : null} onBlur={handleBlur} />
                                                    </FormGroup>
                                                )}
                                            </Field>
                                            <ErrorMessage name="amount" component="span" className="text-danger text-start" />

                                        </Col>
                                        <Col className='d-flex flex-column'>
                                            <Field
                                                name="comments"
                                            >
                                                {({ field }) => (
                                                    <FormGroup controlId="comments" className="d-flex flex-column">
                                                        <FormLabel className='text-start'>Comments</FormLabel>
                                                        <FormControl type={'text'} value={field.value} onChange={field.onChange}
                                                            className={errors.comments && touched.comments ?
                                                                "input-error" : null} onBlur={handleBlur} />
                                                    </FormGroup>
                                                )}
                                            </Field>
                                            <ErrorMessage name="comments" component="span" className="text-danger text-start" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-5">
                                        <Col></Col>
                                        <Col>
                                            <Button variant="" onClick={handleCancel}>Cancel</Button>
                                            <Button type="submit"
                                                className={!(dirty && isValid) ? "disabled-btn" : ""}
                                                disabled={!(dirty && isValid)} variant="primary">Send Money</Button>
                                        </Col>
                                        <Col></Col>

                                    </Row>
                                </Form>
                            );
                        }}
                    </Formik>
                </Card.Body>
            </Card>

        </div>
    );
}

export default CustomerMoneyTransfer;
