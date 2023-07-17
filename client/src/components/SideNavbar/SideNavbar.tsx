import React from "react";
import { Box, Avatar, Badge } from "@chakra-ui/react";
import ButtonIcon from "../Globals/ButtonIcon";

export default function SideNavbar() {
  return (
    <>
      <Box
        minH={"150vh"}
        position={"relative"}
        borderWidth={"1px"}
        p={"20px"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          gap={"20px"}
        >
          <ButtonIcon />
          <ButtonIcon />
          <ButtonIcon />
          <ButtonIcon />
          <ButtonIcon />
          <ButtonIcon />
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"flex-end"}
          gap={"20px"}
        >
          <Avatar
            size="sm"
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
            w={"50px"}
            h={"50px"}
          >
             <Badge bg={"rgba(51, 97, 255, 1)"} w={"10px"} h={"10px"} position={"absolute"} top={"3px"} right={"0px"} borderRadius={"50%"}></Badge>
          </Avatar>
          <Avatar
            size="sm"
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
            w={"50px"}
            h={"50px"}
          />
          <Avatar
            size="sm"
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
            w={"50px"}
            h={"50px"}
          />
          <Avatar
            size="sm"
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
            w={"50px"}
            h={"50px"}
          />

          <ButtonIcon />
        </Box>
      </Box>
    </>
  );
}
