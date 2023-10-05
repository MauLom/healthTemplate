'use client'
import { Box, Card, Image, Stack, CardBody, Heading, Text, Button } from "@chakra-ui/react"
import styles from "./parallelBlocks.module.css"

export default function ParallelBlocks({ ...props }) {
    return (
        <Box id={props.id}>
            <Card
                bgGradient={props.bgGradient}
                direction={props.direction}
                overflow='hidden'
                variant='outline'
                padding={5}
            >
                <Image alt="parallel-one" maxH={"400px"} src="https://uploads-ssl.webflow.com/6060e6c66acd5a7636de522c/64679aabcc3df87fbdebd163_SC-fondo-rojo.webp" padding="0 5rem 0 5rem"/>

                <Stack justifyContent="center" padding={5}>
                    <CardBody>
                        <Heading size='lg' className={styles.txtContent}>{props.contentTitle}</Heading>
                        <Text py={2} padding={3} className={styles.txtContent}>
                            {props.contentText}
                        </Text>
                    </CardBody>
                </Stack>
            </Card>
        </Box>
    )
}