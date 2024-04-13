import React from 'react';
import TinderCard from 'react-tinder-card';
import './Home.scss'; // Import SCSS file

// Your list of image URLs
const imageList = [
  'https://via.placeholder.com/400x300?text=Image+1',
  'https://via.placeholder.com/400x300?text=Image+2',
  'https://via.placeholder.com/400x300?text=Image+3',
  // Add more image URLs as needed
];

const Home = () => {
  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen');
  };

  return (
    <div className="swipeable-cards">
      {imageList.map((imageUrl, index) => (
        <TinderCard
          key={index}
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen('fooBar')}
          preventSwipe={['right', 'left']}
        >
          <div className="card">
            <img src={imageUrl} alt={`Image ${index}`} />
          </div>
        </TinderCard>
      ))}
      <div>
        
      </div>
    </div>
  );
};

export default Home;
