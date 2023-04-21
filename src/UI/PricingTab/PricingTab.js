import React from 'react'
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react'
import './PricingTab.css'
import ModalBeer from '../ModalBeer/ModalBeer';




function PricingTab() {

    const [beers, setBeers] = useState([])

    useEffect(() => {

        fetch('https://api.punkapi.com/v2/beers/')
            .then((response) => response.json())
            .then(data => setBeers(data))

    }, [])

    return (

        <section className="container my-5">

            <div className="row">
                <h2>Prices 2023</h2>
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