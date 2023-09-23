// auth.js

import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL;

// Function to handle user registration
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${API_URL}/hackathon/registration`,
      userData,
    );
    //console.log(response.data);
    return response.data;
  } catch (error) {
    //console.log(error.response.data);
    throw error.response.data; // Handle registration errors here
  }
};

// Function to handle user login
export const contactForm = async (contactData) => {
  try {
    const response = await axios.post(
      `${API_URL}/hackathon/contact-form`,
      contactData,
    );
    return response.data;
  } catch (error) {
    throw error.response.data; // Handle login errors here
  }
};
