import React from 'react'
// import Resource from '../Resource/resource'
import './resources.css'
import { Card, Row, Col } from 'react-bootstrap';
import { resources } from '../../data.js';

const Resources = () => {
  return (
    <div className="rl">
      <h1 className="rl-title">Resources</h1>
      <div className="rl-list">
        <Row>
        {resources.map((item) => (
        <Col sm={6} md={4} lg={3} >
          <Card className='mb-3'>
            <Card.Img classname="card-img-top" variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text className='card-desc'>
                {item.desc}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        ))}
        </Row>
      </div>
    </div>
  )
}

export default Resources