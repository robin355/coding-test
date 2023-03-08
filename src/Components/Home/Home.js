import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='p-[200px] '>
            <button className='btn btn-outline btn-primary'>
                <Link to='/problem-one'>
                    Problem One
                </Link>
            </button>
            <button className='btn btn-outline btn-primary mr-5'>
                <Link to='/problem-two'>
                    Problem Two
                </Link>
            </button>
        </div>
    );
};

export default Home;