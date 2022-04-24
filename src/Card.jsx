import React from 'react';

export const Card = ({ image, title, desc }) => {
    return (
        <>
            <div className="card fadeInUp" style={{ width: "300px" }}>
                <img src={image} className="card-img-top" alt="image" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <a href="#" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </>
    )
}