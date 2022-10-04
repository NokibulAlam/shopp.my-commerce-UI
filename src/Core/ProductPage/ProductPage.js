import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// NavBar Import
import Menu from '../Menu/Menu';

// Import API
import { getSingleProduct, getRelatedProducts } from '../ApiCore';

// Import Component
import Card from '../Card/Card';
import ShowImage from '../ShowImage/ShowImage';

// Import Css
import './ProductPage.css';

const ProductPage = (cssClassName = "", showAddToCartButton = true) => {

    const [product, setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [error, setError] = useState(false);

    // Load Product
    const { productId } = useParams(); // Fetching Product Id from URL

    useEffect(() => {
        loadSingleProduct(productId);
    }, [productId]);

    const loadSingleProduct = (productId) => {
        getSingleProduct(productId).then((data) => {
            if (data.error) {
                setError(data.error);
            }
            else {
                setProduct(data);
                getRelatedProducts(data._id).then((related) => {
                    if (related.error) {
                        setError(related.error);
                    }
                    else {
                        setRelatedProduct(related);
                        // console.log(related);
                    }
                })
                // console.log(data);
            }
        });
    }
    // console.log(product._id);

    return (
        <div>
            <Menu />

            <Container>
                <Row>
                    <Col md={8} className="mt-4 mb-4 img-shadow">
                        <ShowImage cssClassName={cssClassName} url={"product"} item={product}/>
                    </Col>
                    <Col md={4}>
                        <h3 className='mt-4'>{product.name}</h3>
                        <hr />
                        <p>Price: {product.price}</p>
                        <p>Description: {product.description}</p>
                        {showAddToCartButton && <button className='btn btn-outline-warning mb-2 mt-2'>Add to Cart</button>}
                    </Col>
                </Row>

                <Row>
                    <h2 className="mb-4">Related Products</h2>
                    {relatedProduct.map((product, i) => {
                        return (
                            <Col md={3} key={i}>
                                <Card product={product} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>

        </div>
    )
}

export default ProductPage;