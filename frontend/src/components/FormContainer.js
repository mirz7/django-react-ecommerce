import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function FormContainer({ children }) {
    return (
        <Container>
<<<<<<< HEAD
            <Row className='justify-content-md-center mt-5 mb-5'>
                <Col xs={12} md={7} className="pk-card p-5 shadow-sm border-0">
=======
            <Row className='justify-content-md-center'>
                <Col xs={12} md={7}>
>>>>>>> cf8767a (added new features & refactored code)
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default FormContainer