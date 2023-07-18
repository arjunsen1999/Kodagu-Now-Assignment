import React from "react";
import { Box, Flex } from "@chakra-ui/react";

export default function SocialSection() {
  return (
    <>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        borderWidth={"1px"}
        padding={4}
        w="100%"
        h={"60px"}
        mt={{base:"30px",lg:"100px"}}
        borderRadius={"30px"}
      >
        {/* Call */}
        <Box cursor={"pointer"}>
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
              d="M22.2037 18.75L19.6637 18.46C19.0537 18.39 18.4537 18.6 18.0237 19.03L16.1837 20.87C13.3537 19.43 11.0337 17.12 9.59367 14.28L11.4437 12.43C11.8737 12 12.0837 11.4 12.0137 10.79L11.7237 8.27C11.6037 7.26 10.7537 6.5 9.73367 6.5H8.00367C6.87367 6.5 5.93367 7.44 6.00367 8.57C6.53367 17.11 13.3637 23.93 21.8937 24.46C23.0237 24.53 23.9637 23.59 23.9637 22.46V20.73C23.9737 19.72 23.2137 18.87 22.2037 18.75Z"
              fill="#FF6633"
            />
          </svg>
        </Box>

        {/* Mail */}
        <Box cursor={"pointer"}>
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
              d="M23 7.5H7C5.9 7.5 5 8.4 5 9.5V21.5C5 22.6 5.9 23.5 7 23.5H23C24.1 23.5 25 22.6 25 21.5V9.5C25 8.4 24.1 7.5 23 7.5ZM22.6 11.75L16.06 15.84C15.41 16.25 14.59 16.25 13.94 15.84L7.4 11.75C7.15 11.59 7 11.32 7 11.03C7 10.36 7.73 9.96 8.3 10.31L15 14.5L21.7 10.31C22.27 9.96 23 10.36 23 11.03C23 11.32 22.85 11.59 22.6 11.75Z"
              fill="#29CC39"
            />
          </svg>
        </Box>

        {/* Note */}
        <Box cursor={"pointer"}>
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
              d="M24 7.5H6C4.9 7.5 4 8.4 4 9.5V22.5C4 23.6 4.9 24.5 6 24.5H24C25.1 24.5 26 23.6 26 22.5V9.5C26 8.4 25.1 7.5 24 7.5ZM24 21.5C24 22.05 23.55 22.5 23 22.5H15V9.5H23C23.55 9.5 24 9.95 24 10.5V21.5ZM22.25 13H16.75C16.34 13 16 13.34 16 13.75C16 14.16 16.34 14.5 16.75 14.5H22.25C22.66 14.5 23 14.16 23 13.75C23 13.34 22.66 13 22.25 13ZM22.25 15.5H16.75C16.34 15.5 16 15.84 16 16.25C16 16.66 16.34 17 16.75 17H22.25C22.66 17 23 16.66 23 16.25C23 15.84 22.66 15.5 22.25 15.5ZM22.25 18H16.75C16.34 18 16 18.34 16 18.75C16 19.16 16.34 19.5 16.75 19.5H22.25C22.66 19.5 23 19.16 23 18.75C23 18.34 22.66 18 22.25 18Z"
              fill="#8833FF"
            />
          </svg>
        </Box>

        {/* Telegram */}
        <Box cursor={"pointer"}>
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
              d="M12.5 18.55L18.55 23.0125C19.2375 23.3875 19.7375 23.2 19.9125 22.375L22.375 10.775C22.625 9.76249 21.9875 9.31249 21.325 9.61249L6.87498 15.1875C5.88748 15.5875 5.89998 16.1375 6.69998 16.375L10.4125 17.5375L19 12.125C19.4 11.875 19.775 12.0125 19.475 12.2875L12.5 18.55Z"
              fill="#33BFFF"
            />
          </svg>
        </Box>

        {/* Whatsapp */}
        <Box cursor={"pointer"}>
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
              d="M14.9971 5.5C9.48427 5.5 5 9.98427 5 15.4971C5 17.6834 5.70528 19.711 6.90418 21.3568L5.65817 25.0711L9.50185 23.843C11.0828 24.8891 12.9693 25.4944 15.0029 25.4944C20.5157 25.4944 25 21.0099 25 15.4973C25 9.98444 20.5157 5.50017 15.0029 5.50017H14.9971V5.5ZM12.2054 10.5781C12.0115 10.1138 11.8645 10.0962 11.5707 10.0843C11.4592 10.0771 11.3475 10.0732 11.2357 10.0727C10.8535 10.0727 10.4539 10.1843 10.2129 10.4311C9.91918 10.7308 9.19035 11.4302 9.19035 12.8643C9.19035 14.2984 10.2365 15.6854 10.3775 15.8794C10.5244 16.0732 12.417 19.0588 15.3555 20.2756C17.6535 21.2277 18.3354 21.1395 18.8584 21.0278C19.6224 20.8633 20.5804 20.2988 20.8214 19.6173C21.0624 18.9354 21.0624 18.3535 20.9918 18.2301C20.9213 18.1067 20.7272 18.0364 20.4335 17.8893C20.1397 17.7423 18.7114 17.037 18.441 16.943C18.1765 16.8431 17.9239 16.8785 17.7242 17.1606C17.442 17.5544 17.1658 17.9541 16.9424 18.195C16.7661 18.3831 16.478 18.4066 16.2371 18.3066C15.9139 18.1716 15.0089 17.8539 13.8921 16.8607C13.0281 16.0909 12.4404 15.133 12.27 14.8451C12.0995 14.5513 12.2525 14.3806 12.3875 14.2221C12.5344 14.0398 12.6754 13.9106 12.8224 13.74C12.9693 13.5697 13.0516 13.4815 13.1457 13.2816C13.2457 13.0877 13.175 12.8878 13.1045 12.7408C13.034 12.5939 12.4464 11.1598 12.2054 10.5781Z"
              fill="#29CC39"
            />
          </svg>
        </Box>
      </Flex>
    </>
  );
}
