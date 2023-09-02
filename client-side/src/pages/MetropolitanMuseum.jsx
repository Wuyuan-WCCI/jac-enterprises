import { useState, useEffect } from 'react';
import './Style.css'

const MetropolitanMuseum = () => {
  const [objectDetails, setObjectDetails] = useState([]);
  const baseUrl = 'http://localhost:8080/metromuseum/search-object-details';

  // Define fetchObjectDetails function
  const fetchObjectDetails = async () => {
    try {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error('Response is not right');
      }
      const data = await response.json(); 
  
      setObjectDetails(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  

  useEffect(() => {
    // Call the fetchObjectDetails function
    fetchObjectDetails();
  }, []); // Empty dependency array to run this effect only once

  console.log("OBJECTDETAILS: " + objectDetails);
  
  return (
    <div >
      <h1>Museum Object Details</h1>
      <ul className='image-list'>
      
        {objectDetails.map((object) => (
            
          <li key={object.objectID} className='image-item'>
          {object.primaryImage && (
  <img src={object.primaryImage} alt={object.title+'No Image'} className='image'/>
)}
            <h2>Title: {object.title}</h2>
            <p>Object ID: {object.objectID}</p>
            <p>{object.artistDisplayName}</p>
            <p>Year: {object.objectDate}</p>
            <a href={object.objectURL} target="_blank" rel="noopener noreferrer">
              View Details
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MetropolitanMuseum;
