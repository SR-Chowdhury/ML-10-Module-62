import React, { useState, useEffect } from 'react';
import './LeftNav.css';

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
            <h1 className="common-title mb-3">All Category</h1>

            <div className="left-nav-top-section text-center">
                {
                    categories.map(category => <p className="single-category" key={category.id}>{category.name}</p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;
