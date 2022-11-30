import { Button, Col, Row } from "react-bootstrap";

const ImagenPrin = () => {

    const goToLinkedin = ()=> {
        const newWindow = window.open('https://www.linkedin.com/in/nicolasmendoza92/');
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className="contenedor-img m-4">
            <Row>
                <Col lg={6} className="principal">
                <div className="letras-prin">
                    <h2 className="m-2"> About Me</h2>
                    <p className="m-2">I'm a hard worker industrial engineer able to solve problems in an effective and creative way, I’m passionate about technology, innovation and process optimization. I'm trying every time to make things easier and simpler. I like challenges because they push me to be better and give it all . I like the team work and I always give my best in everything I do.</p>
                    <Button variant="primary" onClick={goToLinkedin} className="m-2"> Go to Linkedin</Button>
                </div>
                </Col>
                <Col lg={6} className="principal-photo">
                    <div className="d-flex justify-content-center">
                        <img className="photo-cv" src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1669301208/CV/Foto_Web_redondeada_tbvum3.png" alt="" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ImagenPrin