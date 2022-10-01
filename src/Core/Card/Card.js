import React, {useState} from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';
import './Card.css';

//Import Component
import ShowImage from '../ShowImage/ShowImage';

const Card = ({
    product,
    viewProductButton = true,
    showAddToCartButton = true,
    cartUpadet = false,
    showRemoveProductButton = false,
    setRun = (f) => f,
    run = undefined,
    cssClassName = "",
}) => {
    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count);

    return (
        <div className='card'>
            <div className='card-header cat-name'>{product.category && product.category.name}</div>
            <div className='card-body'>
                <ShowImage cssClassName={cssClassName} url={"product"} item={product} />
                <p className='p_name'>{product.name}</p>
                <p className='price'>&#2547;{product.price}</p>
                <hr/>
                <p>Last Updated: {moment(product.updatedAt).fromNow()}</p>
            
                {showAddToCartButton && <button className='btn btn-outline-warning mb-2 mt-2'>Add to Cart</button>}

                <Link>
                {viewProductButton && <button className='btn btn-outline-info mb-2 mt-2' style={{ marginLeft : 10 }}>View Product</button>}
                </Link>
            </div>
        </div>
    )
}

export default Card;