import { Box, Stack, Card, Heading } from "@chakra-ui/react";

export default function CarouselCards() {
    return (
        <Stack direction="column" textAlign="center" padding={10}>
            <Stack>
                <Heading>Tipos de consulta</Heading>
            </Stack>
            <Stack direction="row">
                <Card>Uno</Card>
                <Card>Uno</Card>
                <Card>Uno</Card>
            </Stack>
        </Stack>
    )
}