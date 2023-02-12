import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import Button from 'react-bootstrap/Button';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LoginSchema } from './login.schema';
import Axios from "../../utils/axios";
import LoginImage from "../../assets/images/home.jpg";
import Image from 'react-bootstrap/Image'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setupUser } from '../../store/features/userReducer';


function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const initialValues = {
        userName: '',
        password: ''
    };

    function handleSubmit(values) {
        Axios.post('login', values).then((response) => {
            if (response.data.status) {
                dispatch(setupUser(response.data.data))
                if (response.data.data.role === "Admin") {
                    navigate("/admin");
                } else {
                    navigate("/customer");
                }
            }
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
                <Col className='col-5'>
                    <Card className='m-3 mt-5' >
                        <Card.Header>Login</Card.Header>
                        <Card.Body>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={LoginSchema}
                                onSubmit={handleSubmit}
                            >
                                {(formik) => {
                                    const { errors, touched, isValid, dirty, handleBlur } = formik;
                                    return (
                                        <Form>

                                            <Row>

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

                                            </Row>

                                            <Row className="mt-5">
                                                <Col></Col>
                                                <Col>
                                                    <Button type="submit"
                                                        className={!(dirty && isValid) ? "disabled-btn" : ""}
                                                        disabled={!(dirty && isValid)} variant="primary">Login</Button>
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

export default Login;
