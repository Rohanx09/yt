import React from 'react'
import { useState , useEffect } from 'react';
import { Box , Typography } from '@mui/material';
import { Videos } from './index';
import { FetchFromAPI } from '../Utilities/FetchFromAPI';
import { useParams } from 'react-router-dom';


const SearchFeed = () => {
    
    const [ videos , setVideos] = useState([]);
    const { searchTerm } = useParams();

  useEffect(() =>{
    FetchFromAPI(`search?part=snippet&q=${searchTerm}`) // async funtion use promise in the for of .then so cannot use const( request is being made)
        .then((data) => setVideos ( data.items ))
  },[searchTerm])  // recalling funtion when ever we change the category( request is getting updated )
  return (
    <Box p={2} sx={{ overflowY :" auto ", height: "90vh" , flex:2}}>
        
    <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for : <span style={{ color: "#F31503"}}> {searchTerm} </span> videos
    </Typography>
    <Videos videos={videos}></Videos>
  </Box>
  )
}

export default SearchFeed
