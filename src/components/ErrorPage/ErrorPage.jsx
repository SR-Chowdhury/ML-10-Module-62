import React from 'react';
import useSetTitle from '../../Hooks/useSetTitle';

const ErrorPage = () => {

    useSetTitle('Error');

    return (
        <div className= "text-center mt-5" >
            <h1><strong>Oops!</strong></h1>
            <p>Sorry, an unexpected error has occurred.</p>
        </div>
    );
};

export default ErrorPage;