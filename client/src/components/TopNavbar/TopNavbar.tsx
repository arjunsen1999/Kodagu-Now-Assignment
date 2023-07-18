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
          display={{base : "none", lg : "flex"}}
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
              paddingInline={"10px"}
              paddingBlock={"25px"}
              bg={{base : "white", md : "transparent"}}
              _hover={{
                backgroundColor : "transparent"
              }}
              borderRadius={"50%"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15 5.5C9.48 5.5 5 9.98 5 15.5C5 21.02 9.48 25.5 15 25.5C20.52 25.5 25 21.02 25 15.5C25 9.98 20.52 5.5 15 5.5ZM15 8.5C16.66 8.5 18 9.84 18 11.5C18 13.16 16.66 14.5 15 14.5C13.34 14.5 12 13.16 12 11.5C12 9.84 13.34 8.5 15 8.5ZM15 22.7C12.5 22.7 10.29 21.42 9 19.48C9.03 17.49 13 16.4 15 16.4C16.99 16.4 20.97 17.49 21 19.48C19.71 21.42 17.5 22.7 15 22.7Z"
                  fill="#C3CAD9"
                />
              </svg>
            </Button>
            <SectionListing name="Clayton Santos" />
          </Box>
          <Box
            display={{base : "none", lg : "flex"}}
            alignItems={"center"}
            justifyContent={"flex-end"}
            gap={"10px"}
          >
            <ButtonWithBadge bg="red">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.5865 25C15.6865 25 16.5865 24.1 16.5865 23H12.5865C12.5865 24.1 13.4765 25 14.5865 25ZM20.5865 19V14C20.5865 10.93 18.9465 8.36 16.0865 7.68V7C16.0865 6.17 15.4165 5.5 14.5865 5.5C13.7565 5.5 13.0865 6.17 13.0865 7V7.68C10.2165 8.36 8.58648 10.92 8.58648 14V19L7.29648 20.29C6.66648 20.92 7.10648 22 7.99648 22H21.1665C22.0565 22 22.5065 20.92 21.8765 20.29L20.5865 19Z"
                  fill="#C3CAD9"
                />
              </svg>
            </ButtonWithBadge>
            <ButtonIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15 5.5C9.47 5.5 5 9.97 5 15.5C5 21.03 9.47 25.5 15 25.5C20.53 25.5 25 21.03 25 15.5C25 9.97 20.53 5.5 15 5.5ZM19.3 19.8C18.91 20.19 18.28 20.19 17.89 19.8L15 16.91L12.11 19.8C11.72 20.19 11.09 20.19 10.7 19.8C10.5127 19.6132 10.4075 19.3595 10.4075 19.095C10.4075 18.8305 10.5127 18.5768 10.7 18.39L13.59 15.5L10.7 12.61C10.5127 12.4232 10.4075 12.1695 10.4075 11.905C10.4075 11.6405 10.5127 11.3868 10.7 11.2C11.09 10.81 11.72 10.81 12.11 11.2L15 14.09L17.89 11.2C18.28 10.81 18.91 10.81 19.3 11.2C19.69 11.59 19.69 12.22 19.3 12.61L16.41 15.5L19.3 18.39C19.68 18.77 19.68 19.41 19.3 19.8Z"
                  fill="#C3CAD9"
                />
              </svg>
            </ButtonIcon>
          </Box>
        </Box>
      </Box>
    </>
  );
}
