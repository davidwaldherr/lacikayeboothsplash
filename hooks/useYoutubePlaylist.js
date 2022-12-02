// api/youtube.js
import axios from 'axios';
import { fetcher } from '/lib/fetcher.js';
import { useState, useEffect } from 'react';
import useSWR from 'swr';

export const useYoutubePlaylist = () => {
    const [showVideos, setShowVideos] = useState(false);
    const [videos, setVideos] = useState([]);
    const [activeVideo, setActiveVideo] = useState(null);
    const [endIndex, setEndIndex] = useState(6);

    const getVideos = async () => {
        axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
            params: {
                part: 'snippet',
                maxResults: '50',
                playlistId: 'PLQWdi0MuGKqtEqEJXch4HHlj3dNSCO4yB',
                // Use the key from the .env file
                // key: process.env.YOUTUBE_KEY
                key: process.env.NEXT_PUBLIC_YOUTUBE_KEY
            }
        })
        .then(response => {
            // Map over the response and extract the title and videoId
            const videos = response.data.items.map(item => ({
                title: item.snippet.title,
                videoId: item.snippet.resourceId.videoId
            }));
            console.log(videos);
            setVideos(videos);
            setActiveVideo(videos[0].videoId);
        });
    }
  
  // Run once on component mount
  useEffect(() => {
    // Request data from the Youtube API using axios
    getVideos();
  }, []);

  return { showVideos, setShowVideos, videos, setVideos, activeVideo, setActiveVideo, endIndex, setEndIndex };
}