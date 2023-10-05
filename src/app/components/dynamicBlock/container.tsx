'use client'
import { Box, Text, Stack, Image } from '@chakra-ui/react'


export default function BlockContainer({ ...props }) {
    return (
        <Box height="100%" display="flex" justifyContent="center" width="100% !important" bgGradient={props?.bgGradient}
            padding="4rem">
            <Stack direction="row">
                <Text>
                    {props?.content}
                </Text>
                <Image alt="banner-img-alt" src="https://uploads-ssl.webflow.com/6060e6c66acd5a7636de522c/64679aabcc3df87fbdebd163_SC-fondo-rojo.webp"/>
            </Stack>

        </Box>
    )
}