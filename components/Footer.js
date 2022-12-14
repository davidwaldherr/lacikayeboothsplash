import {
    Button,
    Box,
    Container,
    Divider,
    Input,
    Stack,
    Text,
    Image,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import IconLinks from './iconLinks.js'
  
  export const Footer = () => {

    return (
    <>
    <Box backgroundColor="#fca1da" width="100%" height="100%" position="relative">
        <Stack
            justify="space-between"
            direction={{
            base: 'column',
            md: 'row',
            }}
            padding="0"
            py={{
            base: '3',
            md: '3',
            }}
            px={{
            base: '4',
            md: '8',
            }}
        >
            <Image width="20" src="./whiteLogo.png" alt="Laci Kaye Booth Logo" />          
            <Stack
            direction={{
                base: 'column-reverse',
                md: 'column',
                lg: 'row',
            }}
            spacing={{
                base: '12',
                md: '8',
            }}
            >
            <Stack spacing="4">
                <Text fontSize="sm" fontWeight="bold" color="white">
                Stay up to date
                </Text>
                <Stack
                spacing="4"
                direction={{
                    base: 'column',
                    sm: 'row',
                }}
                maxW={{
                    lg: '360px',
                }}
                >
                {/* 
                <Button colorScheme="pink" variant="solid" type="submit" flexShrink={0}>
                    Live 1/5/23
                </Button> */}
                <Input backgroundColor="white" placeholder="Enter your email" type="text" name="email" required />
                <form action="https://lacikayebooth.us12.list-manage.com/subscribe/post?u=deeb8b8fe2765eee18a34648c&amp;id=696c52a8e1&amp;f_id=006abae0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <div className="mc-field-group">
                        <Button colorScheme="pink" variant="solid" type="submit" flexShrink={0}>
                        Join
                        </Button>
                    </div>
                </form>
                </Stack>
            </Stack>
            </Stack>
        </Stack>
        <Divider />
        <Stack
            pt="3"
            pb="3"
            justify="space-between"
            direction={{
            base: 'column-reverse',
            md: 'row',
            }}
            align="center"
            px={{
                base: '4',
                md: '8',
            }}
        >
            <Text fontSize="sm" color="white">
            &copy; {new Date().getFullYear()} 19 Recordings, Inc. All rights reserved.
            </Text>
            <IconLinks color={"white"} size={6} />
        </Stack>
    </Box>
    </>
    )
  }