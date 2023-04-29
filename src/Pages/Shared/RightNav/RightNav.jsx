import React from 'react';
import './RightNav.css';
import { FaGoogle, FaGithub, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import qzone1 from '/public/img/qZone1.png';
import qzone2 from '/public/img/qZone2.png';
import qzone3 from '/public/img/qZone3.png';

const RightNav = () => {
    return (
        <div>
            <div>

                <h1 className="common-title mb-3">Login With</h1>
                <div>
                    <button className="btn mb-3 w-100 btn-lg btn-outline-info"><FaGoogle /> Login with Google</button>
                    <button className="btn w-100 btn-lg btn-outline-info"><FaGithub /> Login with Github</button>
                </div>

                <h1 className="common-title mb-3 mt-5">Find us on</h1>
                <ListGroup>
                    <ListGroup.Item className="py-3"><FaFacebookF /><Link className="text-decoration-none text-black" to="">Facebook</Link></ListGroup.Item>
                    <ListGroup.Item className="py-3"><FaTwitter /><Link className="text-decoration-none text-black" to=""> Twitter</Link></ListGroup.Item>
                    <ListGroup.Item className="py-3"><FaInstagram /><Link className="text-decoration-none text-black" to=""> Instagram</Link> </ListGroup.Item>
                </ListGroup>

                <div className="qzone text-center" style={{background: '#F3F3F3'}}>
                    <h1 className="common-title pt-3 ps-2 text-start mb-3 mt-5">Q-Zone</h1>
                    <img src={qzone1} className="my-3" alt="" />
                    <img src={qzone2} className="my-3" alt="" />
                    <img src={qzone3} className="my-3" alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightNav;