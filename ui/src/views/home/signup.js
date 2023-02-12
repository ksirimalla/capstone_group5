import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import Button from 'react-bootstrap/Button';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SignUpSchema } from './signup.schema';
import LoginImage from "../../assets/images/home.jpg";
import Image from 'react-bootstrap/Image';
import Axios from "../../utils/axios";

function Signup() {
    const initialValues = {
        firstName: '',
        lastName: '',
        dateOfBirth: ''
    };


    function handleSubmit(values) {
        Axios.post('register', values).then((data) => {
            alert("Created");
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className='m-0 w-100 overflow-hidden'>
            <Row>
                <Col className='col-7'>
                    <Image
                        src={LoginImage} className="login-image"
                    />
                </Col>
                <Col>
                    <Card className='m-3'>
                        <Card.Header>Sign Up</Card.Header>
                        <Card.Body>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={SignUpSchema}
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
                                                    <Field
                                                        name="userName"
                                                    >
                                                        {({ field }) => (
                                                            <FormGroup controlId="userName" className="d-flex flex-column">
                                                                <FormLabel className='text-start'>User Name</FormLabel>
                                                                <FormControl type={'text'} value={field.value} onChange={field.onChange}
                                                                    className={errors.userName && touched.userName ?
                                                                        "input-error" : null} onBlur={handleBlur} />
                                                            </FormGroup>
                                                        )}
                                                    </Field>
                                                    <ErrorMessage name="userName" component="span" className="text-danger text-start" />

                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col className='d-flex flex-column'>
                                                    <Field
                                                        name="password"
                                                    >
                                                        {({ field }) => (
                                                            <FormGroup controlId="password" className="d-flex flex-column">
                                                                <FormLabel className='text-start'>Password</FormLabel>
                                                                <FormControl type={'password'} value={field.value} onChange={field.onChange}
                                                                    className={errors.password && touched.password ?
                                                                        "input-error" : null} onBlur={handleBlur} />
                                                            </FormGroup>
                                                        )}
                                                    </Field>
                                                    <ErrorMessage name="password" component="span" className="text-danger text-start" />
                                                </Col>
                                                <Col className='d-flex flex-column'>
                                                    <Field
                                                        name="addressLine2"
                                                    >
                                                        {({ field }) => (
                                                            <FormGroup controlId="confirmPassword" className="d-flex flex-column">
                                                                <FormLabel className='text-start'>User Name</FormLabel>
                                                                <FormControl type={'password'} value={field.value} onChange={field.onChange}
                                                                    className={errors.confirmPassword && touched.confirmPassword ?
                                                                        "input-error" : null} onBlur={handleBlur} />
                                                            </FormGroup>
                                                        )}
                                                    </Field>
                                                    <ErrorMessage name="confirmPassword" component="span" className="text-danger text-start" />

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
                                                                <FormLabel className='text-start'>State</FormLabel>
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
                                                    <Button type="submit"
                                                        className={!(dirty && isValid) ? "disabled-btn" : ""}
                                                        disabled={!(dirty && isValid)} variant="primary">Sign Up</Button>
                                                </Col>
                                                <Col></Col>

                                            </Row>
                                        </Form>
                                    );
                                }}
                            </Formik>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div >

    );
}

export default Signup;
