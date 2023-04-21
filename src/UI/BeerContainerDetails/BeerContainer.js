import React from 'react'
import BeerBoxImage from './BeerBoxImage/BeerBoxImage';
import BeerBoxDetails from './BeerBoxDetails/BeerBoxDetails';

function BeerContainer(props) {

    const beer = props.beer;

    return (
        <>
            
            <BeerBoxImage beer={beer} />
            <BeerBoxDetails beer={beer} />

        </>
    )
}

export default BeerContainer