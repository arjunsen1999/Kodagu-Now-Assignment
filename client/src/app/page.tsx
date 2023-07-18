"use client";
import HeadSection from "@/components/ContainSideBar/HeadSection";
import MenuSection from "@/components/ContainSideBar/MenuSection";
import SocialSection from "@/components/ContainSideBar/SocialSection";
import MainContainer from "@/components/MainContainer/MainContainer";
import SideNavbar from "@/components/SideNavbar/SideNavbar";
import TopNavbar from "@/components/TopNavbar/TopNavbar";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
export default function Home() {
  return (
    <>
      <ChakraProvider>
        <Box width={"100%"} minH={"100vh"} bg={"#F7F8FA"}>
          <TopNavbar />
          <Box
            width={"100%"}
            display={"grid"}
            gridTemplateColumns={{ base: "1fr", md: "90px 1fr" }}
          >
            {/* // Side Bar start */}
            <SideNavbar />
            {/* // Side Bar End */}
            <Flex
              width={"100%"}
              // p={"20px 30px"}
              gap={"20px"}
              flexDirection={{ base: "column", lg: "row" }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                width={{ base: "100%", lg: "25%" }}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"40px"}
                paddingInline={10}
                marginTop={{ base: 6, lg: 0 }}
              >
                <HeadSection />
                <MenuSection />
                <SocialSection />
              </Box>
              {/* Main Container */}
              <MainContainer />
            </Flex>
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
}
