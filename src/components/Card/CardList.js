import React, { Fragment } from 'react';
import Card from './Card'

const CardList = ({ robots }) => {
    const cardsArray = robots.map((user, i) => {
        return (<Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
        />)
    })
    return (
        <Fragment>
            {cardsArray}
        </Fragment>
    )
}

export default CardList;