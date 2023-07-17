import React from "react";
import { Box, Avatar, Badge } from "@chakra-ui/react";
import ButtonIcon from "../Globals/ButtonIcon";
import ButtonWithBadge from "../Globals/ButtonWithBadge";

export default function SideNavbar() {
  return (
    <>
      <Box
        minH={"150vh"}
        position={"relative"}
        borderWidth={"1px"}
        p={"20px"}
        display={{base : "none", md : "flex"}}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box
         display={{base : "none", md : "flex"}}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          gap={"20px"}
        >
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
                d="M15 14.4C14.39 14.4 13.9 14.89 13.9 15.5C13.9 16.11 14.39 16.6 15 16.6C15.61 16.6 16.1 16.11 16.1 15.5C16.1 14.89 15.61 14.4 15 14.4ZM15 5.5C9.48 5.5 5 9.98 5 15.5C5 21.02 9.48 25.5 15 25.5C20.52 25.5 25 21.02 25 15.5C25 9.98 20.52 5.5 15 5.5ZM17.19 17.69L9 21.5L12.81 13.31L21 9.5L17.19 17.69Z"
                fill="#3361FF"
              />
            </svg>
          </ButtonIcon>
          <ButtonIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="31px"
              viewBox="0 0 30 31"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.557 21.1975L18.707 23.7075C19.467 24.1675 20.397 23.4875 20.197 22.6275L19.097 17.9075L22.767 14.7275C23.437 14.1475 23.077 13.0475 22.197 12.9775L17.367 12.5675L15.477 8.1075C15.137 7.2975 13.977 7.2975 13.637 8.1075L11.747 12.5575L6.91696 12.9675C6.03696 13.0375 5.67696 14.1375 6.34696 14.7175L10.017 17.8975L8.91696 22.6175C8.71696 23.4775 9.64696 24.1575 10.407 23.6975L14.557 21.1975Z"
                fill="#C3CAD9"
              />
            </svg>
          </ButtonIcon>
          <ButtonWithBadge bg="rgba(51, 97, 255, 1)">
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
                d="M15 5.5C9.47714 5.5 5 9.67124 5 14.8168C5 17.7488 6.45416 20.364 8.72671 22.0719V25.6242L12.1316 23.7439C13.0403 23.997 14.003 24.1335 15 24.1335C20.5229 24.1335 25 19.9623 25 14.8168C25 9.67124 20.5229 5.5 15 5.5ZM15.9938 18.0466L13.4472 15.3137L8.47826 18.0466L13.9441 12.2081L16.5528 14.941L21.4596 12.2081L15.9938 18.0466Z"
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
                d="M19.4325 10.35L20.8725 11.79L15.9925 16.67L12.7025 13.38C12.5157 13.1927 12.262 13.0875 11.9975 13.0875C11.733 13.0875 11.4793 13.1927 11.2925 13.38L5.2925 19.39C4.9025 19.78 4.9025 20.41 5.2925 20.8C5.6825 21.19 6.3125 21.19 6.7025 20.8L11.9925 15.5L15.2825 18.79C15.6725 19.18 16.3025 19.18 16.6925 18.79L22.2825 13.21L23.7225 14.65C24.0325 14.96 24.5725 14.74 24.5725 14.3V10C24.5825 9.72 24.3625 9.5 24.0825 9.5H19.7925C19.3425 9.5 19.1225 10.04 19.4325 10.35Z"
                fill="#C3CAD9"
              />
            </svg>
          </ButtonIcon>
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
                d="M15 5.5C9.48 5.5 5 9.98 5 15.5C5 21.02 9.48 25.5 15 25.5C20.52 25.5 25 21.02 25 15.5C25 9.98 20.52 5.5 15 5.5ZM14 23.43C10.05 22.94 7 19.58 7 15.5C7 14.88 7.08 14.29 7.21 13.71L12 18.5V19.5C12 20.6 12.9 21.5 14 21.5V23.43ZM20.9 20.89C20.64 20.08 19.9 19.5 19 19.5H18V16.5C18 15.95 17.55 15.5 17 15.5H11V13.5H13C13.55 13.5 14 13.05 14 12.5V10.5H16C17.1 10.5 18 9.6 18 8.5V8.09C20.93 9.28 23 12.15 23 15.5C23 17.58 22.2 19.47 20.9 20.89Z"
                fill="#C3CAD9"
              />
            </svg>
          </ButtonIcon>
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
                d="M18 15.0825V9.91249C18 9.38249 17.79 8.87249 17.41 8.50249L15.7 6.79249C15.5132 6.60523 15.2595 6.5 14.995 6.5C14.7305 6.5 14.4768 6.60523 14.29 6.79249L12.59 8.49249C12.21 8.87249 12 9.38249 12 9.91249V11.0825H8C6.9 11.0825 6 11.9825 6 13.0825V23.0825C6 24.1825 6.9 25.0825 8 25.0825H22C23.1 25.0825 24 24.1825 24 23.0825V17.0825C24 15.9825 23.1 15.0825 22 15.0825H18ZM10 23.0825H8V21.0825H10V23.0825ZM10 19.0825H8V17.0825H10V19.0825ZM10 15.0825H8V13.0825H10V15.0825ZM16 23.0825H14V21.0825H16V23.0825ZM16 19.0825H14V17.0825H16V19.0825ZM16 15.0825H14V13.0825H16V15.0825ZM16 11.0825H14V9.08249H16V11.0825ZM22 23.0825H20V21.0825H22V23.0825ZM22 19.0825H20V17.0825H22V19.0825Z"
                fill="#C3CAD9"
              />
            </svg>
          </ButtonIcon>
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
            <Badge
              bg={"rgba(51, 97, 255, 1)"}
              w={"10px"}
              h={"10px"}
              position={"absolute"}
              top={"3px"}
              right={"0px"}
              borderRadius={"50%"}
            ></Badge>
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

          <ButtonIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 0.5C4.48 0.5 0 4.98 0 10.5C0 16.02 4.48 20.5 10 20.5C15.52 20.5 20 16.02 20 10.5C20 4.98 15.52 0.5 10 0.5ZM14 11.5H11V14.5C11 15.05 10.55 15.5 10 15.5C9.45 15.5 9 15.05 9 14.5V11.5H6C5.45 11.5 5 11.05 5 10.5C5 9.95 5.45 9.5 6 9.5H9V6.5C9 5.95 9.45 5.5 10 5.5C10.55 5.5 11 5.95 11 6.5V9.5H14C14.55 9.5 15 9.95 15 10.5C15 11.05 14.55 11.5 14 11.5Z"
                fill="#C3CAD9"
              />
            </svg>
          </ButtonIcon>
        </Box>
      </Box>
    </>
  );
}
