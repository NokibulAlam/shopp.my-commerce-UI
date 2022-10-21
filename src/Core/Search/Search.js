import React, { useState, useEffect } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

// API
import {getCategory} from '../ApiCore';

const Search = () => {
    //state
    const [data, setData] = useState({
        categories: [],
        category: "",
        search: "",
        result: [],
        searched: false,
    });

    const {categories, category, search, result, searched} = data;

    // Load All Category
    const loadCategory = () => {
        getCategory().then((data) => {
            if(data.error) console.log(data.error);

            setData({...data, categories: data});
        })
    }

    // useEffect
    useEffect(() => {
        loadCategory();
    },[])
    return (
        <div>
            {categories.map((category, i) => {
                return (
                    <div key={i}>{category.name}</div>
                )
            })}
        </div>
    )
}

export default Search;