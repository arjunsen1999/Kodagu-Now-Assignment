"use client";
import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import SectionListing from "./SectionListing";
import SearchBox from "./SearchBox";
import BurgerButton from "./BurgerButton";
import ButtonIcon from "../Globals/ButtonIcon";
import ButtonWithBadge from "../Globals/ButtonWithBadge";
import { SectionTypes } from "../../Types/TopNavbarTypes";

const section: SectionTypes[] = [
  { id: 1, name: "Dashboard" },
  { id: 2, name: "About Us" },
  { id: 3, name: "News" },
  { id: 4, name: "User Policy" },
  { id: 5, name: "Contacts" },
];

export default function TopNavbar() {
  return (
    <>
      <Box
        borderWidth="1px"
        p={"20px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          gap={"20px"}
        >
          <BurgerButton />
          <Text color={"#4D5E80"} fontWeight={700} fontSize={"18px"}>
            Constructor
          </Text>
        </Box>
        {/* // All Section Start*/}
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"20px"}
        >
          {section?.map((ele) => {
            return <SectionListing key={ele.id} name={ele.name} />;
          })}
        </Box>
        {/* // All Section End*/}
        {/* // Search bar section start*/}
        <Box>
          <SearchBox />
        </Box>
        {/* // Search bar section end*/}
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
          gap={"10px"}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-end"}
            gap={"5px"}
          >
            <Button
              w={"50px"}
              h={"50px"}
              bg={"white"}
              boxShadow={"0px 2px 5px 0px rgba(38, 51, 77, 0.03)"}
              borderRadius={"100px"}
            ></Button>
            <SectionListing name="Clayton Santos" />
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-end"}
            gap={"10px"}
          >
            <ButtonWithBadge />
            <ButtonIcon />
          </Box>
        </Box>
      </Box>
    </>
  );
}
