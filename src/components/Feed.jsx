import React from 'react'
import { useState , useEffect } from 'react';
import { Box , Stack , Typography } from '@mui/material';
import {SideBar , Videos} from './index';
import { FetchFromAPI } from '../Utilities/FetchFromAPI';


const Feed = () => {
    const[selectedCategory,setSelectedCategory] = useState('New');
    const [ videos , setVideos] = useState([]);

  useEffect(() =>{
    FetchFromAPI(`search?part=snippet&q=${selectedCategory}`) // async funtion use promise in the for of .then so cannot use const
        .then((data) => setVideos ( data.items ))
  },[selectedCategory])  // recalling funtion when ever we change the category
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' }}}>  
      <Box sx ={{ height: {sx: 'auto ' , md: '92vh' } , borderRight: '1px solid #3d3d3d' , px: { sx: 0 , md: 2}}}> {/* side grey border*/}
      
      <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></SideBar>{/* giving states*/}
      
      <Typography className='copyright' variant='body2' sx={{ marginTop: 1.5 , color:'#fff'}}> Copyright 2024 JSM Media</Typography>
      </Box>
      
      <Box p={2} sx={{ overflowY :" auto ", height: "90vh" , flex:2}}>
        
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: "white" }}>
            { selectedCategory } <span style={{ color: "#F31503"}}> Videos </span>
        </Typography>
        <Videos videos={videos}></Videos>
      </Box>
    </Stack>
  )
}

export default Feed
