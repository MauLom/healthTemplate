'use client'
import { Button, Stack, Text } from '@chakra-ui/react'
import config from "../../../exdata.json"
export default function NavMenuContainer() {
    return (
        <Stack direction="row" gap={3} margin="2% 10% 1% 10%" position="fixed" zIndex={5}>
            {config.navMenuOptions.map(each => (
                <Text fontFamily={config.font} as="i" key={each.id} fontSize="xl" color={config.colors.primary}>
                    <a href={`#${each.id}`}>{each.label}</a>
                </Text>
            ))}
        </Stack>
    )
}