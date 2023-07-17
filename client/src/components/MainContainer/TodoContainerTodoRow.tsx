import { Avatar, AvatarGroup, Flex, Text } from "@chakra-ui/react";
import React from "react";
import TodoCardWithPicture from "./TodoCardWithPicture";
import TodoCardWithoutPicture from "./TodoCardWithoutPicture";

const TodoContainerTodoRow = () => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        gap={2}
        width={"230px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <TodoCardWithPicture
          picture={
            "https://images.unsplash.com/photo-1688507383637-78f49f095269?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          }
          taskName={"Space Task 2"}
          title={"Make Money Online Through"}
        />

        <TodoCardWithoutPicture
          taskName={"Space Task 2"}
          title={"Make Money Online Through"}
        >
          <AvatarGroup size={"xs"} max={2}>
            <Avatar
              name="Ryan Florence"
              src="https://bit.ly/ryan-florence"
              size={"xs"}
            />
            <Avatar
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
              size={"xs"}
            />
          </AvatarGroup>
        </TodoCardWithoutPicture>

        <TodoCardWithoutPicture
          taskName={"Space Task 2"}
          title={"Search Engine Optimization..."}
        >
          <AvatarGroup size={"xs"} max={3}>
            <Avatar
              name="Ryan Florence"
              src="https://bit.ly/ryan-florence"
              size={"xs"}
            />
            <Avatar
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
              size={"xs"}
            />
            <Avatar
              name="Ryan Florence"
              src="https://bit.ly/ryan-florence"
              size={"xs"}
            />
          </AvatarGroup>
        </TodoCardWithoutPicture>

        <TodoCardWithoutPicture
          taskName={"Space Task 2"}
          title={"Characteristics Of A Successful"}
        >
          <Avatar
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
            size={"xs"}
          />
        </TodoCardWithoutPicture>

        <TodoCardWithoutPicture
          taskName={"Space Task 2"}
          title={"Getting Free Publicity"}
        >
          <Avatar
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
            size={"xs"}
          />
        </TodoCardWithoutPicture>

        <TodoCardWithoutPicture
          taskName={"Space Task 2"}
          title={"Importance Of The Custom..."}
        >
          <Avatar
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
            size={"xs"}
          />
        </TodoCardWithoutPicture>

        <Flex
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          width={"100%"}
        >
          <Text color={"#6B7A99"} fontSize={"12px"}>
            + NEW TASK
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default TodoContainerTodoRow;
