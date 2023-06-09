import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const News = () => {

    const news = useLoaderData();

    const { category_id, title, image_url, details } = news;

    return (
        <div>
            <Card className='singleNewsCard'>
                <Card.Body className='p-4'>
                    <Card.Img className='my-3' variant="top" src={image_url} />
                    <Card.Title>{title}</Card.Title>

                    <Card.Text style={{ textAlign: 'justify' }}>
                        {details}
                    </Card.Text>
                    <div>
                        <Link to={`/category/${category_id}`}><button className="primary-btn me-1"><FaArrowLeft/> All news in this category</button></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;