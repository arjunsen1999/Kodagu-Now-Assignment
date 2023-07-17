import { Flex } from "@chakra-ui/react";
import React from "react";
import TodoNavbar from "./TodoNavbar";

const TodoContainer = () => {
  return (
    <>
      <Flex
        width={"100%"}
        flexDirection={"column"}
        gap={5}
        padding={5}
        justifyContent={"center"}
        alignContent={"center"}
        overflowX={"scroll"}
      >
        {/* Todo Navbar */}
        <TodoNavbar />
      </Flex>
    </>
  );
};

export default TodoContainer;
