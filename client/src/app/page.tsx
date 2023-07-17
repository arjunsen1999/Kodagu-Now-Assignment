"use client";
import SideNavbar from "@/components/SideNavbar/SideNavbar";
import TopNavbar from "@/components/TopNavbar/TopNavbar";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
     <Box minH={"100vh"} bg={"#F7F8FA"}>
        <TopNavbar />
        <Box display={"grid"} gridTemplateColumns={"90px 1fr"}>
          {/* // Side Bar start */}
          <SideNavbar />
          {/* // Side Bar End */}
        
        </Box>
      </Box>
    </>
  )
}
