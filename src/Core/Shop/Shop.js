import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// API
import { getCategory, getFilterProduct } from '../ApiCore';

//components
import Card from '../../Core/Card/Card';
import Layout from '../Layout/Layout';
import Checkbox from '../Checkbox/Checkbox';
import Radiobox from '../Checkbox/Radiobox';

import {prices} from '../fixedPrice';

const Shop = () => {
    //state
    const [categories, setCategories] = useState([]);
    const [myFilter, setMyFilter] = useState({
      filter: {
        category: [],
        price: []
      }
    });
    const [error, setError] = useState(false);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(0);
    const [limit, setLimit] = useState(6);
    const [result, setResult] = useState([]);


    // Load All Category
    const loadCategory = () => {
        getCategory().then((data) => {
            if (data.error) console.log(data.error);

            setCategories((categories) => data);
        });
    };

    //load filter Product
    const loadFilterResult = (newFilters) => {
      getFilterProduct(skip, limit, newFilters)
        .then((data) => {
          if(data.error) {
            setError(data.error);
          } 
          else {
            setResult(data.data);
            setSize(data.size);
            setSkip(0);
          }
        });
    }

    // handle filters
    const handleFilters = (filters, filterBy) => {
      const newFilters = {...myFilter};
      newFilters.filter[filterBy] = filters;
      if(filterBy === "price") {
        let priceValue = handlePrice(filters);
        newFilters.filter[filterBy] = priceValue;
      }
      loadFilterResult(myFilter.filter);
      setMyFilter(newFilters);
    };

    const handlePrice = (value) => {
      let data = prices;
      let arr = [];
      for(let key in data) {
        if(data[key]._id === parseInt(value)) {
          arr = data[key].array;
        }
      }
      console.log(data);
      return arr;
    }

    // useEffect
    useEffect(() => {
        loadCategory();
        loadFilterResult(skip, limit, myFilter.filter);
    }, []);
    
    return (
      <Layout>
        <Container fluid>
          <Row>
            <Col md={3} className="pl-5">
              <h4>Filters By Category</h4>
              <ul>
                <Checkbox categories={categories} handleFilters={(filters) => handleFilters(filters, "category")} />
              </ul>
              <h4>Filters by Price</h4>
              <div>
                <Radiobox price={prices} handelFilters={(filters) => handleFilters(filters, "price")} />
              </div>
            </Col>
            <Col md={9}>
            <Container>
              <h2 className="mb-4">Products</h2>
              <Row>
                {result.map((prodcut, i) => (
                  <Col md={3} key={i} className="mb-3">
                    <Card product={prodcut} />
                  </Col>
                ))}
              </Row>
            </Container>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
};

export default Shop;