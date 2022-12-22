import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import { useState } from 'react';

const Item = ({ name, imageUrl }) => {
    const [hover, setHover] = React.useState(false);
  
    return (
        <>

    
    <Box w="300" h="300" textAlign="center" overflow="hidden" position="relative">
        <Image src={imageUrl} alt={name} objectFit="cover" h="300" w="300" style={{ display: 'block', margin: '0 auto' }} />
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          pt="30%"
          textAlign="center"
          bg={hover ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0)'}
          color="#fca1da"
          transition="0.3s"
          opacity={hover ? "1" : '0'}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <Text fontSize="xl" fontWeight="bold" fontFamily={'corsiva'}>
            {name}
          </Text>
        </Box>
      </Box>
  
      <Box position="relative" mt={4} textAlign="center">
        <Text outlineColor="black"  fontSize="65" color="#fca1da" fontWeight="bold" fontFamily={'corsiva'}>
          ~Listen~
        </Text>
      </Box>
      
      </>
    );
  };

export default Item;