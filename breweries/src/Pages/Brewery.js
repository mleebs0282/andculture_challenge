import { useParams } from "react-router-dom";
import React,{useState,useEffect} from 'react';
import Container from "../Styles/Container";
import Map from "../Components/Map";

function Brewery() {
    const { id } = useParams();
    const [data,setData]=useState([]);
    const getData = () =>
    {
        fetch(`https://api.openbrewerydb.org/breweries/${id}`,
        {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(function(response){
            return response.json();
        })
        .then(function(myJson) {
            setData(myJson);
        });
    }
    useEffect(()=>{
        getData()
    },[]);
    return (
        <Container>
            <h2>{data.name}</h2>
            {data.street !== null &&
                <h3>{data.street}</h3>
            }
            <h3>{data.city}, {data.state} {data.postal_code}</h3>
            <h3>{data.website_url}</h3>
            <Map data={data} />
        </Container>
    );
}

  export default Brewery;