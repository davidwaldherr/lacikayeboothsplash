import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {

  return <>
  <ChakraProvider>
      <Component {...pageProps} />
  </ChakraProvider>
  </>
}