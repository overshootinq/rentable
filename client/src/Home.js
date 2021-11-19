import { React } from 'react';
import { useState, useEffect } from 'react'

function Home(){
    const [houses, setHouses] = useState([])
    const [recentHouses, setRecentHouses] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000')
        .then(response => response.json())
        .then(data => setHouses(data));
    }, []);

    useEffect(() => {
        let twoHouses = houses.slice(-2)
        setRecentHouses(twoHouses);
    }, [houses]);

    function renderRecentHouses() {
        
        return recentHouses.map((property) =>{
            return (
                <div className="parent">
                    <div className="child">
                        <img src={`${property.img_url}`} className=""/>
                        <p className="">{property.property_type}</p>
                        <p className="">e-mail: {property.contact_info}</p>
                        <p className="">Price: ${property.price}</p>
                        <p className="">Beds: {property.beds}</p>
                        <p className="">Baths: {property.baths}</p>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="house-container">
        {renderRecentHouses()}
        </div>
    );
    
}

export default Home;