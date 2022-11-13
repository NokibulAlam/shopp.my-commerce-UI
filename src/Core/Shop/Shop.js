import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// API
import { getCategory } from '../ApiCore';

//components
import Card from '../../Core/Card/Card';
import Layout from '../Layout/Layout';

const Shop = () => {
    //state
    const [categories, setCategories] = useState([]);
    const [filter, setFilter] = useState({
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
    }

    // useEffect
    useEffect(() => {
        loadCategory();
    }, []);

    console.log(categories);
    
    return (
      <Layout>
        
      </Layout>
    );
};

export default Shop;