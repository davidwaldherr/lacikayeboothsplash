import React, { useState, useEffect } from "react";
import axios from "axios";

export default async function handler(req, res) {
  const [tracks, setTracks] = useState([]);

    axios.get(
      "https://api.spotify.com/v1/artists/6Gd7wERviclMCCWOG8qVR4/top-tracks?country=US"
      )
      .then(res => {
        const topTracks = res.data.tracks;
        setTracks(topTracks);
        res.status(200).json(tracks);
      })
      .catch(err => {
        console.log(err);
      })
}



  