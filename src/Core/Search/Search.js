import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// API
import { getCategory, getSearchedProducts } from '../ApiCore';

//css
import './Search.css';

//components
import Card from '../../Core/Card/Card';

const Search = () => {
    //state
    const [data, setData] = useState({
        categories: [],
        category: "",
        search: "",
        result: [],
        searched: false,
    });

    const { categories, category, search, result, searched } = data;

    // Load All Category
    const loadCategory = () => {
        getCategory().then((data) => {
            if (data.error) console.log(data.error);

            setData({ ...data, categories: data });
        })
    }

    // useEffect
    useEffect(() => {
        loadCategory();
    }, []);

    const searchHandler = (name) => (event) => {
        setData({ ...data, [name]: event.target.value, searched: false });
    }

    //get Search Result
    const searchData = () => {
        // console.log(search, category);
        if (search) {
            getSearchedProducts({
                search: search || undefined,
                category: category || "All"
            })
                .then((products) => {
                    if (products.error) console.log(products.error);
                    setData({ ...data, result: products, searched: true });
                    // console.log(products);
                })
        }
    }

    // form submit
    const searchSubmit = (e) => {
        e.preventDefault();
        searchData();
    }

    const showSearhMSG = (searched, result) => {
        if (searched && result.length > 0) {
            return `Found ${result.length} Products`;
        }
        else if (searched && result.length <= 0) {
            return `No Products Found!`;
        }
    };

    const showSearchProduct = (productData = []) => {
        return (
            <Container>
                <h3 className="mt-4 mb-4 ml-4 searchResult"> {showSearhMSG(searched, result)} </h3>
                <Row>
                    {productData.map((product, i) => (
                        <Col md={3} key={i}>
                            <Card product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }

    const searchBarForm = () => {
        return (
            <form onSubmit={searchSubmit}>
                <span className='input-group-text'>
                    <div className='input-group input-group-lg'>
                        <div className='input-group-prepend'>
                            <select className='btn mr-2' style={{ textAlign: "left" }} onChange={searchHandler("category")}>
                                <option value="All">All</option>
                                {categories.map((category, i) => (
                                    <option key={i} value={category._id}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                        <input type="search" className='form-control' placeholder='Search Item...' onChange={searchHandler("search")} />
                    </div>
                    <div className='btn input-group-append' style={{ border: "none" }}>
                        <button className='input-group-text'>Search</button>
                    </div>
                </span>
            </form>
        );
    };

    return (
        <div>
            <div className='mb-3 mt-3'>{searchBarForm()}</div>
            {showSearchProduct(result)}
        </div>
    );
};

export default Search;