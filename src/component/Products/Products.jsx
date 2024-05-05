import CardsList from '../Card/CardsList.jsx'
import { useEffect, useState } from 'react';
import './Products.css'
import Loading from '../Loading/Loading.jsx';
const Products = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState();
    console.log(products)

    useEffect(() => {
        setLoading(true)
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(productsList => {
                setProducts(productsList)
                setLoading(false)
            })
    }, [])

    return (
        <>
            <div className="productsBox">
                {loading && <Loading />}
                {products.map((item, index) => <CardsList key={index} item={item} />)}
            </div>
        </>
    )



}
export default Products;