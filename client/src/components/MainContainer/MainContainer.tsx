import { Box } from "@chakra-ui/react";
import React from "react";
import ContainerNavbar from "./ContainerNavbar";
import TodoContainer from "./TodoContainer";
import PopUp from "./PopUp";

const MainContainer = () => {
  return (
    <>
      <Box
        border={"3px solid #EDEFF2"}
        borderRadius={"10px"}
        position={"relative"}
        width={{ base: "330px", lg: "75%" }}
      >
        {/* Container Navbar */}
        <ContainerNavbar />
        {/* Todo Container */}
        <TodoContainer />
        {/* PopUp */}
        <PopUp />
      </Box>
    </>
  );
};

export default MainContainer;
