import React from 'react';
import { Box, Image, Text, Button, Center, Link } from '@chakra-ui/react';

const Item = ({ name, imageUrl, links }) => {
  
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
          color="#fca1da"
          transition="0.3s"
        >
        </Box>
      </Box>
  
      <Box position="relative" mt={4} textAlign="center">
        <Text outlineColor="black" fontSize="25" color="#fca1da" fontWeight="bold">
          {name}
        </Text>
      </Box>
      <Center>
        <Link href={links} target="_blank">
        <Button colorScheme="pink" variant="outline" size="md" mt={4} mb={4}>
          Listen Now
        </Button>
        </Link>
      </Center>
      
      </>
    );
  };

export default Item;