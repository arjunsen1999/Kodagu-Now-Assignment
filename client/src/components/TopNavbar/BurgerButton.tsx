import React from "react";
import { Button } from "@chakra-ui/react";

export default function BurgerButton() {
  return (
    <>
      <Button
        w={"50px"}
        h={"50px"}
        bg={"white"}
        boxShadow={"0px 2px 5px 0px rgba(38, 51, 77, 0.03)"}
        borderRadius={"100px"}
      ></Button>
    </>
  );
}
