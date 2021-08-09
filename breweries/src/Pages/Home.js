import React,{useState,useEffect} from 'react';
import Card from '../Components/Cards';
import FlexContainer from '../Styles/FlexContainer';

function Home() {
    const [data,setData]=useState([]);
    const getData=()=>{
        fetch('https://api.openbrewerydb.org/breweries',
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
            setData(myJson)
        });
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <FlexContainer>
        {
            data.map((item) =>
                <Card breweries={item} key={item.id} />
            )
        }
        </FlexContainer>
    );
}

  export default Home;