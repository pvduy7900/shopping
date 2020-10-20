import React from 'react'

export default function (props) {

    console.log(props)
    let data = props.product
    return (
        <div>
            <ul className="products">
                {data.product.map(product => (
                    <li key={data.product._id}>
                        <div className="product">
                            <a href={"#" + data.product._id}>
                                <img src={data.product.image} alt={data.product.title}></img>
                                <p>{data.product.title}</p>
                            </a>
                            <div className="propduct-price">
                                <div>
                                    {data.product.price}
                                </div>
                                <button className="button-primary">Add to Cart</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
