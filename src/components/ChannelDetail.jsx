import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './index';
import { FetchFromAPI } from '../Utilities/FetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null); // Changed variable name to channelDetail
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    FetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0]) // Changed item to items and fixed variable name
    );

    FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items) // Changed item to items
    );
  }, [id]);

  return (
    <Box minHeight='95vh'>
      {/* Render channelDetail and videos here */}
      <Box>
        <div style={{ background: 'linear-gradient(90deg, rgba(0,222,123,1) 0%, rgba(209,4,184,1) 100%, rgba(0,212,255,1) 100%)',
      zIndex:10,
      height:'300px'}}></div>
      <ChannelCard channelDetail={channelDetail} marginTop="-120px"/>{/* to create reuseable components we pass props cuz on style is required to be diff*/ }
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '100px' }}} />
        <Videos videos={videos}/>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
























/*import { React , useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';


import { Videos , ChannelCard } from './index';
import { FetchFromAPI } from '../Utilities/FetchFromAPI';

const ChannelDetail = () => {
  const [channelsDetail, setChannelDetail] = useState(null);
  const [ videos, setVideos ]= useState([])

  const { id } =useParams();


  useEffect(() => {
    FetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.item[0]));

    FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setChannelDetail(data?.item[0]));
  } , [id])
  return (
    <Box minHeight='95vh'>
      <Box>
        <div/>
      </Box>
    </Box>
  )
}

export default ChannelDetail*/
