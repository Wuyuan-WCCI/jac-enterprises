import { useState, useEffect } from 'react';

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
      const dataText = await response.text(); // Read the raw text
      console.log('Response text:', dataText); // Log the response text
      const data = JSON.parse(dataText); // Attempt to parse the JSON
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
      <ul>
      
        {objectDetails.map((object) => (
            
          <li key={object.objectID}>
            <h2>Title: {object.title}</h2>
            <p>Object ID: {object.objectID}</p>
            <p>{object.artistDisplayName}</p>
            <p>Year: {object.objectDate}</p>
            {object.primaryImage && (
  <img src={object.primaryImage} alt={object.title} />
)}
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
