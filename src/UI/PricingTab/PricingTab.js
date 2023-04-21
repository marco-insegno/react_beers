import React from 'react'
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react'
import './PricingTab.css'
import ModalBeer from '../ModalBeer/ModalBeer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




function PricingTab() {

    const [beers, setBeers] = useState([])

    useEffect(() => {

        fetch('https://api.punkapi.com/v2/beers/')
            .then((response) => response.json())
            .then(data => setBeers(data))

    }, [])

    return (

        <section className="container mt-5">

            <div className="row">

                <div className="col-12">
                    <h2>Prices 2023</h2>
                </div>

            </div>

            <div className="row d-flex justify-content-end my-3">
            <div className="col-12 col-md-4">
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search..."
                            className="me-2"
                            aria-label="Search"
                        />
                        <button className='btn btn-custom-2'>Search</button>
                    </Form>
                </div>
            </div>
            <div className="row">
                <div className="col-12">

                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr className='text-uppercase' style={{ color: 'var(--color-yellow)' }}>
                                <th>Name</th>
                                <th>First Brewed</th>
                                <th>Abv</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>

                            {beers && beers.map((beer) => {

                                return (

                                    <ModalBeer key={beer.id} beer={beer} />

                                )
                            })

                            }

                        </tbody>
                    </Table>

                </div>
            </div>



        </section>


    )
}

export default PricingTab