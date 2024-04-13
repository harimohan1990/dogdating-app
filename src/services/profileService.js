import axios from 'axios';

const API_URL = 'http://localhost:4000/api/profile';

export const fetchProfiles = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching profiles:', error);
    throw error; // Rethrow the error for handling in the component
  }
};

export const createProfile = async (profileData) => {
  try {
    const response = await axios.post(API_URL, profileData);
    return response.data;
  } catch (error) {
    console.error('Error creating profile:', error);
    throw error; // Rethrow the error for handling in the component
  }
};
