import React from 'react';
import { Link } from "react-router-dom";
import CardStyles from '../Styles/CardStyles';

function Card({breweries}) {
    const item = breweries;
    return (
        <CardStyles>
            <ul>
                <Link to={`/brewery/${item.id}`}><h3>{item.name}</h3></Link>
                <li>Brewery Type: {item.brewery_type}</li>
                <li>Address: {item.street} {item.city}, {item.state} {item.postal_code}</li>
                <li>Webste: <a href={item.website_url}>{item.website_url}</a></li>
            </ul>   
        </CardStyles>
    );
}

export default Card;