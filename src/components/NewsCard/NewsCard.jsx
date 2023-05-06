import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NewsCard.css';
import moment from 'moment';
import { FaEye, FaRegBookmark, FaShareAlt, FaRegStar, FaStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const NewsCard = ({ news }) => {

    const { _id, category_id, title, author, image_url, details, rating, total_view } = news;

    return (
        <Card className='singleNewsCard'>
            <Card.Header className='d-flex align-items-center'>
                <div className='singleCardImg me-2'>
                    <img src={author.img} alt="" />
                </div>
                <div className='flex-grow-1'>
                    <p className='authorName'>{author.name}</p>
                    <p className='publishDate'>{moment(author.published_date).format('YYYY-M-D')}</p>
                </div>
                <div>
                    <FaRegBookmark /><FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body className='p-3'>
                <Card.Title>{title}</Card.Title>
                <Card.Img className='my-3' variant="top" src={image_url} />
                <Card.Text style={{ textAlign: 'justify' }}>
                    {details.length < 250 ? details : <span>{details.slice(0, 250)}... &nbsp; <Link to={`/news/${_id}`}>Read More</Link></span>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex'>
                <div className='d-flex align-items-center flex-grow-1'>
                    <div>
                        <Rating style={{ maxWidth: 150 }} value={rating.number} readOnly />
                    </div>
                    <div className='mt-1 ms-2'>
                        {rating.number}
                    </div>
                </div>
                <div>
                    <small className="text-muted"><FaEye /> {total_view ? total_view : <span className='text-muted'>0</span>} </small>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;