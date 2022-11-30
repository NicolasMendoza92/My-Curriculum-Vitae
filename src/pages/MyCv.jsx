import React from 'react'
import { Card } from 'react-bootstrap';
import { BsArrowRightSquareFill } from 'react-icons/bs'

const MyCv = () => {

  const goToAllLink = () => {
    const newWindow = window.open('https://www.linkedin.com/company/allcot-trading/');
    if (newWindow) newWindow.opener = null
  }
  const goToABLink = () => {
    const newWindow = window.open('https://www.linkedin.com/company/ab-inbev/');
    if (newWindow) newWindow.opener = null
  }
  const goToDibaLink = () => {
    const newWindow = window.open('https://www.linkedin.com/company/di-bacco-industria-metal%C3%BArgica/');
    if (newWindow) newWindow.opener = null
  }
  const goToUNT = () => {
    const newWindow = window.open('http://www.unt.edu.ar/');
    if(newWindow) newWindow.opener = null
  }
  const goToRolling = () => {
    const newWindow = window.open('https://www.linkedin.com/company/rollingcode/');
    if(newWindow) newWindow.opener = null
  }
  return (
    <>
      <h2 className='text-center divider'>My time line work experience </h2>
      <div className='m-5 text-center d-flex flex-column align-items-center'>
        <div className='d-flex m-3'>
          <div className='d-flex justify-content-center align-items-center m-2'>
            <div className='m-2 btn-time'>
              2021-Now
            </div>
            <BsArrowRightSquareFill />
          </div>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header className='link-empresa' onClick={goToAllLink}>ALLCOT Group</Card.Header>
            <Card.Body>
              <Card.Title>Bussiness Develpoment Coordinator</Card.Title>
              <Card.Text>
                Optimization in delivery of daily progress reports
                Process control and reporting.
                Optimization in operation procces.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='d-flex m-3'>
          <div className='d-flex justify-content-center align-items-center m-2'>
            <div className='m-2 btn-time'>
              2019-2021
            </div>
            <BsArrowRightSquareFill />
          </div>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header className='link-empresa' onClick={goToABLink}>Anheuser-Busch InBev</Card.Header>
            <Card.Body>
              <Card.Title>Regional Commercial Analyst</Card.Title>
              <Card.Text>
                Monitoring and improvement of sales volume KPIs.
                Optimization in delivery of daily progress reports
                Implementation of sales strategies by channels and volume.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='d-flex m-3'>
          <div className='d-flex justify-content-center align-items-center m-2'>
            <div className='m-2 btn-time'>
              2017-2019
            </div>
            <BsArrowRightSquareFill />
          </div>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header className='link-empresa' onClick={goToDibaLink}>Metallurgy Di Bacco y Cia</Card.Header>
            <Card.Body>
              <Card.Title>Quality Manager(QA)</Card.Title>
              <Card.Text>
                In charge of and responsible for the quality sector.
                ISO 9001 certification and SGC audits.
                Resolution of incidents and action plans in the event of deviations in customer satisfaction.
                Implementation of management indicators in conjunction with the commercial area
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <h2 className='text-center divider'>My Education </h2>
      <div className=' m-3 d-flex justify-content-around'>
        <Card border="primary" style={{ width: '18rem' }}>
          <Card.Header className='link-empresa' onClick={goToUNT}>National University of Tucuman</Card.Header>
          <Card.Body>
            <Card.Title>Degree in Industrial Engineer (2014-2019)</Card.Title>
            <Card.Text>
            Dedicated to process optimization and oriented to renewable energies. 
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="primary" style={{ width: '18rem' }}>
          <Card.Header className='link-empresa' onClick={goToRolling}>Rolling Code School</Card.Header>
          <Card.Body>
            <Card.Title>Full Stack Developer (2021)</Card.Title>
            <Card.Text>
            Skills needed to be a freelancer in the area. 
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default MyCv