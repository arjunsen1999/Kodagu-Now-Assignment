import { TodoCardWithoutPictureProps } from "@/Types/TodoCardWithoutPictureType";
import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";

const TodoCardWithoutPicture = ({
  children,
  taskName,
  title,
}: TodoCardWithoutPictureProps) => {
  return (
    <>
      <Flex
        width={"230px"}
        padding={4}
        flexDirection={"column"}
        gap={2}
        justifyContent={"center"}
        alignItems={"flex-start"}
        backgroundColor={"white"}
        borderRadius={"5px"}
        boxShadow={"0px 2px 5px 0px rgba(38, 51, 77, 0.03)"}
      >
        <Flex w={"100%"} justifyContent={"space-between"} alignItems={"center"}>
          <Text color={"#ADB8CC"} fontSize={"10px"}>
            {taskName}
          </Text>
          {children}
        </Flex>

        <Text color={"#6B7A99"} fontSize={"12px"}>
          {title}
        </Text>
      </Flex>
    </>
  );
};

export default TodoCardWithoutPicture;
