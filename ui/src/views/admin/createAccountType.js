import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import Button from 'react-bootstrap/Button';
import Axios from "../../utils/axios";
import { useNavigate } from 'react-router-dom';
import { CreateAccountTypeSchema } from './createAccountType.schema';

function CreateAccountType() {
    const navigate = useNavigate();
    const initialValues = {
        name: '',
        description: '',
        rateOfInterest: 0.0,
        minimumBalance: 0.0
    };

    function handleSubmit(values) {
        Axios.post('createAccountType', values).then((response) => {
            if (response.data) {
                alert("Created");
                navigate("/admin/accountTypes")
            } else {
                alert("Error")
            }
        }).catch(err => {
            console.log(err);
            alert("Error");
        })
    }

    function handleCancel() {
        navigate(`/admin/accountTypes`)
    }
    return (
        <div className="full-container">
            <div className='d-flex justify-content-between'>
                <h3>Create a Account Type</h3>
                <div>
                    <Button variant="primary" onClick={handleCancel}>Cancel</Button>
                </div>
            </div>
            <Card>
                <Card.Body>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={CreateAccountTypeSchema}
                        onSubmit={handleSubmit}
                    >
                        {(formik) => {
                            const { errors, touched, isValid, dirty, handleBlur } = formik;
                            return (
                                <Form>
                                    <Row>
                                        <Col className='d-flex flex-column'>
                                            <Field
                                                name="name"
                                            >
                                                {({ field }) => (
                                                    <FormGroup controlId="name" className="d-flex flex-column">
                                                        <FormLabel className='text-start'>Account Name</FormLabel>
                                                        <FormControl type={'text'} value={field.value} onChange={field.onChange}
                                                            className={errors.name && touched.name ?
                                                                "input-error" : null} onBlur={handleBlur} />
                                                    </FormGroup>
                                                )}
                                            </Field>
                                            <ErrorMessage name="name" component="span" className="text-danger text-start" />
                                        </Col>
                                        <Col className='d-flex flex-column'>
                                            <Field
                                                name="description"
                                            >
                                                {({ field }) => (
                                                    <FormGroup controlId="description" className="d-flex flex-column">
                                                        <FormLabel className='text-start'>Description</FormLabel>
                                                        <FormControl type={'text'} value={field.value} onChange={field.onChange}
                                                            className={errors.description && touched.description ?
                                                                "input-error" : null} onBlur={handleBlur} />
                                                    </FormGroup>
                                                )}
                                            </Field>
                                            <ErrorMessage name="description" component="span" className="text-danger text-start" />

                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className='d-flex flex-column'>
                                            <Field
                                                name="rateOfInterest"
                                            >
                                                {({ field }) => (
                                                    <FormGroup controlId="rateOfInterest" className="d-flex flex-column">
                                                        <FormLabel className='text-start'>Rate of Interest(%)</FormLabel>
                                                        <FormControl type={'number'} value={field.value} onChange={field.onChange}
                                                            className={errors.rateOfInterest && touched.rateOfInterest ?
                                                                "input-error" : null} onBlur={handleBlur} max="10"/>
                                                    </FormGroup>
                                                )}
                                            </Field>
                                            <ErrorMessage name="rateOfInterest" component="span" className="text-danger text-start" />
                                        </Col>
                                        <Col className='d-flex flex-column'>
                                            <Field
                                                name="minimumBalance"
                                            >
                                                {({ field }) => (
                                                    <FormGroup controlId="minimumBalance" className="d-flex flex-column">
                                                        <FormLabel className='text-start'>Minimum Balance</FormLabel>
                                                        <FormControl type={'number'} value={field.value} onChange={field.onChange}
                                                            className={errors.minimumBalance && touched.minimumBalance ?
                                                                "input-error" : null} onBlur={handleBlur} />
                                                    </FormGroup>
                                                )}
                                            </Field>
                                            <ErrorMessage name="minimumBalance" component="span" className="text-danger text-start" />

                                        </Col>
                                    </Row>
                                    <Row className="mt-5">
                                        <Col></Col>
                                        <Col>
                                            <Button type="submit"
                                                className={!(dirty && isValid) ? "disabled-btn" : ""}
                                                disabled={!(dirty && isValid)} variant="primary">Create Account Type</Button>
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

export default CreateAccountType;
