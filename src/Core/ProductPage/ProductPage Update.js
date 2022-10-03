import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// NavBar Import
import Menu from '../Menu/Menu';

// Import API
import {getSingleProduct} from '../ApiCore';
import ShowImage from '../ShowImage/ShowImage';

const ProductPage = (cssClassName = "",) => {

    const [product, setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [error, setError] = useState(false);

    // Load Product
    const{ productId } = useParams(); // Fetching Product Id from URL

    useEffect(() => {
        loadSingleProduct(productId);
    }, [productId]);
    
    const loadSingleProduct = (productId) => {
        getSingleProduct(productId).then((data) => {
            if(data.error) {
                setError(data.error);
            }
            else{
                setProduct(data);
                // console.log(data);
            }
        });
    }
    console.log(product._id);

  return (
    <div>
        <Menu />

        <Container>
            <Row>
                <Col md={8} className="mt-4">
                    <ShowImage cssClassName={cssClassName} item={product}/>
                </Col>
                <Col md={4}>
                    <h3 className='mt-4'>{product.name}</h3>
                    <hr/>
                    <p>Price: {product.price}</p>
                    <p>Description: {product.description}</p>
                </Col>
            </Row>
        </Container>
    </div>
    
  )
}

export default ProductPage;