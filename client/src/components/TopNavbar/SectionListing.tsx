"use client"
import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { SectionListingProps } from '../../Types/TopNavbarTypes'

export default function SectionListing({name} : SectionListingProps) {
  return (
    <>
    <Box cursor={"pointer"}>
        <Text color={"#7D8FB3"} fontWeight={"700"} fontSize={"13px"}>{name}</Text>
    </Box>
    </>
  )
}
