import React from 'react'
import {Container ,Card, Col, Button} from 'react-bootstrap';  
import { Link } from 'react-router-dom';


const Cards = ({data}) => {
    console.log(data);
    return (
        <div style={{margin:'40px'}}>
            <Card>
                <Card.Img variant="top" src={data.img} />
                <Card.Body>
                    <Card.Title><h1>{data.name}</h1></Card.Title>
                    <h5>{data.type}</h5>
                    <Card.Text>{data.desc}</Card.Text>
                    <h3 variant="btn-success">Funding Req : {data.year}</h3>
                    <Link to={`/showdetails/${data._id}`} className="btn btn-success mx-2"><i className='fas fa-eye'></i></Link>
                    <Button className='mx-3' variant="primary">Invest</Button>
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards