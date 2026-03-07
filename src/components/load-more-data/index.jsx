import { useEffect } from "react";
import { useState } from "react";

import './style.css'


export default function LoadMoreData() {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disabledButton, setDisabledButton] = useState(false);

    async function fetchProducts() {
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);

            const result = await response.json();


            if (result && result.products && result.products.length) {
                setProducts([...products, ...result.products]);
                setLoading(false);
            }
            console.log(result);


        } catch (er) {
            console.log(er);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [count])

    useEffect(() => {

        if (products && products.length === 100) setDisabledButton(true);

    }, [products])

    if (loading) {
        return <div>Loading Data | Please Wait</div>
    }



    return <div className="load-more-container">
        <div className="product-container">
            {
                products && products.length ?
                    products.map((productItem) => (
                        <div key={productItem.id} className="product">
                            <img src={productItem.thumbnail} alt={productItem.title} />
                            <div className="prod-desc">
                                <h3>{productItem.title}</h3>
                                <p>{productItem.description}</p>
                            </div>
                        </div>
                    )) : null
            }
        </div>
        <div className="button-container">
            <button type="button" onClick={() => setCount(count + 1)} disabled={disabledButton}>Load More Products</button>
            {
                disabledButton ? <p>You have reached the limit</p> : null
            }
        </div>
    </div>
}