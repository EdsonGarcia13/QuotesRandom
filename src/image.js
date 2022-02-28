import React from 'react';
import users from './users.json';

const Image = () => {
    const imagen = users[Math.floor(Math.random() * users.length)];

    return (
        <div>
            <img src={imagen.picture.large} alt="" />
        </div>
    );
};

export default Image;