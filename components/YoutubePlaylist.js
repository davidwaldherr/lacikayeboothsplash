// YouTubePlaylist.js
import React, { useState, useEffect } from 'react';
import { WrapItem, Wrap, Container, Text, Center, Box, VStack, Button } from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';
import { useYoutubePlaylist } from '../hooks/useYoutubePlaylist.js';

export const YoutubePlaylist = () => {
  const { showVideos, setShowVideos, videos, setVideos, activeVideo, setActiveVideo, endIndex, setEndIndex } = useYoutubePlaylist();

  // Render the list of videos
  return (
    <>

    <VStack>
    
    <Container position="relative" paddingBottom={10} centerContent id="youtube">
        <iframe
          width='100%'
          height='400px'
          src={`https://www.youtube.com/embed/${activeVideo}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onMouseEnter={() => {
            document.querySelector("iframe").style.border = "2px solid white";
          }}
          onMouseLeave={() => {
            document.querySelector("iframe").style.border = "2px solid #fca1da";
          }}
        ></iframe>
      </Container>

      <Wrap spacing="40px" justify="center" position="relative">
        {videos.slice(0, endIndex).map(video => (
          <WrapItem key={video.videoId}>
              <Container
                  backgroundImage={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`} 
                  backgroundPosition="center" 
                  backgroundSize="cover" 
                  centerContent
                  height="210.9375"
                  width="375px"
                  justifyContent="center"
                  // Scroll to the youtube id
                  onClick={() => {setActiveVideo(video.videoId);
                    let element = document.getElementById('youtube');
                    element.scrollIntoView({behavior: 'smooth'});
                  }}
                  // On hover, change the border color to white, change the play icon to white, and change the text color to white
                    _hover={{
                        border: '1px solid white',
                    }}
                  border="1px solid #fca1da"
                  margin="10px"
                  >
                  <FaPlay size={20} color={"#fca1da"} />
                  <Text color="#fca1da" position="relative" top={65} fontSize="sm" fontWeight="bold" textTransform="uppercase" letterSpacing="wide" textAlign="center" bg="rgba(0,0,0,0.5)" p={2}>{video.title}</Text>
              </Container>
          </WrapItem>
        ))}
      </Wrap>    

        <Container centerContent>
            <Button onClick={() => {
              setShowVideos(true);
              setEndIndex(endIndex + 6);
            }} colorScheme="pink" variant="outline" size="lg" margin="10px">Show More</Button>
        </Container>

    </VStack>
        
     
    </>
  );
};