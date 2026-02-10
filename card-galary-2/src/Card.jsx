import React from 'react'

const Card = ({ id, name, price, category }) => {
    return (
        <div style={{ border: "1px solid black", margin: "30px" }}>
            id : {id} <br />
            name: {name} <br />
            price: {price} <br />
            category: {category} <br />
        </div>
    )
}

export default Card