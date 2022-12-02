import { HStack, Link, Icon } from '@chakra-ui/react'
import { FaTiktok, FaTwitter, FaInstagram, FaYoutube, FaApple, FaSpotify } from 'react-icons/fa'

export default function iconLinks({ color, size }) {
    return (
        <HStack>
            <Link href="https://www.tiktok.com/@lacikayebooth" isExternal>
              <Icon as={FaTiktok} w={size} h={size} color={color}/>
            </Link>
            <Link href="https://twitter.com/lacikayebooth" isExternal>
              <Icon as={FaTwitter} w={size} h={size} color={color}/>
            </Link>
            <Link href="https://www.instagram.com/lacikayebooth/" isExternal>
              <Icon as={FaInstagram} w={size} h={size} color={color} />
            </Link>
            <Link href="https://www.youtube.com/@LaciKayeBooth" isExternal>
              <Icon as={FaYoutube} w={size} h={size} color={color} />
            </Link>
            <Link href="https://music.apple.com/us/artist/laci-kaye-booth/1226731184" isExternal>
              <Icon as={FaApple} w={size} h={size} color={color} />
            </Link>
            <Link href="https://open.spotify.com/artist/6Gd7wERviclMCCWOG8qVR4" isExternal>
              <Icon as={FaSpotify} w={size} h={size} color={color} />
            </Link>
          </HStack>
    )
}