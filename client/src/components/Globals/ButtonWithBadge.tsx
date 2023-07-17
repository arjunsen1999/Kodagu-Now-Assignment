import React from "react";
import { Button } from "@chakra-ui/react";
import { Badge } from '@chakra-ui/react'

export default function ButtonWithBadge() {
  return (
    <>
      <Button
        w={"50px"}
        h={"50px"}
        bg={"white"}
        boxShadow={"0px 2px 5px 0px rgba(38, 51, 77, 0.03)"}
        borderRadius={"100px"}
        position={"relative"}
      >
        <Badge bg={"red"} w={"10px"} h={"10px"} position={"absolute"} top={"3px"} right={"0px"} borderRadius={"50%"}></Badge>
      </Button>
    </>
  );
}
