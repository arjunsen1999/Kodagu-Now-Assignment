import { Flex, Grid } from "@chakra-ui/react";
import React from "react";
import TodoNavbarLinks from "./TodoNavbarLinks";
import TodoContainerTodoRow from "./TodoContainerTodoRow";
import TodoContainerInWorkRow from "./TodoContainerInWorkRow";
import TodoContainerReviewRow from "./TodoContainerReviewRow";
import TodoContainerDoneRow from "./TodoContainerDoneRow";

const TodoNavbar = () => {
  return (
    <>
      <Flex
        width={"100%"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        gap={{ base: "25px", lg: "30px" }}
        overflowX={"auto"}
      >
        {/* TO DO */}
        <Flex
          flexDirection={"column"}
          gap={8}
          justifyContent={"center"}
          alignItems={"center"}
          width={{ base: "300px", lg: "230px" }}
        >
          <TodoNavbarLinks name={"TO DO"} leftBorderColor={"#8833FF"} />
          <TodoContainerTodoRow />
        </Flex>

        {/* IN WORK */}
        <Flex
          flexDirection={"column"}
          gap={8}
          justifyContent={"center"}
          alignItems={"center"}
          width={{ base: "300px", lg: "230px" }}
        >
          <TodoNavbarLinks name={"IN WORK"} leftBorderColor={"#33BFFF"} />
          <TodoContainerInWorkRow />
        </Flex>

        {/* REVIEW */}
        <Flex
          flexDirection={"column"}
          gap={8}
          justifyContent={"center"}
          alignItems={"center"}
          width={{ base: "300px", lg: "230px" }}
        >
          <TodoNavbarLinks name={"REVIEW"} leftBorderColor={"#FFCB33"} />
          <TodoContainerReviewRow />
        </Flex>

        {/* DONE */}
        <Flex
          flexDirection={"column"}
          gap={8}
          justifyContent={"center"}
          alignItems={"center"}
          width={{ base: "300px", lg: "230px" }}
        >
          <TodoNavbarLinks name={"DONE"} leftBorderColor={"#29CC39"} />
          <TodoContainerDoneRow />
        </Flex>
      </Flex>
    </>
  );
};

export default TodoNavbar;
