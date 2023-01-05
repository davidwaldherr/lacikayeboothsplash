import { Box, Link, useBreakpointValue, Container, useColorModeValue, Stack, Heading, Button, Center, Image, Text } from '@chakra-ui/react'
import * as React from 'react'
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
    <Center>
      
    </Center>
    <Box 
      borderTopColor={"#fca1da"}
      borderTopWidth={5}
      borderBottomColor={"#fca1da"}
      borderBottomWidth={5}
      backgroundColor="white" 
      position="relative" 
      width='100%' 
      backgroundImage="./rose.png"
      backgroundPosition={"center"}
    >
      <Box bg="rgba(0, 0, 0, 0.7)">
        <Text pt="4" color="#fca1da" textAlign={"center"} paddingTop={5} fontSize={110}>
          MUSIC
        </Text>
        <Carousel images={images} links={links} names={names} />
      </Box>
      
    </Box>

    {/* TOUR */}

    <Box w="100%" position="relative" backgroundColor="black">
    <Center>
    <Box
  minW="350px"
  backgroundColor="#fca1da"
  boxShadow={useColorModeValue('sm', 'sm-dark')}
  borderRadius="xl"
  px={{ base: '4', md: '8' }}
  py={{ base: '6', md: '10' }}
  justify-content="center"
  align-items="center"
  max-width="100%"
  mt="20px"
  mb="20px"
>
    <Stack spacing="8" direction={{ base: 'column', lg: 'row' }} justify="space-between">
      <Stack spacing="4" maxW="2xl">
        <Heading size="md">Want to see Laci on tour?</Heading>
        <Text color="muted" fontSize={useBreakpointValue({ base: 'lg', lg: 'xl' })}>
          Get notified when events are in your area
        </Text>
      </Stack>
      <Stack spacing="3" direction={{ base: 'column', sm: 'row' }} justify={{ base: 'start' }}>
        <Link href="https://www.bandsintown.com/a/14755343?came_from=267&app_id=linktree-0014755343&utm_medium=api&utm_source=public_api&utm_campaign=artist" target="_blank">
        <Button variant="solid" size="lg">
          Follow Laci Kaye Booth
        </Button>
        </Link>
      </Stack>
    </Stack>
  </Box>
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
      
      <Text color={"#fca1da"} textAlign={"center"} paddingTop={5} fontSize={110}>
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