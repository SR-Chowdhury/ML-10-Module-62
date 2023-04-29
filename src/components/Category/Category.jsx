import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {

    const { id } = useParams();
    const categoryNews = useLoaderData();

    return (
        <div>
            <h1>Category: {categoryNews.length}</h1>
            {
                categoryNews.length > 1 ?
                categoryNews.map(news => <NewsCard key={news._id} news = {news}/>) :
                <h3 className='text-center mt-5'>No News</h3>
            }
            
        </div>
    );
};

export default Category;