import { Box, CloseButton, Section, Button, Wrap, WrapItem, Center, Container, Link, Image, HStack, Icon, Stack, ButtonGroup, IconButton, Text, Img } from '@chakra-ui/react'
import { FaPlay } from 'react-icons/fa'
import * as React from 'react'
import styles from '../styles/Home.module.css'
import IconLinks from '../components/iconLinks'
import { useState } from 'react'
import { YoutubePlaylist } from "../components/YoutubePlaylist.js";
import { Banner } from "../components/Banner.js";
import { Footer } from "../components/Footer.js";
import Carousel from '../components/Carousel.js';
import { images, links, names } from '../data/data.js';

export default function Home() {

const [showVideos, setShowVideos] = useState(false);
const [isActive, setIsActive] = useState('');
const [showBanner, setShowBanner] = useState(false);

  return (
    <>    

    {/* BANNER */}
    <Box position="fixed" width='100vw' zIndex="1000">
      <Banner />
    </Box>

    
    {/* HEADER */}
    <Box 
      backgroundColor="black" 
      position="relative"  
      backgroundImage={"./laciHome.jpg"} 
      backgroundPosition={"center"} 
      backgroundRepeat={"no-repeat"} 
      backgroundSize={"cover"} 
      width='100%' 
      height='100vh'
    >

        <Image src="./neonLogo.png" alt="Laci Kaye Booth Logo" w="45%" />
        
        <Box w="100%" position="absolute" bottom={85}>
          <Center>
          <IconLinks color={"#fca1da"} size={12} />
          </Center>
        </Box>

    </Box>

    {/* MUSIC */}
    <Box 
      borderTopColor={"#fca1da"}
      borderTopWidth={5}
      backgroundColor="white" 
      position="relative" 
      width='100%' 
      backgroundImage="./rose.png"
      backgroundPosition={"center"}
      paddingBottom={15}
    >
      <Box bg="rgba(0, 0, 0, 0.7)">
        <Text pt="4" color="#fca1da" textAlign={"center"} paddingTop={5} fontSize={110} fontFamily={'corsiva'}>
          MUSIC
        </Text>
        <Carousel images={images} links={links} names={names} />
      </Box>
      
    </Box>

    {/* TOUR */}
    <Box
      backgroundColor="white"
      position="relative"
      width='100%'
      height='auto'
      paddingBottom={20}
    >

      <Text color="black" textAlign={"center"} paddingTop={5} fontSize={110} fontFamily={'corsiva'}>
        TOUR
      </Text>

      <Center>
        <Button variant="solid" size="lg">Buy Tickets</Button>
      </Center>

    </Box>


    {/* VIDEOS */}
    <Box 
      backgroundColor="black" 
      position="relative" 
      width='100%' 
      height='auto'
      paddingBottom={20}
      borderTopColor={"#fca1da"}
      borderTopWidth={5}
    >

      <Text color={"#fca1da"} textAlign={"center"} paddingTop={5} fontSize={110} fontFamily={'corsiva'}>
        VIDEO
      </Text>

      <Center>
        <YoutubePlaylist />
      </Center>

    </Box>

    {/* FOOTER */}
      <Footer />

    </>
  )
}