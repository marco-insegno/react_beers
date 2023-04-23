import React from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import './CardBeer.css';
import { Link } from 'react-router-dom';


function CardBeer(props) {

    const beer = props.beer;

    return (

        <div className="col-12 col-md-4 mb-4">
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
                    <Badge className='badge-custom fs-5'>{beer.abv}°</Badge>


                </Card.Body>

                <Card.Body className='d-flex justify-content-center'>
                    <Card.Title className='card-price py-3 fs-2'>{beer.ebc ? beer.ebc : '10'} €</Card.Title>
                </Card.Body>
                <Card.Body className='p-0'>
                    
                        <div className="d-grid gap-2">
                            <Link to={`/beer/${beer.id}`} className='btn-custom py-2 text-uppercase text-center text-decoration-none fs-4'>
                                Show
                            </Link>
                        </div>
                    

                </Card.Body>
                <Card.Footer style={{ color: '#383838' }} className="d-flex justify-content-end fw-bold">
                    <small className='text-muted'>Since: {beer.first_brewed}</small>
                    </Card.Footer>
            </Card>
        </div>
    )
}

export default CardBeer