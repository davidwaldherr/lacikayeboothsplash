// api/youtube.js
import axios from 'axios';

export default async function handler(req, res) {
  axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
    params: {
      part: 'snippet',
      maxResults: '50',
      playlistId: 'PLQWdi0MuGKqtEqEJXch4HHlj3dNSCO4yB',
      key: process.env.NEXT_PUBLIC_YOUTUBE_KEY,
    }
  })
  .then(response => {
    // Map over the response and extract the title and videoId
    const videos = response.data.items.map(item => ({
      title: item.snippet.title,
      videoId: item.snippet.resourceId.videoId
    }));
    // Set the state
    res.status(200).json(videos);
  });
}
