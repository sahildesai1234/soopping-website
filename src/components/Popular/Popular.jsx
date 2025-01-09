import React from 'react';
import './Popular.css';
import data_product from '../Assets/data'; // Import product data
import Item from '../Item/Item'; // Import the Item component
import React from 'react';
import './Item.css'; // Optional: Include styles specific to this component

const Popular = () => {
    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular_item">
                {data_product.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    );
};



const Item = ({ id, name, image, new_price, old_price }) => {
    return (
        <div className="item" key={id}>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>New Price: ${new_price}</p>
            <p>Old Price: ${old_price}</p>
        </div>
    );
};

export default Item;
