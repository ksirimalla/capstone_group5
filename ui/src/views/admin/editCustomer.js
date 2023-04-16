import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Axios from "../../utils/axios";
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, useParams } from 'react-router-dom';
import { EditCustomerSchema } from './editCustomer.schema';
import { toast } from 'react-toastify';

function EditCustomer() {
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
            })
    }, [id])

    function handleSubmit(values) {
        Axios.put('updateCustomer', { customerId: id, ...values }).then((response) => {
            if (response.data) {
                toast.success("Updated Sucessfully!");
            } else {
                toast.error(response.data.message);
            }
        }).catch(err => {
            console.log(err);
            toast.error("Error");
        })
    }


    function handleCancel() {
        navigate(`/admin/customers`)
    }

    return (
        <div className="full-container">
            <div className='d-flex justify-content-between'>
                <h3>Customer Details</h3>
            </div>
            <Card>
                <Card.Body>
                    <Formik
                        initialValues={customerDetails}
                        enableReinitialize={true}
                        validationSchema={EditCustomerSchema}
                        onSubmit={handleSubmit}
                    >
                        {(formik) => {
                            const { errors, touched, isValid, dirty, handleBlur } = formik;
                            return (
                                <Form>
                                    <Row>
                                        <Col className='d-flex flex-column'>
                                            <Field
                                                name="firstName"
                                            >
                                                {({ field }) => (
                                                    <FormGroup controlId="firstName" className="d-flex flex-column">
                                                        <FormLabel className='text-start'>First Name</FormLabel>
                                                        <FormControl type={'text'} value={field.value} onChange={field.onChange}
                                                            className={errors.firstName && touched.firstName ?
                                                                "input-error" : null} onBlur={handleBlur} />
                                                    </FormGroup>
                                                )}
                                            </Field>
                                            <ErrorMessage name="firstName" component="span" className="text-danger text-start" />
                                        </Col>
                                        <Col className='d-flex flex-column'>
                                            <Field
                                                name="lastName"
                                            >
                                                {({ field }) => (
                                                    <FormGroup controlId="lastName" className="d-flex flex-column">
                                                        <FormLabel className='text-start'>Last Name</FormLabel>
                                                        <FormControl type={'text'} value={field.value} onChange={field.onChange}
                                                            className={errors.lastName && touched.lastName ?
                                                                "input-error" : null} onBlur={handleBlur} />
                                                    </FormGroup>
                                                )}
                                            </Field>
                                            <ErrorMessage name="lastName" component="span" className="text-danger text-start" />

                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className='d-flex flex-column'>
                                            <Field
                                                name="dateOfBirth"
                                            >
                                                {({ field }) => (
                                                    <FormGroup controlId="dateOfBirth" className="d-flex flex-column">
                                                        <FormLabel className='text-start'>Date of Birth</FormLabel>
                                                        <FormControl type={'date'} value={field.value} onChange={field.onChange}
                                                            className={errors.dateOfBirth && touched.dateOfBirth ?
                                                                "input-error" : null} onBlur={handleBlur} />
                                                    </FormGroup>
                                                )}
                                            </Field>
                                            <ErrorMessage name="dateOfBirth" component="span" className="text-danger text-start" />
                                        </Col>
                                        <Col className='d-flex flex-column'>
                                            <Field
                                                name="phoneNumber"
                                            >
                                                {({ field }) => (
                                                    <FormGroup controlId="phoneNumber" className="d-flex flex-column">
                                                        <FormLabel className='text-start'>Phone Number</FormLabel>
                                                        <FormControl type={'text'} value={field.value} onChange={field.onChange}
                                                            className={errors.phoneNumber && touched.phoneNumber ?
                                                                "input-error" : null} onBlur={handleBlur} />
                                                    </FormGroup>
                                                )}
                                            </Field>
                                            <ErrorMessage name="phoneNumber" component="span" className="text-danger text-start" />

                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className='d-flex flex-column'>
                                            <Field
                                                name="email"
                                            >
                                                {({ field }) => (
                                                    <FormGroup controlId="email" className="d-flex flex-column">
                                                        <FormLabel className='text-start'>Email</FormLabel>
                                                        <FormControl type={'email'} value={field.value} onChange={field.onChange}
                                                            className={errors.email && touched.email ?
                                                                "input-error" : null} onBlur={handleBlur} />
                                                    </FormGroup>
                                                )}
                                            </Field>
                                            <ErrorMessage name="email" component="span" className="text-danger text-start" />
                                        </Col>
                                        <Col className='d-flex flex-column'>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='d-flex flex-column'>
                                            <Field
                                                name="addressLine1"
                                            >
                                                {({ field }) => (
                                                    <FormGroup controlId="addressLine1" className="d-flex flex-column">
                                                        <FormLabel className='text-start'>Address Line1</FormLabel>
                                                        <FormControl type={'text'} value={field.value} onChange={field.onChange}
                                                            className={errors.addressLine1 && touched.addressLine1 ?
                                                                "input-error" : null} onBlur={handleBlur} />
                                                    </FormGroup>
                                                )}
                                            </Field>
                                            <ErrorMessage name="addressLine1" component="span" className="text-danger text-start" />
                                        </Col>
                                        <Col className='d-flex flex-column'>
                                            <Field
                                                name="addressLine2"
                                            >
                                                {({ field }) => (
                                                    <FormGroup controlId="addressLine2" className="d-flex flex-column">
                                                        <FormLabel className='text-start'>Address Line2</FormLabel>
                                                        <FormControl type={'text'} value={field.value} onChange={field.onChange}
                                                            className={errors.addressLine2 && touched.addressLine2 ?
                                                                "input-error" : null} onBlur={handleBlur} />
                                                    </FormGroup>
                                                )}
                                            </Field>
                                            <ErrorMessage name="addressLine2" component="span" className="text-danger text-start" />

                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className='d-flex flex-column'>
                                            <Field
                                                name="city"
                                            >
                                                {({ field }) => (
                                                    <FormGroup controlId="city" className="d-flex flex-column">
                                                        <FormLabel className='text-start'>City</FormLabel>
                                                        <FormControl type={'text'} value={field.value} onChange={field.onChange}
                                                            className={errors.city && touched.city ?
                                                                "input-error" : null} onBlur={handleBlur} />
                                                    </FormGroup>
                                                )}
                                            </Field>
                                            <ErrorMessage name="city" component="span" className="text-danger text-start" />
                                        </Col>
                                        <Col className='d-flex flex-column'>
                                            <Field
                                                name="state"
                                            >
                                                {({ field }) => (
                                                    <FormGroup controlId="state" className="d-flex flex-column">
                                                        <FormLabel className='text-start'>Province</FormLabel>
                                                        <FormControl type={'text'} value={field.value} onChange={field.onChange}
                                                            className={errors.state && touched.state ?
                                                                "input-error" : null} onBlur={handleBlur} />
                                                    </FormGroup>
                                                )}
                                            </Field>
                                            <ErrorMessage name="state" component="span" className="text-danger text-start" />

                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col className='d-flex flex-column'>
                                            <Field
                                                name="country"
                                            >
                                                {({ field }) => (
                                                    <FormGroup controlId="country" className="d-flex flex-column">
                                                        <FormLabel className='text-start'>Country</FormLabel>
                                                        <FormControl type={'text'} value={field.value} onChange={field.onChange}
                                                            className={errors.country && touched.country ?
                                                                "input-error" : null} onBlur={handleBlur} />
                                                    </FormGroup>
                                                )}
                                            </Field>
                                            <ErrorMessage name="country" component="span" className="text-danger text-start" />
                                        </Col>
                                        <Col className='d-flex flex-column'>
                                            <Field
                                                name="postalCode"
                                            >
                                                {({ field }) => (
                                                    <FormGroup controlId="postalCode" className="d-flex flex-column">
                                                        <FormLabel className='text-start'>Postal Code</FormLabel>
                                                        <FormControl type={'text'} value={field.value} onChange={field.onChange}
                                                            className={errors.postalCode && touched.postalCode ?
                                                                "input-error" : null} onBlur={handleBlur} />
                                                    </FormGroup>
                                                )}
                                            </Field>
                                            <ErrorMessage name="postalCode" component="span" className="text-danger text-start" />

                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col className='d-flex flex-column'>
                                            <Field
                                                name="idProof"
                                            >
                                                {({ field }) => (
                                                    <FormGroup controlId="idProof" className="d-flex flex-column">
                                                        <FormLabel className='text-start'>Id Proof</FormLabel>
                                                        <FormControl type={'text'} value={field.value} onChange={field.onChange}
                                                            className={errors.idProof && touched.idProof ?
                                                                "input-error" : null} onBlur={handleBlur} />
                                                    </FormGroup>
                                                )}
                                            </Field>
                                            <ErrorMessage name="idProof" component="span" className="text-danger text-start" />
                                        </Col>
                                        <Col className='d-flex flex-column'>
                                            <Field
                                                name="idProofValue"
                                            >
                                                {({ field }) => (
                                                    <FormGroup controlId="idProofValue" className="d-flex flex-column">
                                                        <FormLabel className='text-start'>Id Proof Number</FormLabel>
                                                        <FormControl type={'text'} value={field.value} onChange={field.onChange}
                                                            className={errors.idProofValue && touched.idProofValue ?
                                                                "input-error" : null} onBlur={handleBlur} />
                                                    </FormGroup>
                                                )}
                                            </Field>
                                            <ErrorMessage name="idProofValue" component="span" className="text-danger text-start" />

                                        </Col>
                                    </Row>
                                    <Row className="mt-5">
                                        <Col></Col>
                                        <Col>
                                            <Button variant="" onClick={handleCancel}>Cancel</Button>
                                            <Button type="submit"
                                                className={!(dirty && isValid) ? "disabled-btn" : ""}
                                                disabled={!(dirty && isValid)} variant="primary">Update</Button>
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

export default EditCustomer;
