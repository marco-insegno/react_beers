import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import './CardBeer.css';


function CardBeer(props) {

    const beer = props.beer;

    return (
        <Card className="card-custom">
            <Card.Header>
                <div
                    className="my-4"
                    style={{
                        background: `url(${beer.image_url})`, backgroundSize: 'auto 300px',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height: '300px',
                    }}>

                </div>
            </Card.Header>
            <Card.Body className="card-body-custom">
                <Card.Title className='text-uppercase my-4 text-center'>{beer.name.slice(0, 20)}</Card.Title>
                <Card.Text as="h6" className='fst-italic text-center'>"{beer.tagline.replace('.', '')}"</Card.Text>
                <Badge className='badge-custom fs-5'>{beer.ph}°</Badge>
                

            </Card.Body>

            <Card.Body className='d-flex justify-content-center'>
                <Card.Title className='card-price py-3 fs-2'>{beer.ebc} €</Card.Title>
            </Card.Body>
            <Card.Body className='p-0'>
                <Card.Link href="#" className='text-decoration-none '>
                    <div className="d-grid gap-2">
                        <Button size="lg" className='btn-custom text-uppercase'>
                            More
                        </Button>

                    </div>
                </Card.Link>

            </Card.Body>
            <Card.Footer style={{ color: '#383838' }}className="d-flex justify-content-end fw-bold">{beer.ph}°</Card.Footer>
        </Card>
    )
}

export default CardBeer