import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';


const Projects = () => {
    return (
        <div className='mt-4 mb-4'>
            <h1 className='titles-divider text-center mb-3'>Interesting Facts</h1>
            <Row className='m-4'>
                <Col className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                    <Card className='align-items-center' style={{ width: '15rem', border: 'none' }}>
                        <Card.Img className='img-icon' variant="top" src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1669644723/CV/education_r2ghgc.png" />
                        <Card.Body className="text-center">
                            <Card.Title>Professional Achievements</Card.Title>
                            <Card.Text>
                                Industrial Engineer &
                                Full Stack Developer
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                    <Card className='align-items-center' style={{ width: '15rem', border: 'none' }}>
                        <Card.Img className='img-icon'  variant="top" src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1669645478/CV/skills_dn2luc.png" />
                        <Card.Body className="text-center">
                            <Card.Title>Digital Skills</Card.Title>
                            <Card.Text>
                                Microsoft Office/CRM Manager Apps/SAP/Corel Draw/Visual Studio/Data analyst
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                    <Card className='align-items-center' style={{ width: '15rem', border: 'none' }}>
                        <Card.Img className='img-icon'  variant="top" src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1669645476/CV/working_skills_xjbyma.png" />
                        <Card.Body className="text-center">
                            <Card.Title>Working Skills </Card.Title>
                            <Card.Text>
                                Strategic Thinking and Global Vision/Flexibility and adaptability/Teamwork and proactivity/Multitasking and adaptability to dynamic environments.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Projects