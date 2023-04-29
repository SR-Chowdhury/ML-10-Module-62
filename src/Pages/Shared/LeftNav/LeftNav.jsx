import React, { useState, useEffect } from 'react';
import './LeftNav.css';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err))

    }, []);

    return (
        <div>
            <div style={{ border: '1px solid #ddd', padding: '8px 0px'}}>
                <h1 className="common-title mb-3 text-center">All Category</h1><hr />
                <div className="left-nav-top-section text-center">
                    {
                        categories.map(category =>
                            <p className="single-category" key={category.id}>
                                <Link className="single-category" to={`/category/${category.id}`}>{category.name}</Link>
                            </p>)
                    }
                </div>
            </div>

        </div>
    );
};

export default LeftNav;
