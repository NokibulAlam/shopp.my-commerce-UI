import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom';

// NavBar Import
import Menu from '../Menu/Menu';

// Import API
import {getSingleProduct} from '../ApiCore';

const ProductPage = (props) => {

    const [product, setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [error, setError] = useState(false);

    const loadSingleProduct = (productId) => {
        getSingleProduct(productId).then((data) => {
            if(data.error) {
                setError(data.error);
            }
            else{
                setProduct(data);
                console.log(data);
            }
        })
        
    }

    // Load Product
    const{ productId } = useParams(); // Fetching Product Id from URL

    useEffect(() => {
        loadSingleProduct(productId);
    }, [props]);

  return (
    <Menu />
  )
}

export default ProductPage;