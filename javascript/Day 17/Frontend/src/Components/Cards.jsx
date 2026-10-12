// import React from "react"
// import "./Carts.css"
const Cards = ({ data }) => {
    return (<>
        <div className="card">
            <div className="card__image">
                <img src={data.image} alt="Product" />
                <span className="card__badge">New</span>
            </div>

            <div className="card__content">
                <div className="card__header">
                    <h3>{data.title}</h3>
                    <span className="card__category">{data.category}</span>
                </div>

                <p className="card__desc">{data.description}</p>

                <div className="card__footer">
                    <span className="card__price">${data.price}</span>
                    <button className="card__btn">Add to Cart</button>
                </div>
            </div>
        </div>
    </>)
}
export default Cards;