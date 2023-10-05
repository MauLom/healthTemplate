'use client'
import { Box, Stack, Text, Image, Button } from "@chakra-ui/react";
import styles from "./callToAction.module.css"
export default function CallToAction({ ...props }) {
    return (
        <Stack id={props.id} bgGradient={props?.bgGradient} 
        padding={{md:"5rem 0 0 0", sm:"2rem 0 0 0"}} direction={{md: "row", sm:"column-reverse"}} justifyContent="space-around">
            <Box padding={{md:"9rem", sm:"2rem"}}>
                <Text className={styles.subTitle}>
                    {props?.contentTitle}
                </Text>
                <Text className={styles.title}>
                    {props?.contentText}
                </Text>
                <Button className={styles.callButton}>
                    ¡Agenda ya!
                </Button>
            </Box>
            <Box padding="3rem">
                <Image width={{sm:"30rem", md:"50rem"}} src={props?.imgSrc} alt="callToActionImage" />
            </Box>
        </Stack>
    )
}