import React from "react";
import { Button } from "@chakra-ui/react";

export default function ButtonIcon({ children }: React.ReactNode) {
  return (
    <>
      <Button
        paddingInline={"10px"}
        paddingBlock={"25px"}
        bg={"white"}
        boxShadow={"0px 2px 5px 0px rgba(38, 51, 77, 0.03)"}
        borderRadius={"50%"}
      >
        {children}
      </Button>
    </>
  );
}
