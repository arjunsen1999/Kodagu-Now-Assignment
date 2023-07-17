"use client";
import SideNavbar from "@/components/SideNavbar/SideNavbar";
import TopNavbar from "@/components/TopNavbar/TopNavbar";
import HeadSection from "@/components/ContainSideBar/HeadSection";
import MenuSection from "@/components/ContainSideBar/MenuSection";
import SocialSection from "@/components/ContainSideBar/SocialSection";
import MainContainer from "@/components/MainContainer/MainContainer";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
     <Box minH={"100vh"} bg={"#F7F8FA"}>
        <TopNavbar />
        <Box display={"grid"} gridTemplateColumns={{base : "1fr", md : "90px 1fr"}}>
          {/* // Side Bar start */}
          <SideNavbar />
          {/* // Side Bar End */}
          <Box
            p={"20px 30px"}
            display={"grid"}
            gridTemplateColumns={{md : "400px", lg : "250px 1fr"}}
            gap={"20px"}
         
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              gap={"40px"}
            >
              <HeadSection />
              <MenuSection />
              <SocialSection />
            </Box>
            {/* Main Container */}
            <MainContainer />
          </Box>
        </Box>
      </Box>
    </>
  )
}
