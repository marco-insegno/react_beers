import React from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import './ModalBeer.css'

function ModalBeer(props) {

    const beer = props.beer;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                centered
            >
                <Modal.Header closeButton className="modal-header-custom">

                </Modal.Header>
                <Modal.Body 
                className="d-flex justify-content-evenly modal-body-custom" style={{ 
                    background: `linear-gradient(rgba(255, 255, 255, 0.8),rgb(255, 255, 255, 0.7)),url(${beer.image_url})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize:'auto'
                }}>

                    <div className="position-relative col-6">
                        <img src={beer.image_url} alt={beer.name} height='100%' className='ms-5'/>

                        <div className="abv-modal">
                            <span>{`${beer.abv}°`}</span>
                        </div>

                    </div>


                    <div className="box-modal-description col-6 text-end h-100">
                        <Modal.Title className='mb-4 fw-bolder'>{beer.name}</Modal.Title>

                        <p className="text-uppercase mb-2">Food Pairing:</p>
                        <div className="food-pairing-modal">

                            


                            {beer.food_pairing && beer.food_pairing.map((food, index) => {

                                return (
                                    <p key={index} className="fst-italic">{food}</p>
                                )
                            })}

                        </div>

                        <div className="price-modal d-flex justify-content-center align-items-center h-25">
                            <p className='display-5 mt-5'>{beer.ebc ? beer.ebc : '10'} €</p>
                        </div>




                    </div>



                </Modal.Body>
                <Modal.Footer className='position-relative modal-footer-custom'>

                    <p className='position-absolute start-0 ms-3'>{beer.first_brewed}</p>

                    <Button variant="secondary" onClick={handleClose} className="btn-custom">
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalBeer