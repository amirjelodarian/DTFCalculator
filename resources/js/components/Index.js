import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';

export default function Index() {
    return (
        <div className="container">
            <div className="row justify-content-center main-row">
                <h1 className="dtf-h1">DTF Calculator</h1>
                <Menu film_pet_price={reactInit.film_pet_price} color_price={reactInit.color_price} sugar_price={reactInit.sugar_price} />
            </div>
        </div>
    );
}



if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
