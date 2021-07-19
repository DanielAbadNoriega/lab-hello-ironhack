import React from 'react';

function Card (props) {
    return (
        <div className='container'>
            <div className="card mb-3 row align-items-start col-3">
                <img src={props.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.tittle}</h5>
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;