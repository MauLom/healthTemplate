'use client'
import NavMenuContainer from './components/nav-menu/container'
import styles from './page.module.css'
import { Box, ChakraProvider, Stack } from "@chakra-ui/react"
import config from "../exdata.json"
import CallToAction from './components/callToAction/callToActionContainer'

import { extendTheme } from "@chakra-ui/react"
import ParallelBlocks from './components/parallelBlocks/parallelBlocks'
import CarouselCards from './components/carouselcards/carouselCards'



export default function Home() {
  return (
    <ChakraProvider>
      <NavMenuContainer />
      <main className={styles.main}>
        <Stack width="100%" gap={0}>
          <CallToAction
            id="main"
            bgGradient={config.contentBlocks[0].background.data}
            contentTitle={config.contentBlocks[0].contentTitle}
            contentText={config.contentBlocks[0].contentText}
            imgSrc={config.contentBlocks[0].imgSrc}
          />
          <ParallelBlocks id="about"
            bgGradient={config.contentBlocks[1].background.data}
            contentTitle={config.contentBlocks[1].contentTitle}
            contentText={config.contentBlocks[1].contentText}
            imgSrc={config.contentBlocks[1].imgSrc}
            direction={{ base: 'column', sm: 'row' }}
          />
           <ParallelBlocks id="about"
            bgGradient={config.contentBlocks[2].background.data}
            contentTitle={config.contentBlocks[2].contentTitle}
            contentText={config.contentBlocks[2].contentText}
            imgSrc={config.contentBlocks[2].imgSrc}
            direction={{ base: 'column', sm: 'row-reverse' }}
          />
          <CarouselCards />
        </Stack>
      </main>
    </ChakraProvider>

  )
}
