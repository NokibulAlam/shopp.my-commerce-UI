import React, {useState} from 'react'
import moment from 'moment'; // For calculate time
import { Link } from 'react-router-dom';
import './Card.css';
import Badge from 'react-bootstrap/Badge';

//Import Component
import ShowImage from '../ShowImage/ShowImage';


const Card = ({
    product,
    viewProductButton = true,
    showAddToCartButton = true,
    cartUpdate = false,
    showRemoveProductButton = false,
    setRun = (f) => f,
    run = undefined,
    cssClassName = "",
}) => {

    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count);

    const inStock = () => {
        showAddToCartButton = false;
        return (
            <Badge className="mb-2" bg="danger">Out of Stock</Badge>
        )
    }

    return (
        <div className='card'>
            <div className='card-header cat-name'>{product.category && product.category.name}</div>
            <div className='card-body'>
                {product.quantity > 0 ? (<Badge className="mb-2" bg="success">In Stock</Badge>) : inStock()}
                <ShowImage cssClassName={cssClassName} url={"product"} item={product} />
                <p className='p_name'>{product.name}</p>
                <p className='price'>&#2547;{product.price}</p>
                <hr/>
                <p>Last Updated: {moment(product.updatedAt).fromNow()}</p>
            
                {showAddToCartButton && <button className='btn btn-outline-warning mb-2 mt-2'  style={{ marginRight : 10 }}>Add to Cart</button>}

                <Link to={`/product/${product._id}`}>
                {viewProductButton && <button className='btn btn-outline-info mb-2 mt-2'>View Product</button>}
                </Link>
            </div>
        </div>
    )
}

export default Card;