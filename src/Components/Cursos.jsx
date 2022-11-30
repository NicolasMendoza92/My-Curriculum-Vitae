import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';

const Cursos = () => {

    const goToGit = () => {
        const newWindow = window.open('https://github.com/NicolasMendoza92?tab=repositories');
        if (newWindow) newWindow.opener = null
    }
    const goToCoco = () => {
        const newWindow = window.open('https://coco-mad-react-fjq0yvigq-nicolasmendoza92.vercel.app/');
        if (newWindow) newWindow.opener = null
    }
    const goToAllcot = () => {
        const newWindow = window.open('https://allcottrading.com/');
        if (newWindow) newWindow.opener = null
    }


    return (
        <div className='mt-4 mb-4'>
            <h1 className='text-center mb-3'>My Web Projects </h1>
            <Row>
                <Col className="col-12  col-lg-4 d-flex justify-content-center">
                    <Card onClick={goToGit} className="bg-dark text-white mb-2 container-photo-home">
                        <Card.Img className='img-card' src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1669635719/CV/coding_computer_tga7ki.jpg" alt="Card image" />
                        <Card.ImgOverlay className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-4 card-home">
                            <div className="glass-card">
                                <Card.Title className="titulo-card-home">My Projects Portfolio</Card.Title>
                                <Card.Text className='text-card-home'>
                                    Take a look at my Frontend and Backend projects
                                </Card.Text>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col className='col-12 col-lg-4 d-flex justify-content-center'>
                    <Card onClick={goToCoco} className="bg-dark text-white mb-2 container-photo-home">
                        <Card.Img className='img-card' src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1669635721/CV/cocomad_project_paqpfc.png" alt="Card image" />
                        <Card.ImgOverlay className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-4 card-home">
                            <div className="glass-card">
                                <Card.Title className="titulo-card-home">React Project</Card.Title>
                                <Card.Text className='text-card-home'>
                                    CocoMad Bakery "Vercel"
                                </Card.Text>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col className='col-12 col-lg-4 d-flex justify-content-center'>
                    <Card onClick={goToAllcot} className="bg-dark text-white mb-2 container-photo-home">
                        <Card.Img className='img-card' src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1669635721/CV/allcot_trading_project_jleivq.png" alt="Card image" />
                        <Card.ImgOverlay className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-4 card-home">
                            <div className="glass-card">
                                <Card.Title className="titulo-card-home">Wordpress Project</Card.Title>
                                <Card.Text className='text-card-home'>
                                    Allcot Trading Project
                                </Card.Text>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row >
        </div>
    )
}

export default Cursos