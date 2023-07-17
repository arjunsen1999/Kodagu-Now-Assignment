import { containerNavbarPropsTypes } from "@/Types/ContainerNavbarLinkTypes";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const ContainerNavbarLinks = ({
  name,
  children,
}: containerNavbarPropsTypes) => {
  return (
    <>
      <Flex gap={2} justifyContent={"center"} alignItems={"center"} className="active">
        <Box>{children}</Box>
        <Text fontSize={"11px"}>
          {name}
        </Text>
      </Flex>
    </>
  );
};

export default ContainerNavbarLinks;
