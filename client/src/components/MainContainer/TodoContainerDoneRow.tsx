import { Avatar, Flex } from "@chakra-ui/react";
import React from "react";
import TodoCardWithoutPicture from "./TodoCardWithoutPicture";

const TodoContainerDoneRow = () => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        gap={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <TodoCardWithoutPicture
          taskName={"Space Task 2"}
          title={"Copper Canyon"}
        >
          <Avatar
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
            width={"20px"}
            height={"20px"}
          />
        </TodoCardWithoutPicture>
      </Flex>
    </>
  );
};

export default TodoContainerDoneRow;
