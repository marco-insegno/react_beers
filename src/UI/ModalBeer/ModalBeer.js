import React from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function ModalBeer(props) {

    const beer = props.beer;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(beer);
    return (

        <>

            <tr style={{ cursor: 'pointer' }} onClick={handleShow}>
                <td>{beer.name}</td>
                <td>{beer.first_brewed}</td>
                <td>{beer.abv}°</td>
                <td className="price-tab p-0 ps-2">{beer.ebc ? beer.ebc : '10'} €</td>
            </tr>
            <Modal
                show={show}
                onHide={handleClose}

            >
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body className='d-flex flex-column'>
                    <div className="col-12 col-md-6">
                        <img src={beer.image_url} alt={beer.name}/>
                    </div>
                    <div className="col-12 col-md-6">
                        <Modal.Title>{beer.name}</Modal.Title>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalBeer