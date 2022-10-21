import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap';

//  Import Components
import Layout from '../Layout/Layout'
import Card from '../Card/Card';
import Search from '../Search/Search';

// Import API
import { getProducts } from '../ApiCore';

const Home = () => {
  const [productBySell, setProductBySell] = useState([]);
  const [productByArival, setProductByArival] = useState([]);
  const [error, setError] = useState(false);

  // Get New Product
  const loadProductByArival = () => {
    getProducts("createdAt").then((data) => {
      if(data.error){
        setError(true);
      }
      else{
        setProductByArival(data);
      }
    });
  };

  // Get Best Selling Product
  const loadProductBySell = () => {
    getProducts("sold")
      .then((data) => {
        if(data.error) {
          setError(true);
        }
        else {
          setProductBySell(data);
        }
      });
  };

  // Load Initial product
  useEffect(() => {
    loadProductByArival();
    loadProductBySell();
  }, []);

  return (
    <Layout title="Welcome to Shopp.my Commerce" description="This is the Home page" classname="container-fluid">
      
      <Container>
        <Row>
          <Col md={12}>
            <Search />
          </Col>
        </Row>
      </Container>

      <Container>

        <h2 className="mb-4">Best Selling Products</h2>
        <Row>
          {productBySell.map((product, i) => (
            <Col md={4} lg={3} sm={6} className="mb-3" key={i}  data-aos="zoom-in">
              <Card product={product}/>
            </Col>
          ))}
        </Row>

        <h2 className="mb-4">New Arival Products</h2>
        <Row>
          {productByArival.map((product, i) => (
            <Col md={4} lg={3} sm={6} className="mb-3" key={i} data-aos="zoom-in">
              <Card product={product}/>
            </Col>
          ))}
        </Row>
        
      </Container>
    </Layout>
  )
}

export default Home;