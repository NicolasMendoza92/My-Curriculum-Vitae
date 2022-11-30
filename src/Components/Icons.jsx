import React from 'react'
import { Card } from 'react-bootstrap'

const Icons = () => {
    return (
        <>
         <h1 className='titles-divider text-center mb-3'>FullStack developer skills</h1>
        <div className='d-flex justify-content-center align-items-center m-5 '>
            <Card className='card-icons' style={{ width: '8rem' }}>
                <Card.Img variant="top" src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1669652792/CV/React-icon.svg_im2nfb.png" />
            </Card>
            <Card className='card-icons' style={{ width: '9rem' }}>
                <Card.Img variant="top" src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1669652790/CV/heroku-logo_hgvwkw.png" />
            </Card>
            <Card className='card-icons' style={{ width: '7rem' }}>
                <Card.Img variant="top" src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1669652795/CV/WordPress_blue_logo.svg_m6tq3d.png" />
            </Card>
            <Card className='card-icons' style={{ width: '7rem' }}>
                <Card.Img variant="top" src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1669802649/CV/js_logo_moj3dm.png" />
            </Card>
            <Card className='card-icons' style={{ width: '9rem' }}>
                <Card.Img variant="top" src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1669802729/CV/css_jpl0qt.png" />
            </Card>
            <Card className='card-icons' style={{ width: '6rem' }}>
                <Card.Img variant="top" src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1669803279/CV/html_hwaotk.png" />
            </Card>
            <Card className='card-icons' style={{ width: '7rem' }}>
                <Card.Img variant="top" src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1669803197/CV/mongodb_ocdzru.png" />
            </Card>
        </div>
        </>
    )
}

export default Icons