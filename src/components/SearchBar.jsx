import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material'; 


const SearchBar = () => {
  const [ searchTerm , setsearchTerm ] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();// stoping reloading of page again and again cuz it is default fn of browser

    if(searchTerm) {
      navigate(`/search/${searchTerm}`);

      setsearchTerm('');

    }
  }

  return (
    <Paper component="form" onSubmit={handleSubmit}// will let you submit 
    sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl:2,//padding left
        boxShadow:'none',
        mr: { sm: 5 }

    }}>
        <input className='search-bar' 
        placeholder='Search Text' 
        value={searchTerm} 
        onChange={ (e) => setsearchTerm(e.target.value) } /> {/* updating the search term*/}
        <IconButton type='submit' sx={{ p: '10px' , color: 'grey' }}>
            <Search/>
        </IconButton>
      
    </Paper>
  )
}

export default SearchBar
