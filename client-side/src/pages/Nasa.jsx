import  { useState, useEffect } from 'react';
import './Nasa.css'

const Nasa = () => {
  const [collection, setCollection] = useState([]);

  const baseUrl = 'http://localhost:8080/nasa/search-images?query=';
  const query = 'galaxy';

  useEffect(() => {
    const fetchNasaData = async () => {
      try {
        const response = await fetch(baseUrl+query);
        if (!response.ok) {
          throw new Error('Response is not right');
        }
        const data = await response.json();
        setCollection(data.collection.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchNasaData();
  }, []);

  return (
    <div>
      <h1>NASA Collection</h1>
      <ul className='image-list'>
        {collection.map((item, index) => (
          <li key={index} className='image-item'>
            <div>
              <img
                src={item.links[0].href}
                alt={`Image ${index}`}
                className='image'
              />
              <h3>Title: {item.data[0].title}</h3>
              <p>Date Created: {item.data[0].date_created}</p>
              <p>Description: {item.data[0].description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nasa;

