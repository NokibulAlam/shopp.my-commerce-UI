import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// API
import { getCategory } from '../ApiCore';

//css
import './Search.css';

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

    const searchBarForm = () => {
        return (
            <form>
                <span className='input-group-text'>
                    <div className='input-group input-group-lg'>
                        <div className='input-group-prepend'>
                            <select className='btn mr-2'>
                                <option value="All">All</option>
                                {categories.map((category, i) => (
                                    <option key={i} value={category._id}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                        <input type="search" className='form-control' placeholder='Search Item...'/>
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
            <div className='my-3'>{searchBarForm()}</div>
        </div>
    );
};

export default Search;