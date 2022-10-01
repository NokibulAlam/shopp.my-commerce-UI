import React, {useState, useEffect} from 'react'
import Layout from '../Layout/Layout'

// Import API
import { getProducts } from '../ApiCore';

const Home = () => {
  const [productBySell, setProductBySell] = useState([]);
  const [productByArival, setProductByArival] = useState([]);
  const [error, setError] = useState(false);

  // Get New Product
  // const loadProductByArival = () => {
  //   getProducts("createdAt").then((data) => {
  //     if(data.error){
  //       setError(true);
  //     }
  //     else{
  //       setProductByArival(data);
  //       console.log(data);
  //     }
  //   });
  // };

  // Get Best Selling Product
  const loadProductBySell = () => {
    getProducts("sold")
      .then((data) => {
        if(data.error) {
          setError(true);
        }
        else {
          setProductBySell(data);
          console.log(data);
        }
      });
  };

  // Load Initial product
  useEffect(() => {
    // loadProductByArival();
    loadProductBySell();
  }, []);

  return (
    <Layout title="Home" description="This is the Home page">
            
    </Layout>
  )
}

export default Home