import {
    Box,
    Button,
    CloseButton,
    Container,
    Icon,
    Square,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FiInfo } from 'react-icons/fi'
  import { useState } from 'react'
  
  export const Banner = () => {
    const [showBanner, setShowBanner] = useState(true)

    const isMobile = useBreakpointValue({
      base: true,
      md: false,
    })
    return (
      <>
        {showBanner && (
        <Box
        as="section"
        pb={{
          base: '12',
          md: '24',
        }}
      >
        <Box bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')} backgroundColor="white" width="100vw" borderBottomRadius={'10'}>
          <Container
            py={{
              base: '4',
              md: '2.5',
            }}
            position="relative"
            maxWidth="container.xxl"
          >
            <CloseButton
              display={{
                sm: 'none',
              }}
              position="absolute"
              right="8"
              top="2"
              onClick={() => setShowBanner(false)}
            />
            <Stack
              direction={{
                base: 'column',
                sm: 'row',
              }}
              justify="space-between"
              spacing={{
                base: '3',
                md: '2',
              }}
            >
              <Stack
                spacing="4"
                direction={{
                  base: 'column',
                  md: 'row',
                }}
                align={{
                  base: 'start',
                  md: 'center',
                }}
              >
                {!isMobile && (
                  <Square size="12" bg="#f0f0f0" borderRadius="md">
                    <Icon as={FiInfo} boxSize="6" />
                  </Square>
                )}
                <Stack
                  direction={{
                    base: 'column',
                    md: 'row',
                  }}
                  spacing={{
                    base: '0.5',
                    md: '1.5',
                  }}
                  pe={{
                    base: '4',
                    sm: '0',
                  }}
                >
                  <Text fontWeight="medium">Damn Good in a Dive Bar</Text>
                  <Text color="muted">New single out now</Text>
                </Stack>
              </Stack>
              <Stack
                direction={{
                  base: 'column',
                  sm: 'row',
                }}
                spacing={{
                  base: '3',
                  sm: '2',
                }}
                align={{
                  base: 'stretch',
                  sm: 'center',
                }}
              >
                <Button colorScheme="pink" width="full">
                  Listen Now
                </Button>
                <CloseButton
                    onClick={() => setShowBanner(false)}
                  display={{
                    base: 'none',
                    sm: 'inline-flex',
                  }}
                />
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>
    )}
      </>
    )
  }