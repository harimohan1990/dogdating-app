import React from 'react'

import './Love.scss'
import { useNavigate } from 'react-router-dom';
import labradorImage from '../Assests/Images/dogfour.jpg';
import germanShepherdImage from '../Assests/Images/dogone.jpg';
import goldenRetrieverImage from '../Assests/Images/dogthree.jpg';
import bulldogImage from '../Assests/Images/dogtwo.jpg';
import poodleImage from '../Assests/Images/dogtwo.jpg';


export default function Love() {
  const navigate = useNavigate();
 
    const dogBreeds = [
      { id:1, image: labradorImage },
      { id:2, image: germanShepherdImage },
      { id:3, image: goldenRetrieverImage },
      { id:4 , image: bulldogImage },
      { id:5, image: poodleImage }
    ];
  
    const handleLiked = () => {
      navigate('/match');
  };
  return (
    <div className='Profile_love'>
      <div className="profile_like">
        <p>Like</p>
      </div>
      <div className='profile_liked_list'>
          

           {
            dogBreeds.map((dog)=>{
              return (
                <div className='profile_likeditem'>
               <img src={dog.image} alt="doglist"  width="100"/>
            </div>
              )
            })
           }
           
      </div>
      <div  className='profile_liked-who'>
        <button onClick={handleLiked} >See who liked you ?</button>
      </div>
      
      
    </div>
  )
}
