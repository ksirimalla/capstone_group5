import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleCLick = (path) => {
        navigate(path);
    }
    return (
        <div className="home-page">
            <h1>Welcome to Branchless Bank</h1>
            <Row className='mt-2'>
                <Card style={{ width: '18rem' }} className='m-2'>
                    <Card.Body>
                        <Card.Title>Have Account?</Card.Title>
                        <Card.Text>
                            Click following button to Login in to your account
                        </Card.Text>
                        <Button variant="primary" onClick={() => handleCLick('/login')}>Login</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='m-2'>
                    <Card.Body>
                        <Card.Title>Not Have Account?</Card.Title>
                        <Card.Text>
                            Click following button to register
                        </Card.Text>
                        <Button variant="primary" onClick={() => handleCLick('/signup')}>Sign up</Button>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    );
}

export default Home;
