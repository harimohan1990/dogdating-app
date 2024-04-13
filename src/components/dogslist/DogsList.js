import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import './DogsList.scss';

import labradorImage from '../Assests/Images/dogfour.jpg';
import germanShepherdImage from '../Assests/Images/dogone.jpg';
import goldenRetrieverImage from '../Assests/Images/dogthree.jpg';
import bulldogImage from '../Assests/Images/dogtwo.jpg';
import poodleImage from '../Assests/Images/dogtwo.jpg';

const dogBreeds = [
  { breed: 'Labrador Retriever', name: 'Buddy', image: labradorImage },
  { breed: 'German Shepherd', name: 'Max', image: germanShepherdImage },
  { breed: 'Golden Retriever', name: 'Bailey', image: goldenRetrieverImage },
  { breed: 'Bulldog', name: 'Daisy', image: bulldogImage },
  { breed: 'Poodle', name: 'Charlie', image: poodleImage }
];

const DogsList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDogBreeds, setFilteredDogBreeds] = useState(dogBreeds);

  const handleSearchInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredBreeds = dogBreeds.filter(
      (dog) =>
        dog.breed.toLowerCase().includes(query) ||
        dog.name.toLowerCase().includes(query)
    );
    setFilteredDogBreeds(filteredBreeds);
  };

  return (
    <div className='dogslist__main'>
      <div className='dogslist_filter'>
        <input
          type='text'
          placeholder='Search for dogs here...'
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className='dogs_filter__panel'>
        <div className='dogs_descrioption_icon'>
          <span>All filter</span>
          <FontAwesomeIcon icon={faFilter} />
        </div>
        <div className='dogslist_filterpannel'></div>
      </div>
      <div className='dogslist_list'>
        <div className='dogslist_wrapper'>
          {filteredDogBreeds.length > 0 ? (
            filteredDogBreeds.map((dog, index) => (
              <div key={index} className='dog-item'>
                <img src={dog.image} alt={dog.breed} />
                <p>Name: {dog.name}</p>
                <p>Breed: {dog.breed}</p>
                <button>choose me</button>
              </div>
            ))
          ) : (
            <div className='not-found-message'>
              <p>No dogs found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DogsList;
