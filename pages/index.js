import { Box, CloseButton, Section, Button, Wrap, WrapItem, Center, Container, Link, Image, HStack, Icon, Stack, ButtonGroup, IconButton, Text, Img } from '@chakra-ui/react'
import { FaPlay } from 'react-icons/fa'
import * as React from 'react'
import styles from '../styles/Home.module.css'
import IconLinks from '../components/iconLinks'
import { useState } from 'react'
import { YoutubePlaylist } from "../components/YoutubePlaylist.js";

export default function Home() {

const [showVideos, setShowVideos] = useState(false);
const [isActive, setIsActive] = useState('');
const [showBanner, setShowBanner] = useState(false);

  return (
    <>    
    
    {/* Create a banner fixed to the top of the screen announcing the new single. Display the component only if showBanner is true */}
    {!showBanner && (
    <Box justify="center" position="fixed" top="0" left="0" width="100%" bg="#fca1da" zIndex="1000">
        {/* Inside the HStack, space the text and the close button evenly */}
        <HStack width="100%" paddingLeft="3">

        <Text justify="center" color="white" fontSize="xl" fontWeight="bold" textTransform="uppercase" letterSpacing="wide" position="relative">New Single<br />"Damn Good in a Dive Bar"</Text>
        
        <HStack justify="flex-end" width="100%" paddingRight="3">
        <Button variant="solid" size="lg">Listen Now</Button>
        <CloseButton onClick={() => {setShowBanner(true)}} />
        </HStack>

        </HStack>
        
    </Box>
    )}

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
      backgroundColor="white" 
      position="relative" 
      // backgroundImage={"./landscapeMusic.jpeg"} 
      // bgRepeat={"repeat-x"}
      width='100%' 
      // height="100%"
      backgroundPosition={"center"}
      
      backgroundSize={"cover"} 
      paddingBottom={15}
    >

      <Text color="black" textAlign={"center"} paddingTop={5} fontSize={110} fontFamily={'corsiva'}>
        MUSIC
      </Text>

    </Box>


    {/* VIDEOS */}
    <Box 
      backgroundColor="black" 
      position="relative" 
      width='100%' 
      height='auto'
      paddingBottom={20}
    >

      <Text color={"#fca1da"} textAlign={"center"} paddingTop={5} fontSize={110} fontFamily={'corsiva'}>
        VIDEO
      </Text>

      <Center>
        <YoutubePlaylist />
      </Center>

    </Box>


    {/* Create a footer with a constant heigh and centered text stating the copywrite and the IconLinks centered above it*/} 
    <Box w="100%" backgroundColor="#fca1da" height="12" position="relative" >

      <Box position="absolute" top={.25} left={1}>
        <Image src="./whiteLogo.png" alt="Laci Kaye Booth Logo" width="35px" />
      </Box>
      
      <Text fontSize={7} color="white" position="absolute" top="35px" left="3px">
        &copy; {new Date().getFullYear()} 19 Recordings, Inc. All rights reserved.
      </Text>

      <Box position="absolute" right={2} top={1}>
        <IconLinks color={"white"} size={4} />
      </Box>


    </Box>
    

    </>
  )
}