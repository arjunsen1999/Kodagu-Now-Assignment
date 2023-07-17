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
      <Grid
        gridTemplateColumns={"repeat(4,230px)"}
        gridTemplateRows={"auto"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        gap={"43px"}
      >
        {/* TO DO */}
        <Flex
          flexDirection={"column"}
          gap={8}
          justifyContent={"center"}
          alignItems={"center"}
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
        >
          <TodoNavbarLinks name={"DONE"} leftBorderColor={"#29CC39"} />
          <TodoContainerDoneRow />
        </Flex>
      </Grid>
    </>
  );
};

export default TodoNavbar;
